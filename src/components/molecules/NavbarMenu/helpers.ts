import { IMAGES_ASSETS } from '@/constants';
import { easeIn, easeInOut, easeOut } from 'motion';

export const getDinamicImage = (page: string) => {
  switch (page) {
    case 'home':
      return IMAGES_ASSETS.ana.ana_8;
    case 'about':
      return IMAGES_ASSETS.ana.ana_4;
    case 'photographs':
      return IMAGES_ASSETS.landscapes.landscape_1;
    case 'videos':
      return IMAGES_ASSETS.ana.ana_9;
    case '404':
      return IMAGES_ASSETS.ana.ana_6;
    default:
      return IMAGES_ASSETS.ana.ana_8;
  }
};

export const menuVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: easeOut,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easeInOut,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
      ease: easeIn,
    },
  },
};
