'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { ChangeThemeSkeleton } from '@/src/features/change-theme';

type Props = {
  promotionId: string;
};

const DynamicChangeThemeButton = dynamic(
  () => import('@/src/features/change-theme').then((mod) => mod.ChangeThemeButton),
  {
    loading: () => <ChangeThemeSkeleton />,
    ssr: false,
  },
);

export const CustomerHeader = ({ promotionId }: Props) => {
  const { replace } = useRouter();

  const handleNavigate = () => {
    replace(`/promotion/${promotionId}`);
  };

  return (
    <Flex center className='justify-between' tag='header'>
      <button onClick={handleNavigate}>
        <Image
          priority
          alt='logo'
          draggable={false}
          height={50}
          quality={100}
          src={'/r-farm-logo.png'}
          width={250}
        />
      </button>

      <DynamicChangeThemeButton />
    </Flex>
  );
};
