import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useState } from 'react';
import { CarouselOptions } from './types';

export const useCarousel = (options: CarouselOptions) => {
  const { autoplayInterval = 4000, ...emblaOptions } = options;

  const autoplay = Autoplay({
    delay: autoplayInterval,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions, [autoplay]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return {
    emblaRef,
    emblaApi,
    selectedIndex,
    scrollSnaps,
  };
};
