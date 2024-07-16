'use client';

import { IDetectedBarcode, Scanner, outline } from '@yudiel/react-qr-scanner';
import { CaretLeft } from '@phosphor-icons/react/dist/ssr';

import { QrFinder } from './finder';

import { MotionLayout } from '@/src/shared/ui/primitives/motion-layout';
import { BackButton } from '@/src/shared/ui/buttons/back-button';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';

type Props = {
  onChange: (result: IDetectedBarcode[]) => void;
  fallbackUrl: string;
};

export const QrScanner = ({ onChange, fallbackUrl }: Props) => {
  return (
    <>
      <MotionLayout
        animate={{ opacity: 1, transition: { delay: 0.2 } }}
        className='w-full'
        initial={{ opacity: 0 }}
      >
        <Flex
          center
          className='fixed top-0 left-0 z-10 pb-6 text-white bg-gradient-to-b from-black/70 to-transparent h-24 px-4'
          tag='aside'
        >
          <BackButton
            isIconOnly
            className='text-white'
            fallbackUrl={fallbackUrl}
            radius='full'
            size='sm'
            startContent={<CaretLeft size={24} weight='bold' />}
            variant='light'
          />
          <Flex center className='justify-center'>
            <Text className='text-white' size={18} weight={600}>
              Сканировать QR-код
            </Text>
          </Flex>
          <div className='w-10 h-1' />
        </Flex>
        <QrFinder />
        <Scanner
          classNames={{ video: 'object-cover' }}
          components={{ audio: false, finder: false, tracker: outline }}
          constraints={{ facingMode: 'outline' }}
          onScan={onChange}
        />
      </MotionLayout>
    </>
  );
};
