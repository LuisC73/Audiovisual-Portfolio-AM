'use client';

import { useId } from 'react';
import { Check } from 'lucide-react';
import { CheckProps } from './types';
import { generateCheckClasses, handleCheckboxChange } from './helpers';

export const CheckBox = ({
  label,
  checked,
  disabled = false,
  onChange,
}: CheckProps) => {
  const id: string = useId();
  const checkClass: string = generateCheckClasses(checked);

  return (
    <label
      htmlFor={id}
      className="group inline-flex cursor-pointer items-center gap-1"
    >
      <input
        id={id}
        type="checkbox"
        className="sr-only"
        checked={checked}
        disabled={disabled}
        onChange={(e) => handleCheckboxChange(e, disabled, onChange)}
      />
      <div className={checkClass}>
        {checked && <Check className="text-primary" />}
      </div>
      {label && (
        <span className="group-hover:text-secondary text-base text-white">
          {label}
        </span>
      )}
    </label>
  );
};
