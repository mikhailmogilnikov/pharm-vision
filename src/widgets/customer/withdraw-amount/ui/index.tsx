'use client';

import { DiamondsFour } from '@phosphor-icons/react/dist/ssr';
import { Slider } from '@nextui-org/slider';
import { useState } from 'react';
import { Button } from '@nextui-org/button';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { InfoBlock } from '@/src/shared/ui/primitives/info-block';
import { Text } from '@/src/shared/ui/primitives/text';
import { Article } from '@/src/shared/ui/primitives/article';
import { MotionLayout } from '@/src/shared/ui/primitives/motion-layout';

type Props = {
  amount: number;
};

export const WithdrawAmountBlock = ({ amount }: Props) => {
  const pathname = usePathname();
  const promotionId = pathname.split('/')[1];
  const [selectedAmount, setSelectedAmount] = useState(Math.round(amount / 2));

  const handleChangeSlider = (newAmount: number | number[]) => {
    setSelectedAmount(newAmount as number);
  };

  return (
    <>
      <Flex center gap={2}>
        <DiamondsFour className='text-[--accent]' size={32} weight='bold' />
        <input
          className='bg-transparent text-5xl font-bold outline-none text-[--accent]'
          max={amount}
          placeholder={amount.toString()}
          value={selectedAmount}
          onChange={(e) => setSelectedAmount(Number(e.target.value))}
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
          <Button
            className='bg-[--accent] text-secondary-foreground font-semibold'
            isDisabled={selectedAmount < 100}
            size='lg'
          >
            Запросить выплату
          </Button>
          <Text className='text-center w-72 mx-auto' opacity={0.5} size={14}>
            Запрашивая выплату, вы подтверждаете{' '}
            <span className='underline'>положения и условия</span>, а так же факт ознакомления с{' '}
            <span className='underline'>часто задаваемыми вопросами</span>.
          </Text>
        </MotionLayout>
      </LayoutGroup>
    </>
  );
};
