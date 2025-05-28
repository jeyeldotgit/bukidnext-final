export type Module = {
  id: number;
  title: string;
  progress: number;
  thumbnail: string;
  language: 'English' | 'Tagalog' | 'Cebuano';
  duration: string;
  isDownloaded?: boolean;
  category?: string;
}; 