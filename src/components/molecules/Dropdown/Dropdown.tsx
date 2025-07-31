import { Button } from '@/components/atoms';
import { DropdownProps } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { generateDropdownClasses } from './helpers';
import { useId, useRef } from 'react';
import { useClickOutside } from '@/hooks';

export const Dropdown = (props: DropdownProps) => {
  const { button, buttonChildren, isOpen, className, children, onToggle } =
    props;
  const dropdownClass: string = generateDropdownClasses(className);
  const id = useId();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => {
    if (isOpen) onToggle();
  });

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        {...button}
        onClick={onToggle}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={id}
      >
        {buttonChildren}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={id}
            role="menu"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className={dropdownClass}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
