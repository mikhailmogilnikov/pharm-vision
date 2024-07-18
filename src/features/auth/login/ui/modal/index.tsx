import { Button } from '@nextui-org/button';

import { ModalLayout } from '@/src/entities/modal';

export const AuthBannerModal = () => {
  return (
    <ModalLayout
      description='Чтобы получить кешбек за товар'
      footer={
        <>
          <Button fullWidth className='font-semibold' size='lg'>
            Вход
          </Button>
          <Button fullWidth className='font-semibold' color='secondary' size='lg' variant='shadow'>
            Регистрация
          </Button>
        </>
      }
      title='Войдите в аккаунт'
    />
  );
};
