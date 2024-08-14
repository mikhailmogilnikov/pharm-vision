import { ReceiptsListConst } from '../config/receipts-list';
import { formatReceipts } from '../lib/utils/format-receipts';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { Receipt } from '@/src/entities/receipt';
import { formatDateToDayAndMonth } from '@/src/shared/lib/utils/format-date';
import { Article } from '@/src/shared/ui/primitives/article';

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
          <Article blockClassname='p-4 gap-6' title={getDate(day.date)} titleClassname=' text-xl'>
            {day.receipts.map((receipt) => (
              <Receipt key={receipt.id} {...receipt} />
            ))}
          </Article>
        </Flex>
      ))}
    </Flex>
  );
};
