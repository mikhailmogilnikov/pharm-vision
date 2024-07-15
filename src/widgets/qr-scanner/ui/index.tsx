'use client';

import { Scanner } from '@yudiel/react-qr-scanner';

import { MotionLayout } from '@/src/shared/ui/motion-layout';

export const QrScanner = () => {
  return (
    <>
      <MotionLayout
        animate={{ opacity: 1, transition: {delay: 0.2} }}
        className='w-full'
        initial={{ opacity: 0 }}
      >
        <Scanner
          classNames={{ video: 'object-cover' }}
          components={{ audio: false, finder: false }}
          onScan={(result) => console.log(result)}
        />
      </MotionLayout>
    </>
  );
};
