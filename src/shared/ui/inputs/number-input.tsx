'use client';

import { InputNumberFormat, InputNumberFormatProps } from '@react-input/number-format';

type Input = Omit<InputNumberFormatProps, 'value' | 'onChange'>;

type Props = Input & {
  value: number;
  onChange: (value: number) => void;
};

export const NumberInput = ({ value, onChange, ...restProps }: Props) => {
  return (
    <InputNumberFormat
      value={value.toLocaleString('ru-RU')}
      onChange={() => {}}
      onNumberFormat={(e) => onChange!(e.detail.number)}
      {...restProps}
      inputMode='numeric'
      type='text'
    />
  );
};
