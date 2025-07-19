import { useId } from 'react';
import { SelectProps } from './types';
import { generateSelectClasses } from './helpers';

export const Select = (props: SelectProps) => {
  const { variant, color, value, label, options, onChange, onBlur, onFocus } = props;

  const id: string = useId();
  const selectClass: string = generateSelectClasses(variant, color);

  return (
    <div className='flex flex-col gap-2'>
      {label && <label htmlFor={id} className='text-base text-white'>{label}</label>}
      <select
        id={id}
        value={value}
        onChange={() => onChange(value)}
        onFocus={onFocus}
        onBlur={onBlur}
        className={selectClass}
      >
        {options?.map((item, index) => (
          <option
            key={index}
            value={item?.value}
            className='text-base hover:bg-primary'
          >
            {item?.label}
          </option>
        ))}
      </select>
    </div>
  );
};
