import { VideoData } from '@/types';
import { LOOPS_ASSETS } from '../videos/loops';
import { VIDEOS_ASSETS } from '../videos/videos';
import { VIDEO_CATEGORIES } from './categories';

export const HIGHLIGHT_VIDEOS_DATA: VideoData[] = [
  {
    id: 'podcast-video',
    title: 'Expectativa Podcast',
    type: VIDEO_CATEGORIES.video_montage,
    year: '2024',
    loop: LOOPS_ASSETS.video_montage.stories_teaser,
    video: VIDEOS_ASSETS.video_montage.stories_teaser,
  },
  {
    id: 'cafe-noble-video',
    title: 'Video promo para Café Noble',
    type: VIDEO_CATEGORIES.video_montage,
    year: '2024',
    loop: LOOPS_ASSETS.video_montage.noble_cafe,
    video: VIDEOS_ASSETS.video_montage.noble_cafe,
  },
  {
    id: 'organizacional-video',
    title: 'Fecha especial organizacional',
    type: VIDEO_CATEGORIES.animated_pieces,
    year: '2023',
    loop: LOOPS_ASSETS.animated_pieces.love_friendship_day,
    video: VIDEOS_ASSETS.animated_pieces.love_friendship_day,
  },
  {
    id: 'proyecto-interno-video',
    title: 'Proyecto interno organizacional',
    type: VIDEO_CATEGORIES.animated_pieces,
    year: '2024',
    loop: LOOPS_ASSETS.animated_pieces.noble_library,
    video: VIDEOS_ASSETS.animated_pieces.noble_library,
  },
];

export const VIDEOS_DATA: VideoData[] = [];
