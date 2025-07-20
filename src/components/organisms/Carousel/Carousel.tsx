import { generateCarouselClasses, getCarouselSlides } from './helpers';
import { CarouselProps } from './types';
import { useCarousel } from '@/hooks';

export const Carousel = ({ options, className, itemsPerSlide, children }: CarouselProps) => {
  const { emblaRef } = useCarousel(options);
  const childArray = Array.isArray(children) ? children : [children];
  const chunked = getCarouselSlides(childArray, itemsPerSlide || 1, !!options?.loop);
  const carouselClass = generateCarouselClasses(className);

  return (
    <div
      className={carouselClass}
      ref={emblaRef}
    >
      <div className="flex touch-pan-y">
        {chunked.map((group, idx) => (
          <div
            className="flex-[0_0_100%] px-2 flex gap-4"
            key={idx}
          >
            {group.map((item, itemIdx) => (
              <div
                key={itemIdx}
                className="flex-1"
              >
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
