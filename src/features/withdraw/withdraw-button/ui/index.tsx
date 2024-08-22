'use client';

import { Button } from '@nextui-org/button';
import { usePathname, useRouter } from 'next/navigation';

type Props = {
  selectedAmount: number;
};

export const WithdrawButton = ({ selectedAmount }: Props) => {
  const { push } = useRouter();
  const pathname = usePathname();
  const promotionId = pathname.split('/')[2];

  const handleWithdraw = () => {
    push(`/promotion/${promotionId}/profile/confirm?type=payment`);
  };

  return (
    <Button
      className='bg-[--accent] text-secondary-foreground font-semibold'
      isDisabled={selectedAmount < 100}
      size='lg'
      onClick={handleWithdraw}
    >
      Запросить выплату
    </Button>
  );
};
