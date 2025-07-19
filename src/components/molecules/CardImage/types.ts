import { ImgProps } from "@/components/atoms/Img/types";

export interface CardImageProps {
  id: string;
  image: ImgProps;
  label: string;
  onClick: (id: string) => void;
}