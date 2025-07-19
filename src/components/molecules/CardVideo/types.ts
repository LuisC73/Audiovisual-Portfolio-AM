export interface CardVideoProps {
  id: string;
  src?: string;
  poster?: string;
  title?: string;
  description?: string;
  date?: string;
  width?: number;
  height?: number;
  onClick: (id: string) => void;
}
