import { IMAGE_CATEGORIES } from '@/constants';
import { VIDEO_CATEGORIES } from '@/constants/data/categories';

export type ImageCategory =
  (typeof IMAGE_CATEGORIES)[keyof typeof IMAGE_CATEGORIES];

export type VideoCategory =
  (typeof VIDEO_CATEGORIES)[keyof typeof VIDEO_CATEGORIES];

export interface ImageData {
  id: string;
  type: ImageCategory;
  img: string;
  orientation: 'vertical' | 'horizontal';
}

export interface VideoData {
  id: string;
  title: string;
  type: VideoCategory;
  year: string;
  loop: string;
  video: string;
}
