import { Select, SelectItem, SelectProps } from '@nextui-org/select';

export type TSelectVariant = {
  id: string | number;
  title: string;
};

type Props = Omit<
  {
    multiple?: boolean;
    variants: TSelectVariant[];
    selectedVariants?: any;
    onSelectionChange: (keys: any) => void;
    placeholder?: string;
  } & SelectProps,
  'children'
>;

export const SelectInput = ({
  variants,
  selectedVariants,
  multiple = false,
  onSelectionChange,
  placeholder,
  ...restProps
}: Props) => {
  return (
    <Select
      classNames={{ trigger: '!bg-default' }}
      size='lg'
      {...restProps}
      aria-label='select'
      items={variants}
      placeholder={placeholder || 'Выберите из списка'}
      selectedKeys={selectedVariants}
      selectionMode={multiple ? 'multiple' : 'single'}
      onSelectionChange={onSelectionChange}
    >
      {(item) => (
        <SelectItem key={item.id} className='first-letter:uppercase'>
          {item.title}
        </SelectItem>
      )}
    </Select>
  );
};
