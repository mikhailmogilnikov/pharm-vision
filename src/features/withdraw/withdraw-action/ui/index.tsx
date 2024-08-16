'use client';

import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const WithdrawAction = () => {
  const pathname = usePathname();
  const promotionId = pathname.split('/')[2];

  return (
    <Button
      as={Link}
      className='bg-[--accent] text-secondary-foreground font-semibold'
      href={`/promotion/${promotionId}/profile/withdraw`}
      size='lg'
    >
      Вывести
    </Button>
  );
};
