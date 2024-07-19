import Image from 'next/image';

import { generateOfferProfit } from '../../lib/generate-profit';
import { generateOfferCondition } from '../../lib/generate-condition';
import { IOffer } from '../../model/offer.type';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';
import { formatDateToDayAndMonth } from '@/src/shared/lib/utils/format-date';

type Props = {
  offer: IOffer;
  height?: number;
};

export const OfferBanner = ({ offer, height = 176 }: Props) => {
  const { banner_color, title, banner_image, profit, profitType, condition, date_to } = offer;

  return (
    <div
      className=' bg-orange-100 p-4 flex-shrink-0 relative overflow-clip'
      style={{ backgroundColor: banner_color, height }}
    >
      <Flex col gap={1} width={'60%'}>
        <Text className='text-black' size={20} weight={700}>
          {generateOfferProfit(profit, profitType)}
        </Text>
        {condition && (
          <Text className='text-black leading-5 mb-1' size={16} weight={500}>
            {generateOfferCondition(condition)}
          </Text>
        )}
        <Text className='text-black' opacity={0.5} size={16} weight={500}>
          {`До ${formatDateToDayAndMonth(date_to)}`}
        </Text>
      </Flex>

      <div className='absolute bottom-0 right-0 w-36 h-36'>
        <Image fill alt={title} draggable={false} quality={100} sizes='128px' src={banner_image} />
      </div>
    </div>
  );
};
