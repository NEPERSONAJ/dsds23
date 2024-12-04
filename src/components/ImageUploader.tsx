import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Image as ImageIcon } from 'lucide-react';

interface ImageUploaderProps {
  onUpload: (file: File) => void;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ onUpload }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onUpload(acceptedFiles[0]);
    }
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    maxSize: 32 * 1024 * 1024, // 32MB
  });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors"
    >
      <input {...getInputProps()} />
      <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
      {isDragActive ? (
        <p className="text-blue-500">Drop the image here...</p>
      ) : (
        <div>
          <p className="text-gray-600">Drag & drop an image here, or click to select</p>
          <p className="text-sm text-gray-400 mt-2">Supports: PNG, JPG, GIF (up to 32MB)</p>
        </div>
      )}
    </div>
  );
};