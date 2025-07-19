import { generateSectionTitleClasses } from './helpers';
import { SectionTitleProps, TitleTag } from './types';

export const SectionTitle = ({ tag, className, children }: SectionTitleProps) => {
  const Tag: TitleTag = tag;
  const tagClass: string = generateSectionTitleClasses(className || 'lg');

  return (
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-primary" />
      <Tag className={tagClass}>{children}</Tag>
    </div>
  );
};
