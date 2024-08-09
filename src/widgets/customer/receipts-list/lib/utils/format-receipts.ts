import { TReceipt } from '@/src/entities/receipt/';
import { sortByDate } from '@/src/shared/lib/utils/sort-by-date';

export const formatReceipts = (receipts: TReceipt[]) => {
  const sortedReceipts: TReceipt[] = JSON.parse(JSON.stringify(receipts));

  sortedReceipts.sort(sortByDate());

  const formatedReceipts: { date: string; receipts: TReceipt[] }[] = [];

  sortedReceipts.forEach((receipt) => {
    if (
      formatedReceipts.at(-1) &&
      formatedReceipts.at(-1)?.date.slice(0, 10) === receipt.date.slice(0, 10)
    ) {
      formatedReceipts.at(-1)?.receipts.push(receipt);
    } else {
      formatedReceipts.push({
        date: receipt.date,
        receipts: [receipt],
      });
    }
  });

  return formatedReceipts;
};
