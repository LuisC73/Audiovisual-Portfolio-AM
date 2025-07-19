import { AccordionContainerProps } from './types';

export const AccordionContainer = ({ children }: AccordionContainerProps) => {
  return <div className="flex flex-col">{children}</div>;
};
