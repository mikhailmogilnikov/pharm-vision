'use client';

import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';

import { ModalLayout, useModal } from '@/src/entities/modal';

type Props = {
  promotionId: string;
};

export const AuthBannerModal = ({ promotionId }: Props) => {
  const { push } = useRouter();

  const { setModal } = useModal();

  const handlePressButton = (href: string) => () => {
    setModal(null);
    push(href);
  };

  return (
    <ModalLayout
      description='Авторизуйтесь, чтобы получить доступ к сканеру чеков, накоплению кешбека и выводу средств.'
      footer={
        <>
          <Button
            fullWidth
            className='font-semibold shadow-base'
            size='lg'
            onPress={handlePressButton(`/login?promotion=${promotionId}`)}
          >
            Вход
          </Button>
          <Button
            fullWidth
            className='font-semibold'
            color='secondary'
            size='lg'
            variant='shadow'
            onPress={handlePressButton(`/promotion/${promotionId}/registration`)}
          >
            Регистрация
          </Button>
        </>
      }
      title='Войдите в аккаунт'
    />
  );
};
