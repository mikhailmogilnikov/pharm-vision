import { Trash2Icon } from 'lucide-react';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';
import { RadioButton } from '@/src/shared/ui/buttons/radio-button';
import { ButtonWithConfirm } from '@/src/shared/ui/buttons/button-with-confirm/button-with-confirm';

type Props = {
  title: string;
  icon: React.ReactNode;
  id: number;

  selectedValue: string;
  setSelectedValue: (value: string) => void;
};

export const WithdrawItem = ({ title, icon, id, setSelectedValue, selectedValue }: Props) => {
  const handleClick = () => {
    setSelectedValue(`${id}`);
  };

  return (
    <li className='w-full list-none flex items-center'>
      <button className='w-full flex py-2 justify-between items-center' onClick={handleClick}>
        <Flex center>
          <RadioButton value={`${id}`} onSelectionChange={setSelectedValue} />
          <div className='h-6 w-10 overflow-hidden bg-white rounded-md p-1 flex items-center justify-center -ml-2'>
            {icon}
          </div>
          <Text className='transition-opacity' opacity={selectedValue === `${id}` ? 1 : 0.5}>
            {title}
          </Text>
        </Flex>
      </button>
      <ButtonWithConfirm
        isIconOnly
        action={() => {}}
        color='danger'
        description='Вы уверены, что хотите удалить способ оплаты? Это действее необратимо.'
        modalButtonContent={
          <>
            <Trash2Icon size={18} />
            Удалить
          </>
        }
        size='sm'
      >
        <Trash2Icon size={16} />
      </ButtonWithConfirm>
    </li>
  );
};
