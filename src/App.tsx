import React, { useState } from 'react';
import { ImageEditor } from './components/ImageEditor';
import { Sidebar } from './components/Sidebar';
import { ImageSettings } from './types/editor';
import { toast, Toaster } from 'react-hot-toast';

const defaultSettings: ImageSettings = {
  padding: 20,
  inset: false,
  borderRadius: 8,
  shadow: 10,
  background: '#ffffff',
  aspectRatio: 'Auto',
  hideWatermark: false,
};

function App() {
  const [image, setImage] = useState<string | null>(null);
  const [settings, setSettings] = useState<ImageSettings>(defaultSettings);

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSettingsChange = (newSettings: Partial<ImageSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  const handleSavePreset = () => {
    localStorage.setItem('imageEditorPreset', JSON.stringify(settings));
    toast.success('Preset saved successfully!');
  };

  return (
    <div className="flex h-screen">
      <Toaster position="top-right" />
      <ImageEditor
        image={image}
        settings={settings}
        onImageUpload={handleImageUpload}
      />
      <Sidebar
        settings={settings}
        onSettingsChange={handleSettingsChange}
        onSavePreset={handleSavePreset}
      />
    </div>
  );
}

export default App;