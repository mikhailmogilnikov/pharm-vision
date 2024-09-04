import { MockBrandInfo } from '../config/mock-brand';
import { OffersMockData } from '../../offers/config/mock-data';

import { GetCashbackButton } from './get-cashback-button';

import { BrandInfo } from '@/src/entities/brand';
import { SectionWithTitleLayout } from '@/src/shared/ui/layouts/section-with-title';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { HorisontalList } from '@/src/shared/ui/primitives/horisontal-list';
import { OfferCard } from '@/src/entities/offer';
import { NavTabPersistUpdater } from '@/src/shared/lib/providers/nav-tab-persist-updater';

type Props = {
  promotionId: string;
  brandId: string;
};

export const PromotionBrandPage = ({ promotionId, brandId }: Props) => {
  const { name, description, logo } = MockBrandInfo;

  return (
    <NavTabPersistUpdater
      storageKey={`customer-${promotionId}-nav`}
      value={`/promotion/${promotionId}/brands`}
    >
      <SectionWithTitleLayout isBack fallbackUrl={`/promotion/${promotionId}/goods`} title='Назад'>
        <Flex col className='mt-4' gap={8}>
          <BrandInfo description={description} logo={logo} title={name} />
          <GetCashbackButton promotionId={promotionId} />
          <HorisontalList href={`${brandId}/offers`} title='Спецпредложения'>
            {OffersMockData.map((offer) => (
              <div key={offer.id} className='w-[336px] flex-shrink-0'>
                <OfferCard offer={offer} />
              </div>
            ))}
          </HorisontalList>
        </Flex>
      </SectionWithTitleLayout>
    </NavTabPersistUpdater>
  );
};
