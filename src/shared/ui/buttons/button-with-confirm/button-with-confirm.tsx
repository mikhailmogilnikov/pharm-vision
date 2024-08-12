import { Button, ButtonProps } from '@nextui-org/button';

import { ConfirmModal } from './confirm-modal';

import { useModal } from '@/src/entities/modal';

type Props = {
  action: VoidFunction;
  description: string;
  color: 'danger' | 'default' | 'primary' | 'secondary' | 'success';
  modalButtonContent: React.ReactNode;
} & ButtonProps;

export const ButtonWithConfirm = ({
  children,
  action,
  description,
  color,
  modalButtonContent,
  ...restProps
}: Props) => {
  const { setModal } = useModal();
  const hadleClick = () => {
    setModal(
      <ConfirmModal
        action={action}
        color={color}
        description={description}
        modalButtonContent={modalButtonContent}
      />,
    );
  };

  return (
    <Button {...restProps} color={color} onClick={hadleClick}>
      {children}
    </Button>
  );
};
