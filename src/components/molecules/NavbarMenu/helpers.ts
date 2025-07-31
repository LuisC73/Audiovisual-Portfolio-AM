import { easeIn, easeInOut, easeOut } from 'motion';

export const getDinamicImage = (page: string) => {
  switch (page) {
    case 'home':
      return '/images/home.jpg';
    case 'about':
      return '/images/about.jpg';
    case 'photographs':
      return '/images/photographs.jpg';
    case 'videos':
      return '/images/videos.jpg';
    case '404':
      return '/images/404.jpg';
    default:
      return '/images/default.jpg';
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
