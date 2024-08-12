import { Radio, RadioProps } from '@nextui-org/radio';

type Props = {
  onSelectionChange: (value: string) => void;
} & RadioProps;

export const RadioButton = ({ onSelectionChange, value }: Props) => {
  return (
    <Radio
      classNames={{
        control: 'bg-[var(--accent)]',
        wrapper:
          'group-data-[selected=true]:border-[var(--accent)] border-foreground border-opacity-30',
      }}
      value={value}
      onChange={(e) => onSelectionChange(e.target.value)}
    />
  );
};
