import { Squircle } from '@squircle-js/react';
import { DiamondsFour } from '@phosphor-icons/react/dist/ssr';

import { Text } from '@/src/shared/ui/primitives/text';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { WithdrawAction } from '@/src/features/withdraw/withdraw-action';
import { AnimatedGradientText } from '@/src/shared/ui/animated-gradient-text';

export const CashbackAmount = () => {
  return (
    <Squircle
      className='px-4 py-4 bg-default flex flex-col h-min gap-4'
      cornerRadius={18}
      cornerSmoothing={1}
    >
      <Flex center gap={2}>
        <DiamondsFour className='text-[--accent]' size={24} weight='bold' />
        <AnimatedGradientText className='text-4xl font-bold'>261</AnimatedGradientText>

        <Text className='mt-3' opacity={0.5} size={20} weight={600}>
          бонус доступен
        </Text>
      </Flex>
      <WithdrawAction />
    </Squircle>
  );
};
