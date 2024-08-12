'use client';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';
import { RadioButton } from '@/src/shared/ui/buttons/radio-button';

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
    <li className='w-full list-none'>
      <button className='w-full flex py-2 justify-between items-center' onClick={handleClick}>
        <Flex center>
          <div className='h-6 w-10 overflow-hidden bg-white rounded-md p-1 flex items-center justify-center'>
            {icon}
          </div>
          <Text className='transition-opacity' opacity={selectedValue === `${id}` ? 1 : 0.5}>
            {title}
          </Text>
        </Flex>
        <RadioButton value={`${id}`} onSelectionChange={setSelectedValue} />
      </button>
    </li>
  );
};
