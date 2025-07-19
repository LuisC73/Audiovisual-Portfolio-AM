import { useState } from 'react';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';
import { ModalVideoProps } from './types';

export const ModalVideo = ({ src }: ModalVideoProps) => {
  const [loading, setLoading] = useState(true);

  const handleVideoReady = () => {
    setLoading(false);
  };

  return (
    <div>
      {!loading && <div className="w-full aspect-video bg-gray-color animate-pulse rounded-md" />}

      <VideoPlayer
        videoSrc={src}
        onReady={handleVideoReady}
        autoplay={false}
        muted={false}
        loop={false}
      />
    </div>
  );
};
