'use client';

import { useState } from 'react';

export const useNavbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive((prev) => !prev);
  };

  return {
    isActive,
    toggleMenu,
  };
};
