export type VariantSelect = 'filled' | 'outline';

export type ColorSelect = 'primary' | 'secondary';

interface OptionsProps {
  label: string;
  value: string;
}

export interface SelectProps {
  variant: VariantSelect;
  color: ColorSelect;
  value: string;
  label?: string;
  options: OptionsProps[];
  onChange: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
}

export interface GenerateClassProps {
  variant: VariantSelect;
  color: ColorSelect;
}