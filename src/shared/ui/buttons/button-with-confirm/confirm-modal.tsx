import { Button } from '@nextui-org/button';

import { ModalLayout, useModal } from '@/src/entities/modal';

type Props = {
  action: VoidFunction;
  description: string;
  modalButtonContent: React.ReactNode;

  color: 'danger' | 'default' | 'primary' | 'secondary' | 'success';
};

export const ConfirmModal = ({ action, description, color, modalButtonContent }: Props) => {
  const { setModal } = useModal();

  const closeModal = () => {
    setModal(null);
  };

  return (
    <ModalLayout
      description={description}
      footer={
        <>
          <Button className='w-full' onClick={closeModal}>
            Отмена
          </Button>
          <Button className='w-full' color={color} onClick={action}>
            {modalButtonContent}
          </Button>
        </>
      }
      title='Подвердите действие'
    />
  );
};
