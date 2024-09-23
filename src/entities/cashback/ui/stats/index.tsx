import { NumberTicker } from '@/src/shared/ui/magicui/number-ticker';
import { Article } from '@/src/shared/ui/primitives/article';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';
import { CashbackIcon } from '@/src/shared/ui/cashback-icon';

type Props = {
  cashbackForWeek: number;
  cashbackForAllTime: number;
};

export const CashbackStats = ({ cashbackForWeek, cashbackForAllTime }: Props) => {
  return (
    <Flex>
      <Article titleInside blockClassname='p-4 gap-3' title='За неделю'>
        <Flex center className='pb-1' gap={1}>
          <CashbackIcon className='text-[--accent]' size={20} weight='bold' />
          <Text className='text-[--accent] leading-6' size={30} weight={700}>
            <NumberTicker value={cashbackForWeek} />
          </Text>
        </Flex>
      </Article>

      <Article titleInside blockClassname='p-4 gap-3' title='За все время'>
        <Flex center className='pb-1' gap={1}>
          <CashbackIcon className='text-[--accent]' size={20} weight='bold' />
          <Text className='text-[--accent] leading-6' size={30} weight={700}>
            <NumberTicker value={cashbackForAllTime} />
          </Text>
        </Flex>
      </Article>
    </Flex>
  );
};
