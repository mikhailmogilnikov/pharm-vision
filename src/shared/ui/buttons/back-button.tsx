'use client';

import { Button, ButtonProps } from '@nextui-org/button';
import { PropsWithChildren, useCallback } from 'react';
import { useRouter } from 'next/navigation';

import { useOriginContext } from '../../lib/providers/origin-tracker-provider';

type Props = PropsWithChildren<{ fallbackUrl?: string } & ButtonProps>;

export const BackButton = ({ children, fallbackUrl = '/', ...rest }: Props) => {
  const router = useRouter();
  const isWithinPage = useOriginContext();

  const handleClick = useCallback(() => {
    if (isWithinPage) router.back();
    else router.push(fallbackUrl);
  }, [isWithinPage, router]);

  return (
    <Button {...rest} onPress={handleClick}>
      {children}
    </Button>
  );
};
