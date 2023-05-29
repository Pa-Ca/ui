import React, { useRef, useState, useEffect, useMemo, useCallback } from "react";

interface CustomAvatarProps {
  /** 
   * Image source 
   */
  src?: string;
  /** 
   * Width of the avatar canvas 
   */
  width: number;
  /** 
   * Height of the avatar canvas 
   */
  height: number;
  /** 
   * Function to be called every time the image is cropped (The user moves the circle or the handle)
   */
  onCrop: (preview: string) => void;
  /** 
   * Color of the shading 
   */
  shadingColor: string;
}

// Define clip function
const clip = (x: number, min: number, max: number) => {
  return Math.min(Math.max(x, min), max);
};

const CustomAvatar = ({
  width,
  height,
  onCrop,
  shadingColor,
  src,
}: CustomAvatarProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // State for circle position
  const [circleX, setCircleX] = useState(width / 2);
  const [circleY, setCircleY] = useState(height / 2);

  // State for updating canvas
  const [updateCanvas, setUpdateCanvas] = useState(true);

  // State for preview image
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  // State for dragging circle and handle
  const [isDraggingCircle, setIsDraggingCircle] = useState(false);
  const [isDraggingHandle, setIsDraggingHandle] = useState(false);

  // State for circle radius
  const [radius, setRadius] = useState(Math.min(width, height) / 4);

  // State for initial render
  const [initial_render, setInitialRender] = useState(true);

  // Target image dimensions
  const resizeWidth = width;
  const resizeHeight = height;

  // Create image object from src prop
  const img = useMemo(() => {
    const image = new Image();
    image.src = src || "";
    return image;
  }, [src]);


  // Handle mouse down event on canvas
  const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Calculate distance from center of circle to mouse position
    const distanceFromCenter = Math.sqrt(
      (x - circleX) ** 2 + (y - circleY) ** 2
    );

    // Check if user clicked inside circle
    if (distanceFromCenter < radius * 0.75) {
      setIsDraggingCircle(true);
      return;
    }

    // Check if user clicked on handle
    if (
      distanceFromCenter >= radius * 0.75 &&
      distanceFromCenter <= radius * 1.25
    ) {
      setIsDraggingHandle(true);
      return;
    }
  };

  // Handle mouse up event on canvas
  const handleMouseUp = () => {
    setIsDraggingCircle(false);
    setIsDraggingHandle(false);

    if (!canvasRef.current || !previewCanvasRef.current) return;

    // Crop image
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    ctx.beginPath();
    ctx.arc(circleX, circleY, radius - 1, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();

    // Create preview
    let imageData = ctx.getImageData(
      circleX - radius,
      circleY - radius,
      radius * 2,
      radius * 2
    );

    let previewCanvas = previewCanvasRef.current;
    previewCanvas.width = radius * 2;
    previewCanvas.height = radius * 2;
    let previewCtx = previewCanvas.getContext("2d", { willReadFrequently: true });
    if (!previewCtx) return;

    previewCtx.putImageData(imageData, 0, 0);
    let dataUrl = previewCanvas.toDataURL();
    setPreview(dataUrl);

  };

  // Handle mouse move event on canvas
  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLCanvasElement>) => {
      if (!canvasRef.current) return;

      // Get mouse position relative to canvas
      let canvas = canvasRef.current;
      let rect = canvas.getBoundingClientRect();
      let x = event.clientX - rect.left;
      let y = event.clientY - rect.top;

      let scaleWidth = resizeWidth / img.width;
      let scaleHeight = resizeHeight / img.height;
      let scale = Math.min(scaleWidth, scaleHeight);
      let width = img.width * scale;
      let height = img.height * scale;
      let imgX = canvas.width / 2 - width / 2;
      let imgY = canvas.height / 2 - height / 2;

      // Move circle
      if (isDraggingCircle) {
        // Constrain circle position to image area
        x = clip(x, imgX + radius, imgX + width - radius);
        y = clip(y, imgY + radius, imgY + height - radius);

        setCircleX(x);
        setCircleY(y);
        return;
      }

      // Resize circle
      if (isDraggingHandle) {
        let dx = x - circleX;
        let dy = y - circleY;

        let maxRadiusBase = Math.min(canvas.width, canvas.height) / 2;

        // Get the maximum possible radius for the circle to fit inside the image
        let maxRadiusX = Math.min(imgX + width - circleX, circleX - imgX);
        let maxRadiusY = Math.min(imgY + height - circleY, circleY - imgY);
        let maxRadius = Math.min(maxRadiusX, maxRadiusY, maxRadiusBase);

        let minRadius = maxRadius * 0.15;

        let radius = clip(Math.sqrt(dx * dx + dy * dy), minRadius, maxRadius);

        setRadius(radius);
        return;
      }
    },
    [canvasRef, 
      img, 
      resizeWidth, 
      resizeHeight, 
      isDraggingCircle, 
      isDraggingHandle, 
      circleX, 
      circleY, 
      radius, 
      setCircleX, 
      setCircleY, 
      setRadius]
  );
  
  // Dependencies for useEffect (this is a way to prevent useEffect from running on every render)
  const [prevDeps, setPrevDeps] = useState([src, circleX, circleY, radius, updateCanvas]);

  useEffect(() => {
    if (prevDeps.every((dep, i) => dep === [src, circleX, circleY, radius, updateCanvas][i]) && !initial_render) {
      return;
    }
    setInitialRender(false);

    setPreview(null);

    if (!canvasRef.current) return;

    let canvas = canvasRef.current;
    let ctx = canvas.getContext("2d", { willReadFrequently: true });

    if (!src) return;

    img.onload = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let scaleWidth = canvas.width / img.width;
      let scaleHeight = canvas.height / img.height;
      let scale = Math.min(scaleWidth, scaleHeight);

      let width = img.width * scale;
      let height = img.height * scale;

      let x = canvas.width / 2 - width / 2;
      let y = canvas.height / 2 - height / 2;

      ctx.drawImage(img, x, y, width, height);

      // Only if necessary update the radius (This is when a new image is loaded)
      // and the radius of the circle is greater than the maximum possible radius for the new image

      if (radius > Math.min(width, height) / 2) {
        setRadius(Math.min(width, height) / 2);
      }

      // Draw shading

      ctx.fillStyle = shadingColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Cut out circle

      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(circleX, circleY, radius + 1, 0, Math.PI * 2);
      ctx.fill();

      // Draw image inside circle

      ctx.globalCompositeOperation = "source-over";
      ctx.save();
      ctx.beginPath();
      ctx.arc(circleX, circleY, radius + 1, 0, Math.PI * 2);
      ctx.clip();

      ctx.drawImage(img, x, y, width, height);

      ctx.restore();

      // Draw dashed border

      ctx.strokeStyle = "white";
      ctx.setLineDash([5]);
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(circleX, circleY, radius + 1, 0, Math.PI * 2);
      ctx.stroke();

      // create a new image from the canvas that is the size of the circle and contains only the 
      // pixels inside the circle

      let mod_radius = radius * 0.95;
      const imageData = ctx.getImageData(
        circleX - mod_radius,
        circleY - mod_radius,
        mod_radius * 2,
        mod_radius * 2
      );

      // Create a new canvas and put the cutout image on it

      let croppedImageCanvas = document.createElement("canvas");
      if (!croppedImageCanvas) return;

      croppedImageCanvas.width = mod_radius * 2.0;
      croppedImageCanvas.height = mod_radius * 2.0;

      let previewCtx = croppedImageCanvas.getContext("2d", { willReadFrequently: true });
      if (!previewCtx) return;

      previewCtx.putImageData(imageData, 0, 0);

      let dataUrl = croppedImageCanvas.toDataURL();

      onCrop(dataUrl);

    };

    img.src = src;

    setPrevDeps([src, circleX, circleY, radius, updateCanvas]);
    setUpdateCanvas(false);

  },
    [src, circleX, circleY, radius, updateCanvas, prevDeps]
  );

  return (
    <div>
      {src && (
        <div>
          <canvas ref={canvasRef} 
                  width={width} 
                  height={height} 
                  onMouseDown={handleMouseDown} 
                  onMouseUp={handleMouseUp} 
                  onMouseMove={handleMouseMove} />
        </div>
      )}
      {preview && (
        <div>
          <img src={preview} alt="Preview" />
        </div>
      )}
    </div>
  );
};

export default CustomAvatar;
