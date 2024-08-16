import { DiamondsFour } from '@phosphor-icons/react/dist/ssr';

import { NumberTicker } from '@/src/shared/ui/magicui/number-ticker';
import { Article } from '@/src/shared/ui/primitives/article';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';

type Props = {
  cashbackForWeek: number;
  cashbackForAllTime: number;
};

export const CashbackStats = ({ cashbackForWeek, cashbackForAllTime }: Props) => {
  return (
    <Flex>
      <Article blockClassname='p-4 gap-3'>
        <Text opacity={0.5} weight={600}>
          За неделю
        </Text>
        <Flex center className='pb-1' gap={1}>
          <DiamondsFour className='text-[--accent]' size={20} weight='bold' />
          <Text className='text-[--accent] leading-6' size={30} weight={700}>
            <NumberTicker value={cashbackForWeek} />
          </Text>
        </Flex>
      </Article>

      <Article blockClassname='p-4 gap-3'>
        <Text opacity={0.5} weight={600}>
          За все время
        </Text>
        <Flex center className='pb-1' gap={1}>
          <DiamondsFour className='text-[--accent]' size={20} weight='bold' />
          <Text className='text-[--accent] leading-6' size={30} weight={700}>
            <NumberTicker value={cashbackForAllTime} />
          </Text>
        </Flex>
      </Article>
    </Flex>
  );
};
