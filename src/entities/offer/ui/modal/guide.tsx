import { IOffer } from '../../model/offer.type';

import { formatDateToDayAndMonth } from '@/src/shared/lib/utils/format-date';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';

type Props = {
  offer: IOffer;
};

export const OfferModalGuide = ({ offer }: Props) => {
  const { date_from, date_to } = offer;

  const startDateStr = formatDateToDayAndMonth(date_from);
  const endDateStr = formatDateToDayAndMonth(date_to);

  const normalizedStartDate =
    startDateStr.split(' ')[1] === endDateStr.split(' ')[1]
      ? startDateStr.split(' ')[0]
      : startDateStr;

  return (
    <Flex col tag='article'>
      <Text size={20} weight={600}>
        Как получить кешбэк
      </Text>
      <Text className='-mt-3' opacity={0.5} size={16} weight={500}>
        C {normalizedStartDate} по {endDateStr}
      </Text>
    </Flex>
  );
};
