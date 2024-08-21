import { Button } from '@nextui-org/button';

import { WithdrawSaveButton } from './save-button';

import { ModalLayout, useModal } from '@/src/entities/modal';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { PhoneInput } from '@/src/shared/ui/inputs/phone-input';
import { Text } from '@/src/shared/ui/primitives/text';

export const AddPhoneModal = () => {
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
      title='Добавить номер'
    >
      <Flex col className='px-4 pb-8 py-4 -mt-10' gap={3}>
        <PhoneInput />
        <Text className='px-1' opacity={0.5} size={16}>
          Для подтверждения владения номером необходимо будет ввести код из SMS.
        </Text>
      </Flex>
    </ModalLayout>
  );
};
