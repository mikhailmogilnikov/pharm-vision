import { formatReceipts } from '../format-receipts';

import { ReceiptsFixtures } from './fixtures/receipts-fixtures';

describe('../format-receipts.ts', () => {
  test('correct', () => {
    expect(formatReceipts(ReceiptsFixtures.correct.test1)).toEqual(ReceiptsFixtures.correct.res1);
    expect(formatReceipts(ReceiptsFixtures.correct.test2)).toEqual(ReceiptsFixtures.correct.res2);
  });
  test('incorrect', () => {
    expect(formatReceipts(ReceiptsFixtures.incorrect.test1)).not.toEqual(
      ReceiptsFixtures.incorrect.res3,
    );
    expect(formatReceipts(ReceiptsFixtures.incorrect.test2)).not.toEqual(
      ReceiptsFixtures.incorrect.res4,
    );
  });
});
