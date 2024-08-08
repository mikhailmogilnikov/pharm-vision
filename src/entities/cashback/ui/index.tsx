import { Squircle } from '@squircle-js/react';
import { DiamondsFour } from '@phosphor-icons/react/dist/ssr';

import { Text } from '@/src/shared/ui/primitives/text';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { AnimatedGradientText } from '@/src/shared/ui/magicui/animated-gradient-text';
import { cn } from '@/src/shared/lib/utils';
import { WithdrawAction } from '@/src/features/withdraw';

export const CashbackAmount = () => {
  return (
    <Squircle
      className='px-4 py-4 bg-default flex flex-col h-min gap-4'
      cornerRadius={18}
      cornerSmoothing={1}
    >
      <Flex center gap={2}>
        <DiamondsFour className='text-[--accent]' size={24} weight='bold' />
        <AnimatedGradientText>
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[--accent-70] via-[--accent-30] to-[--accent-70] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-4xl font-bold`,
            )}
          >
            261
          </span>
        </AnimatedGradientText>
        <Text className='mt-3' opacity={0.5} size={20} weight={600}>
          бонус доступен
        </Text>
      </Flex>
      <WithdrawAction />
    </Squircle>
  );
};
