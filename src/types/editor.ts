export interface ImageSettings {
  padding: number;
  inset: boolean;
  borderRadius: number;
  shadow: number;
  background: string;
  aspectRatio: string;
  hideWatermark: boolean;
}

export type AspectRatioOption = 'Auto' | '4:3' | '3:2' | '16:9' | '1:1' | 'X' | 'Facebook' | 'Instagram' | 'LinkedIn' | 'YouTube' | 'Pinterest' | 'Reddit' | 'Snapchat';