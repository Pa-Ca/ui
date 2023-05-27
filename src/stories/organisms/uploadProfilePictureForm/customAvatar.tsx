import React, { useRef, useState, useEffect, useMemo } from "react";

interface CustomAvatarProps {
  /**
   * Image source
   */
  src?: string;
  /**
   * Width of the avatar
   */
  width: number;
  /**
   * Height of the avatar
   */
  height: number;
  /**
   * Function to be called when the user clicks on the crop button
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
  const [circleX, setCircleX] = useState(width / 2);
  const [circleY, setCircleY] = useState(height / 2);
  const [updateCanvas, setUpdateCanvas] = useState(true);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isDraggingCircle, setIsDraggingCircle] = useState(false);
  const [isDraggingHandle, setIsDraggingHandle] = useState(false);
  const [radius, setRadius] = useState(Math.min(width, height) / 4);

  // Target image dimensions
  const resizeWidth = width;
  const resizeHeight = height;

  const img = useMemo(() => {
    const image = new Image();
    image.src = src || "";
    return image;
  }, [src]);

  const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
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
    let previewCtx = previewCanvas.getContext("2d", {
      willReadFrequently: true,
    });
    if (!previewCtx) return;
    previewCtx.putImageData(imageData, 0, 0);
    let dataUrl = previewCanvas.toDataURL();
    setPreview(dataUrl);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
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
    console.log(canvas, canvas.width, canvas.height, imgX, imgY, width, height);

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
  };

  useEffect(() => {
    setPreview(null);

    if (!canvasRef.current) return;

    let canvas = canvasRef.current;
    let ctx = canvas.getContext("2d", { willReadFrequently: true });

    if (!ctx || !src) return;

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

      // create a new image from the canvas that is the size of the circle and
      // contains only the pixels inside the circle
      let mod_radius = radius * 0.95;
      console.log(
        radius,
        circleX - mod_radius,
        circleY - mod_radius,
        mod_radius * 2,
        mod_radius * 2
      );
      const imageData = ctx.getImageData(
        circleX - mod_radius,
        circleY - mod_radius,
        mod_radius * 2,
        mod_radius * 2
      );
      let croppedImageCanvas = document.createElement("canvas");
      if (!croppedImageCanvas) return;
      croppedImageCanvas.width = mod_radius * 2.0;
      croppedImageCanvas.height = mod_radius * 2.0;
      let previewCtx = croppedImageCanvas.getContext("2d", {
        willReadFrequently: true,
      });
      if (!previewCtx) return;
      previewCtx.putImageData(imageData, 0, 0);
      // Convert the canvas to a dataUrl and set it to state
      let dataUrl = croppedImageCanvas.toDataURL();
      // Apply the onCrop callback to the image (it gets the images a dataUrl)
      onCrop(dataUrl);
    };
    img.src = src;
    setUpdateCanvas(false);
  }, [src, circleX, circleY, radius, updateCanvas]);

  return (
    <div>
      {src && (
        <div>
          <canvas
            ref={canvasRef}
            width={width}
            height={height}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          />
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
