import React from 'react';
import { UploadedImage } from '../types/image';
import { ExternalLink, Trash2 } from 'lucide-react';

interface ImageGalleryProps {
  images: UploadedImage[];
  onDelete: (id: string) => void;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onDelete }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image) => (
        <div key={image.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative aspect-video">
            <img
              src={image.display_url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-900 truncate">
                {image.image.filename}
              </h3>
              <span className="text-xs text-gray-500">
                {Math.round(parseInt(image.size) / 1024)} KB
              </span>
            </div>
            <div className="mt-4 flex justify-between">
              <a
                href={image.url_viewer}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 flex items-center gap-1"
              >
                <ExternalLink className="h-4 w-4" />
                View
              </a>
              <button
                onClick={() => onDelete(image.id)}
                className="text-red-500 hover:text-red-700 flex items-center gap-1"
              >
                <Trash2 className="h-4 w-4" />
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};