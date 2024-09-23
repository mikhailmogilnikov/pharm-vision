import { ClockCountdown, QrCode } from '@phosphor-icons/react';

import { IOffer } from '../../model/offer.type';

import { formatDateToDayAndMonth } from '@/src/shared/lib/utils/format-date';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';
import { Stage, Stages } from '@/src/shared/ui/stages';
import { CashbackIcon } from '@/src/shared/ui/cashback-icon';

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

      <Stages className='mt-2'>
        <Stage
          icon={<QrCode className='text-[--accent]' size={24} weight='bold' />}
          title='Отсканируйте QR-код на чеке'
        >
          Это можно сделать, нажав на кнопку с изображением QR-кода, или с надписью &quot;Получить
          кешбэк&quot;.
        </Stage>
        <Stage
          icon={<ClockCountdown className='text-warning' size={24} weight='bold' />}
          title='Дождитесь одобрения'
        >
          Проверка чека может занять до 48 часов.
        </Stage>
        <Stage
          icon={<CashbackIcon className='text-success' size={24} weight='bold' />}
          title='Обменяйте бонусы на рубли'
        >
          Один бонус равен одному рублю. Кешбэк можно вывести на карту или номер телефона.
        </Stage>
      </Stages>
    </Flex>
  );
};
