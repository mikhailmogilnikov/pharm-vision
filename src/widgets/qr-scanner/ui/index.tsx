'use client';

import { Scanner } from '@yudiel/react-qr-scanner';
import { CaretLeft } from '@phosphor-icons/react/dist/ssr';
import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';

import { QrFinder } from './finder';

import { MotionLayout } from '@/src/shared/ui/motion-layout';
import { Flex } from '@/src/shared/ui/flex';
import { Text } from '@/src/shared/ui/text';

export const QrScanner = () => {
  const { back } = useRouter();

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
          <Button
            isIconOnly
            className='text-white'
            radius='full'
            size='sm'
            startContent={<CaretLeft size={24} weight='bold' />}
            variant='light'
            onPress={() => back()}
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
          components={{ audio: false, finder: false }}
          onScan={(result) => console.log(result)}
        />
      </MotionLayout>
    </>
  );
};
