'use client';

import { Button } from '@nextui-org/button';
import { getCookie } from 'cookies-next';
import { usePathname, useRouter } from 'next/navigation';

import { useModal } from '@/src/entities/modal';
import { AuthBannerModal } from '@/src/features/auth/login';

export const ScanQrOfferButton = () => {
  const pathname = usePathname();
  const { push } = useRouter();
  const token = getCookie('token');
  const { setModal } = useModal();

  const promotionId = pathname.split('/promotion/')[1];

  const handlePress = () => {
    setModal(null);

    if (token) {
      push(`/promotion/${promotionId}/scanner`);
    } else {
      setTimeout(() => {
        setModal(<AuthBannerModal promotionId={promotionId} />);
      }, 450);
    }
  };

  return (
    <Button
      fullWidth
      className='font-semibold bg-[--accent]'
      color='secondary'
      size='lg'
      onPress={handlePress}
    >
      Получить кешбек
    </Button>
  );
};
