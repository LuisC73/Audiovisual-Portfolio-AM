import {
  ANIMATED_PIECES_LOOPS,
  ANIMATIONS_LOOPS,
  REEL_LOOP,
  SOCIAL_MEDIA_LOOPS,
  VIDEO_MONTAGE_LOOPS,
} from '@/constants/videos/loops';

import {
  ANIMATED_PIECES_VIDEOS,
  ANIMATIONS_VIDEOS,
  REEL_VIDEO,
  SOCIAL_MEDIA_VIDEOS,
  VIDEO_MONTAGE_VIDEOS,
} from '@/constants/videos/videos';

export interface VideoAssets {
  animations: typeof ANIMATIONS_VIDEOS;
  video_montage: typeof VIDEO_MONTAGE_VIDEOS;
  animated_pieces: typeof ANIMATED_PIECES_VIDEOS;
  social_media: typeof SOCIAL_MEDIA_VIDEOS;
  reel: typeof REEL_VIDEO;
}

export interface LoopAssets {
  animations: typeof ANIMATIONS_LOOPS;
  video_montage: typeof VIDEO_MONTAGE_LOOPS;
  animated_pieces: typeof ANIMATED_PIECES_LOOPS;
  social_media: typeof SOCIAL_MEDIA_LOOPS;
  reel: typeof REEL_LOOP;
}
