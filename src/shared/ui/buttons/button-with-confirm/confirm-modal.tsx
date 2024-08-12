import { Button } from '@nextui-org/button';

import { ModalLayout } from '@/src/entities/modal';

type Props = {
  action: VoidFunction;
  description: string;
  modalButtonContent: React.ReactNode;

  color: 'danger' | 'default' | 'primary' | 'secondary' | 'success';
};

export const ConfirmModal = ({ action, description, color, modalButtonContent }: Props) => {
  return (
    <ModalLayout
      description={description}
      footer={
        <Button className='w-full' color={color} onClick={action}>
          {modalButtonContent}
        </Button>
      }
      title='Подвердите действие'
    />
  );
};
