import { PaginationItemProps } from './types';
import { generateItemClasses } from './helpers';

export const PaginationItem = ({ id, isSelected, children, onClick }: PaginationItemProps) => {
  const itemClass: string = generateItemClasses(isSelected);

  return (
    <button
      id={id}
      onClick={() => onClick(id)}
      className={itemClass}
    >
      {children}
    </button>
  );
};
