import { Divider } from '@nextui-org/divider';
import { Fragment } from 'react';

import { ReceiptsListConst } from '../config/receipts-list';
import { formatReceipts } from '../lib/utils/format-receipts';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { Receipt } from '@/src/entities/receipt';
import { Text } from '@/src/shared/ui/primitives/text';
import { formatDateToDayAndMonth } from '@/src/shared/lib/utils/format-date';

export const ReceiptsList = () => {
  const formatedReceipts = formatReceipts(ReceiptsListConst);

  const getDate = (value: string) => {
    const dateNow = new Date().toISOString().slice(0, 10);

    const yesterday = new Date();

    yesterday.setDate(new Date().getDate() - 1);

    const yesterdayString = yesterday.toISOString().slice(0, 10);

    if (dateNow === value.slice(0, 10)) return 'Сегодня';
    if (yesterdayString === value.slice(0, 10)) return 'Вчера';

    return formatDateToDayAndMonth(new Date(value).getTime());
  };

  return (
    <Flex col>
      {formatedReceipts.map((day) => (
        <Flex key={day.date} col className='my-4' gap={6}>
          <Text size={26} tag='h2' weight={700}>
            {getDate(day.date)}
          </Text>
          <Flex col gap={3}>
            {day.receipts.map((receipt, index) => (
              <Fragment key={receipt.id}>
                <Receipt {...receipt} />
                {index < day.receipts.length - 1 && <Divider />}
              </Fragment>
            ))}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};
