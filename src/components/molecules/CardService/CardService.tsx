import { generateCardClasses } from './helpers';
import { CardServiceProps, LabelTag } from './types';

export const CardService = ({ labelTag, label, description, className }: CardServiceProps) => {
  const Tag: LabelTag = labelTag;
  const cardClass: string = generateCardClasses(className);

  return (
    <div className={cardClass}>
      <Tag className="text-[26px] font-medium text-white">{label}</Tag>
      <p className="text-base text-white">{description}</p>
    </div>
  );
};
