import React from 'react';
import { HexColorPicker } from 'react-colorful';
import { ImageSettings, AspectRatioOption } from '../types/editor';
import { Save } from 'lucide-react';

interface SidebarProps {
  settings: ImageSettings;
  onSettingsChange: (settings: Partial<ImageSettings>) => void;
  onSavePreset: () => void;
}

const aspectRatios: AspectRatioOption[] = [
  'Auto', '4:3', '3:2', '16:9', '1:1', 'X',
  'Facebook', 'Instagram', 'LinkedIn', 'YouTube', 'Pinterest', 'Reddit', 'Snapchat'
];

const backgroundPresets = [
  'linear-gradient(45deg, #f81ce5, #7928ca)',
  'linear-gradient(45deg, #00dfd8, #007cf0)',
  'linear-gradient(45deg, #7928ca, #ff0080)',
  'linear-gradient(45deg, #ff4d4d, #f9cb28)',
  'linear-gradient(45deg, #00dfd8, #00b4d8)',
  'linear-gradient(45deg, #00f5a0, #00d9f5)',
  'linear-gradient(45deg, #e879f9, #d946ef)',
  'linear-gradient(45deg, #f472b6, #db2777)',
];

export const Sidebar: React.FC<SidebarProps> = ({
  settings,
  onSettingsChange,
  onSavePreset,
}) => {
  return (
    <div className="w-80 bg-white border-l border-gray-200 p-6 overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Presets</h2>
        <button
          onClick={onSavePreset}
          className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
        >
          <Save className="w-4 h-4" />
          Save
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Padding</label>
          <input
            type="range"
            min="0"
            max="100"
            value={settings.padding}
            onChange={(e) => onSettingsChange({ padding: Number(e.target.value) })}
            className="w-full"
          />
          <div className="text-sm text-gray-500 mt-1">{settings.padding}px</div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium">Inset</label>
            <button
              className={`w-10 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${
                settings.inset ? 'bg-black' : 'bg-gray-200'
              }`}
              onClick={() => onSettingsChange({ inset: !settings.inset })}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform duration-200 ease-in-out ${
                  settings.inset ? 'translate-x-4' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Border Radius</label>
          <input
            type="range"
            min="0"
            max="50"
            value={settings.borderRadius}
            onChange={(e) => onSettingsChange({ borderRadius: Number(e.target.value) })}
            className="w-full"
          />
          <div className="text-sm text-gray-500 mt-1">{settings.borderRadius}px</div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Shadow</label>
          <input
            type="range"
            min="0"
            max="100"
            value={settings.shadow}
            onChange={(e) => onSettingsChange({ shadow: Number(e.target.value) })}
            className="w-full"
          />
          <div className="text-sm text-gray-500 mt-1">{settings.shadow}px</div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-4">Background</label>
          <div className="grid grid-cols-4 gap-2 mb-4">
            {backgroundPresets.map((preset, index) => (
              <button
                key={index}
                className="w-12 h-12 rounded-lg"
                style={{ background: preset }}
                onClick={() => onSettingsChange({ background: preset })}
              />
            ))}
          </div>
          <HexColorPicker
            color={settings.background}
            onChange={(color) => onSettingsChange({ background: color })}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Ratio / Size</label>
          <div className="grid grid-cols-4 gap-2">
            {aspectRatios.map((ratio) => (
              <button
                key={ratio}
                className={`px-3 py-2 text-sm rounded-md ${
                  settings.aspectRatio === ratio
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => onSettingsChange({ aspectRatio: ratio })}
              >
                {ratio}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium">Hide Watermark</label>
            <button
              className={`w-10 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${
                settings.hideWatermark ? 'bg-black' : 'bg-gray-200'
              }`}
              onClick={() => onSettingsChange({ hideWatermark: !settings.hideWatermark })}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform duration-200 ease-in-out ${
                  settings.hideWatermark ? 'translate-x-4' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};