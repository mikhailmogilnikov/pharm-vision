import { ReceiptsListConst } from '../config/receipts-list';
import { formatReceipts } from '../lib/utils/format-receipts';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { MotionLayout } from '@/src/shared/ui/primitives/motion-layout';
import { Receipt } from '@/src/entities/receipt';
import { Text } from '@/src/shared/ui/primitives/text';
import { formatDateToDayAndMonth } from '@/src/shared/lib/utils/format-date';

export const ReceiptsList = () => {
  const formatedReceipts = formatReceipts(ReceiptsListConst);

  return (
    <Flex col>
      {formatedReceipts.map((day, i1) => (
        <Flex key={day.date} col className='mt-4'>
          <Text size={22} tag='h2'>
            {formatDateToDayAndMonth(new Date(day.date).getTime())}
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
