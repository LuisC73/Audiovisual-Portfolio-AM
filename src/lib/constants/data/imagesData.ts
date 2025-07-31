import { IMAGES_ASSETS } from '../images/images';
import { IMAGE_CATEGORIES } from './categories';

export const HIGHLIGHT_IMAGES_DATA = [
  {
    id: 'landscape-photo',
    type: IMAGE_CATEGORIES.landscapes,
    img: IMAGES_ASSETS.landscapes.landscape_1,
    orientation: 'vertical',
  },
  {
    id: 'space-photo',
    type: IMAGE_CATEGORIES.space,
    img: IMAGES_ASSETS.space.space_5,
    orientation: 'horizontal',
  },
  {
    id: 'cafe-photo',
    type: IMAGE_CATEGORIES.cafe,
    img: IMAGES_ASSETS.cafe.cafe_6,
    orientation: 'horizontal',
  },
  {
    id: 'lunch-photo',
    type: IMAGE_CATEGORIES.lunch_grill,
    img: IMAGES_ASSETS.lunch_grill.lunch_grill_4,
    orientation: 'vertical',
  },
  {
    id: 'cdi-photo',
    type: IMAGE_CATEGORIES.picture_cdi,
    img: IMAGES_ASSETS.picture_cdi.picture_cdi_8,
    orientation: 'vertical',
  },
  {
    id: 'documentary-photo',
    type: IMAGE_CATEGORIES.documentary,
    img: IMAGES_ASSETS.documentary.documentary_5,
    orientation: 'horizontal',
  },
];

export const IMAGE_DATA = [];
