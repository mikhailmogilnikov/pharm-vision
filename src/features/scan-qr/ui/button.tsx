import { Button } from '@nextui-org/button';
import { QrCode } from '@phosphor-icons/react';
import { m } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Props = {
  promotionId: string;
};

export const ScanQrButton = ({ promotionId }: Props) => {
  const { push } = useRouter();

  const [isQrPressed, setIsQrPressed] = useState(false);

  const handlePressQrButton = () => {
    setIsQrPressed(true);

    setTimeout(() => {
      push(`/promotion/${promotionId}/scanner`);
    }, 500);
  };

  return (
    <>
      <Button
        isIconOnly
        className='absolute left-1/2 -translate-x-[50%] w-16 h-16'
        color='secondary'
        radius='full'
        size='lg'
        startContent={<QrCode size='50%' weight='bold' />}
        variant='shadow'
        onPress={handlePressQrButton}
      />
      {isQrPressed && (
        <m.div
          animate={{
            scale: 40,
            backgroundColor: '#000000',
            borderRadius: 0,
            x: '-50%',
          }}
          className='absolute left-1/2 w-16 h-16'
          initial={{
            scale: 1,
            backgroundColor: '#ff5b0b',
            borderRadius: '100%',
            x: '-50%',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}
    </>
  );
};
