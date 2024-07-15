'use client';

import { Button } from '@nextui-org/button';
import { QrCode } from '@phosphor-icons/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { m } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { CustomerRoutes } from '../config/routes';

import { Flex } from '@/src/shared/ui/flex';

type Props = {
  promotionId: string;
};

export const CustomerNavigation = ({ promotionId }: Props) => {
  const { push } = useRouter();
  const pathname = usePathname();

  const [isQrPressed, setIsQrPressed] = useState(false);

  const handlePressQrButton = () => {
    setIsQrPressed(true);

    setTimeout(() => {
      push(`/promotion/${promotionId}/scanner`);
    }, 500);
  };

  return (
    <Flex
      center
      className='fixed bottom-6 left-1/2 -translate-x-[50%] !w-56 h-14 bg-default/50 backdrop-blur-lg rounded-2xl border-1 border-white/10 shadow-base'
      gap={16}
      tag='nav'
    >
      {CustomerRoutes.map(({ id, path, icon: Icon }) => {
        const routePath = `/promotion/${promotionId}${path}`;
        const iconClassnames = clsx({
          'opacity-50': routePath !== pathname,
        });

        return (
          <Link
            key={id}
            className='w-full h-full flex items-center justify-center'
            href={routePath}
          >
            <Icon className={iconClassnames} size={26} weight='bold' />
          </Link>
        );
      })}
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
    </Flex>
  );
};
