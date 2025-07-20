import useEmblaCarousel from 'embla-carousel-react';

export type CarouselOptions = Parameters<typeof useEmblaCarousel>[0] & {
  autoplayInterval?: number;
};
