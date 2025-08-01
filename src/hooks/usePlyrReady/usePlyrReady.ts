'use client';

import { useRef, useEffect } from 'react';
import { APITypes } from 'plyr-react';

export const usePlyrReady = (onReady?: (player: APITypes) => void) => {
  const plyrRef = useRef<APITypes | null>(null);

  useEffect(() => {
    if (plyrRef.current && onReady) {
      onReady(plyrRef.current);
    }
  }, [onReady]);

  return plyrRef;
};
