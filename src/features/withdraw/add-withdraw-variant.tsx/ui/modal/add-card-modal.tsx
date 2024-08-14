import { Input } from '@nextui-org/input';

import { WithdrawSaveButton } from './save-button';

import { ModalLayout } from '@/src/entities/modal';
import { Flex } from '@/src/shared/ui/primitives/flex';

export const AddCardModal = () => {
  return (
    <ModalLayout footer={<WithdrawSaveButton />} title='Добавить карту'>
      <Flex className='px-4 pb-8 -mt-10'>
        <Input />
      </Flex>
    </ModalLayout>
  );
};