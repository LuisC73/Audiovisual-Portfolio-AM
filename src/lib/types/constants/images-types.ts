import {
  ANA_IMAGES,
  ARTISTIC_IMAGES,
  BRANDS_IMAGES,
  CAFE_IMAGES,
  CANDLES_IMAGES,
  DOCUMENTARY_IMAGES,
  EVENT_IMAGES,
  HONDA_IMAGES,
  LANDSCAPES_IMAGES,
  LUNCH_GRILL_IMAGES,
  MARRIAGE_IMAGES,
  PICTURE_CDI_IMAGES,
  PORTRAIT_IMAGES,
  SPACE_IMAGES,
} from '@/lib/constants/images/images';

export interface ImageAssets {
  documentary: typeof DOCUMENTARY_IMAGES;
  marriage: typeof MARRIAGE_IMAGES;
  artistic: typeof ARTISTIC_IMAGES;
  event: typeof EVENT_IMAGES;
  picture_cdi: typeof PICTURE_CDI_IMAGES;
  cafe: typeof CAFE_IMAGES;
  lunch_grill: typeof LUNCH_GRILL_IMAGES;
  portrait: typeof PORTRAIT_IMAGES;
  space: typeof SPACE_IMAGES;
  brands: typeof BRANDS_IMAGES;
  landscapes: typeof LANDSCAPES_IMAGES;
  ana: typeof ANA_IMAGES;
  honda: typeof HONDA_IMAGES;
  candles: typeof CANDLES_IMAGES;
}
