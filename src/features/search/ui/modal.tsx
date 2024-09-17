import { RemoveScroll } from 'react-remove-scroll';
import { useEffect, useState } from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';

import { MockSearchData } from '../config/mock-search-data';

import { SearchInput } from './input';
import { SearchResults } from './results';

import { MotionLayout } from '@/src/shared/ui/primitives/motion-layout';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { Loader } from '@/src/shared/ui/loader';
import { Placeholder } from '@/src/shared/ui/primitives/placeholder';

type Props = {
  closeModal: VoidFunction;
};

export const SearchModal = ({ closeModal }: Props) => {
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [searchValue]);

  const isValueShort = searchValue.length < 2;

  return (
    <RemoveScroll className='fixed inset-0 z-50'>
      <MotionLayout
        animate={{ opacity: 1 }}
        className='w-full h-full bg-background'
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        layout={false}
        transition={{ duration: 0.2 }}
      >
        <Flex col className='max-w-5xl mx-auto pt-4'>
          <SearchInput
            searchValue={searchValue}
            setIsLoading={setIsLoading}
            setSearchValue={setSearchValue}
            onClose={closeModal}
          />
          {isValueShort && (
            <Placeholder description='Начните вводить запрос' icon={MagnifyingGlass}>
              Поиск по кешбэку
            </Placeholder>
          )}
          {!isValueShort && isLoading && <Loader />}
          {!isLoading && !isValueShort && (
            <SearchResults closeModal={closeModal} results={MockSearchData} />
          )}
        </Flex>
      </MotionLayout>
    </RemoveScroll>
  );
};
