/* eslint-disable jsx-a11y/no-autofocus */
import { MagnifyingGlass, X } from '@phosphor-icons/react';
import { Squircle } from '@squircle-js/react';
import { useDebounce } from 'react-use';
import { ChangeEventHandler, useState } from 'react';

import { MotionLayout } from '@/src/shared/ui/primitives/motion-layout';

type Props = {
  onClose: VoidFunction;
  searchValue: string;
  setSearchValue: (value: string) => void;
  setIsLoading: (value: boolean) => void;
};

export const SearchInput = ({ onClose, searchValue, setSearchValue, setIsLoading }: Props) => {
  const [value, setValue] = useState('');

  useDebounce(
    () => {
      setSearchValue(value);
      if (searchValue !== value) {
        setIsLoading(true);
      }
    },
    1000,
    [value],
  );

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  return (
    <MotionLayout className='mx-4' layoutId='search'>
      <Squircle
        className='w-full h-12 shadow-lg relative bg-default flex px-4 gap-3 items-center'
        cornerRadius={14}
        cornerSmoothing={1}
      >
        <MagnifyingGlass className='absolute left-4' opacity={0.5} size={22} weight='bold' />
        <input
          autoFocus
          className='bg-transparent outline-none h-full font-medium px-8 w-full'
          placeholder='Введите хотя бы 2 символа...'
          value={value}
          onChange={handleChange}
        />
        <button
          className='rounded-full w-6 h-6 bg-default-200 flex items-center justify-center absolute right-4'
          onClick={onClose}
        >
          <X opacity={0.5} weight='bold' />
        </button>
      </Squircle>
    </MotionLayout>
  );
};
