import React, { useRef, useState } from 'react';

const CustomAvatar = () => {
  
    const [image, setImage] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && e.target.result) {
          setImage(e.target.result.toString());
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true);
    setStartX(event.nativeEvent.offsetX);
    setStartY(event.nativeEvent.offsetY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const imageData = ctx.getImageData(startX, startY, width, height);
        if (previewCanvasRef.current) {
          const previewCanvas = previewCanvasRef.current;
          previewCanvas.width = width;
          previewCanvas.height = height;
          const previewCtx = previewCanvas.getContext('2d');
          if (previewCtx) {
            previewCtx.putImageData(imageData, 0, 0);
            setPreview(previewCanvas.toDataURL());
          }
        }
      }
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDragging) {
      const currentX = event.nativeEvent.offsetX;
      const currentY = event.nativeEvent.offsetY;
      setWidth(currentX - startX);
      setHeight(currentY - startY);
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (ctx && image) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          let img = new Image();
          img.src = image;
          ctx.drawImage(img, 0, 0);
          ctx.strokeStyle = 'red';
          ctx.strokeRect(startX, startY, width, height);
        }
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {image && (
        <div>
          <canvas
            ref={canvasRef}
            width={300}
            height={300}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          />
        </div>
      )}
      {preview && (
        <div>
          <img src={preview} alt="Preview" />
          <canvas ref={previewCanvasRef} style={{ display: 'none' }} />
        </div>
      )}
    </div>
  );
};

export default CustomAvatar;
