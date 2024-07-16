import { OfferCard } from '@/src/entities/offer';
import { Flex } from '@/src/shared/ui/primitives/flex';

type Props = { promotionId: string };

export const PromotionOffersPage = ({ promotionId }: Props) => {
  return (
    <Flex col tag='ul'>
      <OfferCard />
    </Flex>
  );
};
