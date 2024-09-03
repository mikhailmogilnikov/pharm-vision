import { Button } from '@nextui-org/button';
import Link from 'next/link';

import { MockBrandInfo } from '../config/mock-brand';
import { OffersMockData } from '../../offers/config/mock-data';

import { BrandInfo } from '@/src/entities/brand';
import { SectionWithTitleLayout } from '@/src/shared/ui/layouts/section-with-title';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { HorisontalList } from '@/src/shared/ui/primitives/horisontal-list';
import { OfferCard } from '@/src/entities/offer';

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
        <Button
          as={Link}
          className='bg-opacity-50 shadow-base font-medium'
          href={`/promotion/${promotionId}/scanner`}
          size='lg'
        >
          Получить кешбэк
        </Button>
        <HorisontalList href={`${brandId}/offers`} title='Спецпредложения'>
          {OffersMockData.map((offer) => (
            <div key={offer.id} className='w-[336px] flex-shrink-0'>
              <OfferCard offer={offer} />
            </div>
          ))}
        </HorisontalList>
      </Flex>
    </SectionWithTitleLayout>
  );
};
