import { Button } from '@nextui-org/button';
import Link from 'next/link';

import { SectionWithTitleLayout } from '@/src/shared/ui/layouts/section-with-title';
import { Text } from '@/src/shared/ui/primitives/text';
import { Article } from '@/src/shared/ui/primitives/article';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { InfoBlock } from '@/src/shared/ui/primitives/info-block';
import { AnimatedGradientText } from '@/src/shared/ui/magicui/animated-gradient-text';
import { CashbackIcon } from '@/src/shared/ui/cashback-icon';

type Props = { promotionId: string };

export const PromotionWithdrawPage = ({ promotionId }: Props) => {
  const amount = 261;

  return (
    <SectionWithTitleLayout isBack title='Вывод бонусов'>
      <Article titleInside title='Доступно для вывода'>
        <Flex center gap={2}>
          <CashbackIcon className='text-[--accent]' size={24} weight='bold' />
          <AnimatedGradientText className='text-4xl font-bold leading-8 mb-1'>
            {amount}
          </AnimatedGradientText>
          <Text className='leading-7 mb-1' opacity={0.3} size={36} weight={700}>
            = {amount} ₽
          </Text>
        </Flex>
      </Article>
      <Article titleInside title='Счёт получателя'>
        <Text size={20} weight={600}>
          На номер ***-54-97
        </Text>
        <Button
          as={Link}
          className='font-medium'
          color='warning'
          href={`/promotion/${promotionId}/profile/withdraw-variants`}
          size='lg'
          variant='flat'
        >
          Изменить
        </Button>
      </Article>
      <InfoBlock>
        Один бонус, начисленный за кешбэк, равен одному рублю. Минимальная сумма для вывода: 100
        бонусов.
      </InfoBlock>

      <Button
        as={Link}
        className='font-semibold bg-[--accent] text-secondary-foreground'
        href={`/promotion/${promotionId}/profile/withdraw/amount`}
        size='lg'
      >
        Продолжить
      </Button>
      <Text className='text-center w-64 mx-auto' opacity={0.5} size={14}>
        Продолжая, вы подтверждаете <span className='underline'>положения и условия</span>
      </Text>
    </SectionWithTitleLayout>
  );
};
