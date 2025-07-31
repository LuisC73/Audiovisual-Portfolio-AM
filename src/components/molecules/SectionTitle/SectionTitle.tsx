import { generateSectionTitleClasses } from './helpers';
import { SectionTitleProps, TitleTag } from './types';

export const SectionTitle = ({
  tag,
  className,
  children,
}: SectionTitleProps) => {
  const Tag: TitleTag = tag;
  const tagClass: string = generateSectionTitleClasses(className || 'lg');

  return (
    <div className="flex items-center gap-2">
      <div className="bg-primary h-2 w-2 rounded-full" />
      <Tag className={tagClass}>{children}</Tag>
    </div>
  );
};
