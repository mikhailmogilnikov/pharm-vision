'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { ChangeThemeSkeleton } from '@/src/features/change-theme';
import logo from '@/public/logo.svg';

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
          className='w-full h-[50px]'
          draggable={false}
          height={50}
          quality={100}
          src={logo.src}
          width={250}
        />
      </button>

      <DynamicChangeThemeButton />
    </Flex>
  );
};
