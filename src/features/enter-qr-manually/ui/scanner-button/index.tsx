'use client';

import { m } from 'framer-motion';
import { useRouter } from 'next/navigation';

type Props = {
  promotionId: string;
};

export const EnterQrManuallyButton = ({ promotionId }: Props) => {
  const { replace } = useRouter();

  return (
    <m.button
      animate={{ y: 0, x: '-50%' }}
      className='fixed bottom-10 left-1/2 -translate-x-[50%] bg-black/30 text-white px-4 py-1 rounded-medium backdrop-blur-lg font-medium'
      initial={{ y: 100, x: '-50%' }}
      onClick={() => replace(`/promotion/${promotionId}/enter-manually`)}
    >
      Ввести вручную
    </m.button>
  );
};
