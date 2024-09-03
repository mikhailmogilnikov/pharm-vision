import { Button } from '@nextui-org/button';

import { MockBrandInfo } from '../config/mock-brand';

import { BrandInfo } from '@/src/entities/brand';
import { SectionWithTitleLayout } from '@/src/shared/ui/layouts/section-with-title';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { HorisontalList } from '@/src/shared/ui/primitives/horisontal-list';

type Props = {
  promotionId: string;
  brandId: string;
};

export const PromotionBrandPage = ({ promotionId, brandId }: Props) => {
  const { name, description, logo } = MockBrandInfo;

  return (
    <SectionWithTitleLayout isBack fallbackUrl={`/promotion/${promotionId}/goods`} title='Назад'>
      <Flex col className='mt-4' gap={8}>
        <BrandInfo description={description} logo={logo} title={name} />
        <Button className='bg-opacity-50 shadow-base font-medium' size='lg'>
          Получить кешбэк
        </Button>
        <HorisontalList href={`${brandId}/offers`} title='Спецпредложения'>
          <div className='h-40 w-64 flex-shrink-0 bg-default rounded-2xl' />
          <div className='h-40 w-64 flex-shrink-0 bg-default rounded-2xl' />
          <div className='h-40 w-64 flex-shrink-0 bg-default rounded-2xl' />
        </HorisontalList>
      </Flex>
    </SectionWithTitleLayout>
  );
};
