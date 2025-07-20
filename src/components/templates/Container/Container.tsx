import { generateContainerClasses } from './helpers';
import { ContainerProps } from './types';

export const Container = ({ id, className, children }: ContainerProps) => {
  const containerClass: string = generateContainerClasses(className);

  return (
    <div
      id={id}
      className={containerClass}
    >
      {children}
    </div>
  );
};
