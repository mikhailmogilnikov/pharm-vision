import { Button } from '@nextui-org/button';

import { WithdrawSaveButton } from './save-button';

import { ModalLayout, useModal } from '@/src/entities/modal';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { CardInput } from '@/src/shared/ui/inputs/card-input';
import { Text } from '@/src/shared/ui/primitives/text';

export const AddCardModal = () => {
  const { closeModal } = useModal();

  return (
    <ModalLayout
      footer={
        <>
          <Button fullWidth className='font-medium' size='lg' onClick={closeModal}>
            Отмена
          </Button>
          <WithdrawSaveButton />
        </>
      }
      title='Добавить карту'
    >
      <Flex col className='px-4 pb-8 -mt-10'>
        <CardInput />
        <Text opacity={0.5} size={16}>
          Перед сохранением убедитесь в корректности введённых данных.
        </Text>
      </Flex>
    </ModalLayout>
  );
};
