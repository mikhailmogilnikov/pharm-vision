'use client';

import { Slider } from '@nextui-org/slider';
import { useLayoutEffect, useState } from 'react';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { InfoBlock } from '@/src/shared/ui/primitives/info-block';
import { Article } from '@/src/shared/ui/primitives/article';
import { MotionLayout } from '@/src/shared/ui/primitives/motion-layout';
import { NumberInput } from '@/src/shared/ui/inputs/number-input';
import { WithdrawButton } from '@/src/features/withdraw/withdraw-button';
import { UserAgreementUnder } from '@/src/entities/user-agreement';
import { CashbackIcon } from '@/src/shared/ui/cashback-icon';

type Props = {
  amount: number;
};

export const WithdrawAmountBlock = ({ amount }: Props) => {
  const pathname = usePathname();
  const promotionId = pathname.split('/')[1];
  const [selectedAmount, setSelectedAmount] = useState(Math.round(amount / 2));

  const handleChangeInput = (value: number) => {
    setSelectedAmount(value);
  };

  const handleChangeSlider = (newAmount: number | number[]) => {
    setSelectedAmount(newAmount as number);
  };

  useLayoutEffect(() => {
    if (amount < selectedAmount) {
      setSelectedAmount(amount);
    }
  }, [selectedAmount]);

  return (
    <>
      <Flex center gap={2}>
        <CashbackIcon className='text-[--accent]' size={32} weight='bold' />
        <NumberInput
          className='bg-transparent text-5xl font-bold outline-none text-[--accent]'
          value={selectedAmount}
          onChange={handleChangeInput}
        />
      </Flex>
      <Slider
        aria-label='Выберите количество бонусов'
        classNames={{
          track: 'border-s-[--accent]',
          filler: 'bg-gradient-to-l from-[--accent-70] to-[--accent]',
          thumb: 'bg-[--accent]',
        }}
        color='secondary'
        isDisabled={amount < 1}
        maxValue={amount}
        size='lg'
        value={selectedAmount}
        onChange={handleChangeSlider}
      />

      <InfoBlock>
        Срок начисления средств на счёт получателя может составлять до 48 часов. Следите за
        актуальным статусом платежа в разделе{' '}
        <Link className='underline' href={`/promotion/${promotionId}/profile/withdraw-history`}>
          История выводов
        </Link>
        .
      </InfoBlock>

      <LayoutGroup>
        <AnimatePresence>
          {selectedAmount < 100 && (
            <MotionLayout
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(24px)' }}
              initial={{ opacity: 0, filter: 'blur(24px)' }}
            >
              <Article blockClassname='!bg-danger/15 text-danger font-medium p-4'>
                Количество бонусов для минимального вывода должно быть не менее 100.
              </Article>
            </MotionLayout>
          )}
        </AnimatePresence>

        <MotionLayout className='flex flex-col gap-4'>
          <WithdrawButton selectedAmount={selectedAmount} />
          <UserAgreementUnder />
        </MotionLayout>
      </LayoutGroup>
    </>
  );
};
