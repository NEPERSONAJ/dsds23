import React from 'react';
import { ImageSettings } from '../types/editor';

interface ImageEditorProps {
  image: string | null;
  settings: ImageSettings;
  onImageUpload: (file: File) => void;
}

export const ImageEditor: React.FC<ImageEditorProps> = ({
  image,
  settings,
  onImageUpload,
}) => {
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      onImageUpload(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageUpload(file);
    }
  };

  const getAspectRatioStyle = () => {
    switch (settings.aspectRatio) {
      case '4:3': return { aspectRatio: '4/3' };
      case '3:2': return { aspectRatio: '3/2' };
      case '16:9': return { aspectRatio: '16/9' };
      case '1:1': return { aspectRatio: '1/1' };
      default: return {};
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
      <div
        className="relative w-full max-w-3xl"
        style={getAspectRatioStyle()}
      >
        {image ? (
          <div
            className="w-full h-full relative overflow-hidden transition-all duration-200"
            style={{
              padding: `${settings.padding}px`,
              borderRadius: `${settings.borderRadius}px`,
              boxShadow: settings.shadow ? `0 ${settings.shadow}px ${settings.shadow * 2}px rgba(0,0,0,0.1)` : 'none',
              background: settings.background,
            }}
          >
            <img
              src={image}
              alt="Edited"
              className="w-full h-full object-cover transition-all duration-200"
              style={{
                borderRadius: settings.inset ? `${settings.borderRadius}px` : '0',
              }}
            />
            {!settings.hideWatermark && (
              <div className="absolute bottom-2 right-2 text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded">
                Created with Image Editor
              </div>
            )}
          </div>
        ) : (
          <div
            className="w-full h-96 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <div className="text-center">
              <p className="text-gray-600">Drop your image here, paste from clipboard, or</p>
              <label className="mt-2 inline-block px-4 py-2 bg-black text-white rounded-md cursor-pointer hover:bg-gray-800">
                choose a file
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileSelect}
                />
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};