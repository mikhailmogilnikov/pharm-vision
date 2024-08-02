import { Button } from '@nextui-org/button';
import { QrCode } from '@phosphor-icons/react';
import { m } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { getCookie } from 'cookies-next';

import { updateThemeColor } from '@/src/shared/lib/utils/update-theme-color';
import { useModal } from '@/src/entities/modal';
import { AuthBannerModal } from '@/src/features/auth/login';

type Props = {
  promotionId: string;
};

export const ScanQrButton = ({ promotionId }: Props) => {
  const { push } = useRouter();
  const { setModal } = useModal();

  const token = getCookie('token');

  const [isQrPressed, setIsQrPressed] = useState(false);

  const handlePressQrButton = () => {
    if (!token) {
      setModal(<AuthBannerModal promotionId={promotionId} />);

      return;
    }

    setIsQrPressed(true);

    setTimeout(() => {
      updateThemeColor('dark');
    }, 100);

    setTimeout(() => {
      push(`/promotion/${promotionId}/scanner`);
    }, 500);
  };

  return (
    <>
      <Button
        isIconOnly
        className='absolute left-1/2 -translate-x-[50%] w-16 h-16 bg-[--accent] text-secondary-foreground shadow-[--accent]'
        radius='full'
        size='lg'
        startContent={<QrCode size='50%' weight='bold' />}
        onClick={handlePressQrButton}
      />
      {isQrPressed && (
        <m.div
          animate={{
            scale: 40,
            backgroundColor: '#000000',
            borderRadius: 0,
            x: '-50%',
          }}
          className='absolute left-1/2 w-16 h-16 z-50'
          initial={{
            scale: 1,
            backgroundColor: 'var(--accent)',
            borderRadius: '100%',
            x: '-50%',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}
    </>
  );
};
