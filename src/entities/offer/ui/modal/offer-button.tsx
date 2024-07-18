'use client';

import { Button } from '@nextui-org/button';
import { getCookie } from 'cookies-next';
import { usePathname } from 'next/navigation';

import { useModal } from '@/src/entities/modal';
import { AuthBannerModal } from '@/src/features/auth/login';

export const ScanQrOfferButton = () => {
  const pathname = usePathname();
  const token = getCookie('token');
  const { setModal } = useModal();

  const promotionId = pathname.split('/promotion/')[1];

  const handlePressAuth = () => {
    setModal(null);
    setTimeout(() => {
      setModal(<AuthBannerModal promotionId={promotionId} />);
    }, 420);
  };

  return token ? (
    <Button
      fullWidth
      className='font-semibold'
      color='secondary'
      size='lg'
      variant='shadow'
    >
      Получить кешбек
    </Button>
  ) : (
    <Button
      fullWidth
      className='font-semibold'
      color='secondary'
      size='lg'
      variant='shadow'
      onPress={handlePressAuth}
    >
      Войти и получить кешбек
    </Button>
  );
};
