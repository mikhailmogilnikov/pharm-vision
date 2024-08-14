import { Button, ButtonProps } from '@nextui-org/button';

import { ConfirmModal } from './confirm-modal';

import { useModal } from '@/src/entities/modal';

type Props = {
  action: VoidFunction;
  description: string;
  color?: 'danger' | 'default' | 'primary' | 'secondary' | 'success';
  confirmColor?: 'danger' | 'default' | 'primary' | 'secondary' | 'success';
  modalButtonContent: React.ReactNode;
  fromModal?: boolean;
} & ButtonProps;

export const ButtonWithConfirm = ({
  children,
  action,
  description,
  color = 'default',
  confirmColor = 'default',
  modalButtonContent,
  fromModal = false,
  ...restProps
}: Props) => {
  const { setModal } = useModal();

  const handleClick = () => {
    if (fromModal) {
      setModal(null);
      setTimeout(() => {
        setModal(
          <ConfirmModal
            action={action}
            confirmColor={confirmColor}
            description={description}
            modalButtonContent={modalButtonContent}
          />,
        );
      }, 450);
    } else {
      setModal(
        <ConfirmModal
          action={action}
          confirmColor={confirmColor}
          description={description}
          modalButtonContent={modalButtonContent}
        />,
      );
    }
  };

  return (
    <Button color={color} size='lg' {...restProps} onClick={handleClick}>
      {children}
    </Button>
  );
};
