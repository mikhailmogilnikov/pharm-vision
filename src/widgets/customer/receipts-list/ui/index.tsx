import { ReceiptsListConst } from '../config/receipts-list';
import { formatReceipts } from '../lib/utils/format-receipts';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { MotionLayout } from '@/src/shared/ui/primitives/motion-layout';
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
      {formatedReceipts.map((day, i1) => (
        <Flex key={day.date} col className='mt-8'>
          <Text size={26} tag='h2' weight={700}>
            {getDate(day.date)}
          </Text>
          <Flex col gap={6}>
            {day.receipts.map((receipt, i2) => (
              <MotionLayout
                key={receipt.id}
                animate={{ y: 0, opacity: 1 }}
                className='cursor-pointer '
                initial={{ y: 10, opacity: 0 }}
                transition={{ delay: Number(`${i1}${i2}`) / 20 }}
              >
                <Receipt {...receipt} />
              </MotionLayout>
            ))}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};
