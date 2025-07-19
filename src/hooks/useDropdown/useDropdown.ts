import { useCallback, useState } from 'react';

export const useDropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return { isOpen, toggle, close };
};
