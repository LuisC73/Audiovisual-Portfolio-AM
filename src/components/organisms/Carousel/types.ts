import useEmblaCarousel from "embla-carousel-react";
import { ReactNode } from "react";

type CarouselOptions = Parameters<typeof useEmblaCarousel>[0] & {
  autoplayInterval?: number;
};

export interface CarouselProps {
  options: CarouselOptions;
  className?: string;
  itemsPerSlide?: number;
  children: ReactNode;
}