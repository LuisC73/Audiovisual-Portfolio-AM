import { generateButtonClasses } from './helpers';
import { ButtonProps } from './types';

export const Button = (props: ButtonProps) => {
  const { variant, color, className, children, ...rest } = props;
  const buttonClass: string = generateButtonClasses(variant, color, className);

  return (
    <button
      className={buttonClass}
      {...rest}
    >
      {children}
    </button>
  );
};
