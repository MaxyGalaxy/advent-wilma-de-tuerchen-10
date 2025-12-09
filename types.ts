export interface Market {
  id: string;
  name: string;
  city: string;
  region: string;
  description: string;
  dates: string;
  lat: number;
  lng: number;
  link: string;
  imageUrl: string;
  isSpecial?: boolean; // Highlight certain markets if needed
}

export enum WilmaColor {
  Yellow = '#FBFD37',
  DarkNavy = '#252B36',
  LightBlue = '#AEC2C6',
  MediumBlue = '#3E5C76',
  Grey = '#5C6166',
  Pink = '#EAC8B9'
}
