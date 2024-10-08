import { Button } from '@nextui-org/button';

import { ModalLayout, useModal } from '@/src/entities/modal';

type Props = {
  action: VoidFunction;
  description: string;
  modalButtonContent: React.ReactNode;
  title?: string;
  confirmColor?: 'danger' | 'default' | 'primary' | 'secondary' | 'success';
};

export const ConfirmModal = ({
  action,
  title = 'Подтвердите действие',
  description,
  confirmColor,
  modalButtonContent,
}: Props) => {
  const { setModal } = useModal();

  const closeModal = () => {
    setModal(null);
  };

  return (
    <ModalLayout
      description={description}
      footer={
        <>
          <Button className='w-full font-medium' size='lg' onClick={closeModal}>
            Отмена
          </Button>
          <Button
            className='w-full font-medium'
            color={confirmColor}
            size='lg'
            variant='shadow'
            onClick={action}
          >
            {modalButtonContent}
          </Button>
        </>
      }
      title={title}
    />
  );
};
