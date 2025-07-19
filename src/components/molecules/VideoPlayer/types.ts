import { APITypes } from "plyr-react";

export interface VideoPlayerProps {
  videoSrc: string;
  videoType?: string;
  controls?: string[];
  ratio?: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  poster?: string;
  preload?: 'none' | 'metadata' | 'auto';
  playsinline?: boolean;
  crossorigin?: 'anonymous' | 'use-credentials';
  className?: string;
  onReady?: (player: APITypes) => void;
  onPlay?: (e: React.SyntheticEvent<HTMLVideoElement>) => void;
  onPause?: (e: React.SyntheticEvent<HTMLVideoElement>) => void;
  onEnded?: (e: React.SyntheticEvent<HTMLVideoElement>) => void;
  onTimeUpdate?: (e: React.SyntheticEvent<HTMLVideoElement>) => void;
  onVolumeChange?: (e: React.SyntheticEvent<HTMLVideoElement>) => void;
  onFullscreenChange?: (e: React.SyntheticEvent<HTMLVideoElement>) => void;
  onSeeked?: (e: React.SyntheticEvent<HTMLVideoElement>) => void;
  onRateChange?: (e: React.SyntheticEvent<HTMLVideoElement>) => void;
  onError?: (e: React.SyntheticEvent<HTMLVideoElement>) => void;
}
