'use client';

import dynamic from 'next/dynamic';
// import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';
import { VideoPlayerProps } from './types';
import { usePlyrReady } from '@/hooks';
import { generateVideoClasses } from './helpers';

const Plyr = dynamic(() => import('plyr-react'), { ssr: false });

export const VideoPlayer = (props: VideoPlayerProps) => {
  const {
    videoSrc,
    videoType = 'video/mp4',
    controls = ['play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
    ratio = '16:9',
    autoplay = false,
    muted = false,
    loop = false,
    poster,
    preload = 'metadata',
    playsinline = true,
    crossorigin = 'anonymous',
    className = '',
    onReady,
    onError,
    onPlay,
    onPause,
    onEnded,
    onTimeUpdate,
    onVolumeChange,
    onSeeked,
    onRateChange,
  } = props;

  const plyrRef = usePlyrReady(onReady);
  const videoClass: string = generateVideoClasses(className);

  return (
    <Plyr
      ref={plyrRef}
      source={{
        type: 'video',
        sources: [{ src: videoSrc, type: videoType }],
      }}
      options={{ controls, ratio }}
      autoPlay={autoplay}
      muted={muted}
      loop={loop}
      poster={poster}
      preload={preload}
      playsInline={playsinline}
      crossOrigin={crossorigin}
      onError={onError}
      onPlay={onPlay}
      onPause={onPause}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onVolumeChange={onVolumeChange}
      onSeeked={onSeeked}
      onRateChange={onRateChange}
      className={videoClass}
    />
  );
};
