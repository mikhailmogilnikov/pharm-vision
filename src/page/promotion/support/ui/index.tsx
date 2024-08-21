import { Button } from '@nextui-org/button';
import Link from 'next/link';

import { MockFaq } from '../config/mock-faq';

import { SectionWithTitleLayout } from '@/src/shared/ui/layouts/section-with-title';
import { Article } from '@/src/shared/ui/primitives/article';
import { Accordion } from '@/src/shared/ui/accordion';

type Props = { promotionId: string };

export const PromotionSupportPage = ({ promotionId }: Props) => {
  return (
    <SectionWithTitleLayout isBack title='Центр помощи'>
      <Accordion search tooltips items={MockFaq} />

      <Article titleInside title='Не нашли ответа на свой вопрос? Произошла ошибка?'>
        <Button
          as={Link}
          className='bg-[--accent] font-semibold text-secondary-foreground'
          href='contact'
          size='lg'
        >
          Написать нам
        </Button>
      </Article>
    </SectionWithTitleLayout>
  );
};
