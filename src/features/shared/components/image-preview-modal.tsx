"use client";

import * as React from "react";
import { X, ZoomIn, ZoomOut, RotateCw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface ImagePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export function ImagePreviewModal({ isOpen, onClose, imageSrc, imageAlt }: ImagePreviewModalProps) {
  const [scale, setScale] = React.useState(1);
  const [rotation, setRotation] = React.useState(0);

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.25, 0.5));
  const handleRotate = () => setRotation((prev) => (prev + 90) % 360);
  const handleReset = () => {
    setScale(1);
    setRotation(0);
  };

  React.useEffect(() => {
    if (isOpen) {
      handleReset();
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-transparent shadow-none">
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-w-full max-h-[90vh] object-contain transition-transform duration-200"
            style={{
              transform: `scale(${scale}) rotate(${rotation}deg)`,
            }}
          />

          <Button
            variant="outline"
            size="icon"
            className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-background/80 backdrop-blur rounded-lg p-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={handleZoomOut}
              disabled={scale <= 0.5}
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium w-12 text-center">{Math.round(scale * 100)}%</span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={handleZoomIn}
              disabled={scale >= 3}
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
            <div className="w-px h-6 bg-border mx-1" />
            <Button variant="outline" size="icon" className="h-8 w-8" onClick={handleRotate}>
              <RotateCw className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
