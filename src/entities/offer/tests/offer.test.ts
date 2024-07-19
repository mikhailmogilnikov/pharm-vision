import { generateOfferCondition } from '../lib/generate-condition';
import { generateOfferProfit } from '../lib/generate-profit';

import { OfferMockCorrectConditions } from './fixtures/offer-mock-data';

describe('offer/generate-profit', () => {
  test('correct', () => {
    expect(generateOfferProfit(50, 'from')).toBe('Кешбек от 50%');
    expect(generateOfferProfit(10, 'static')).toBe('Кешбек 10%');
  });
  test('edged', () => {
    expect(generateOfferProfit(50, 'lol' as any)).toBeUndefined();
  });
  test('incorrect', () => {
    expect(generateOfferProfit(20, 'from')).not.toBe('Кешбек 20%');
    expect(generateOfferProfit(1000, 'static')).not.toBe('Кешбек от 1000%');
  });
});

describe('offer/generate-condition', () => {
  test('correct', () => {
    expect(generateOfferCondition(OfferMockCorrectConditions[1])).toBe(
      'От одной до пяти позиций в чеке',
    );
    expect(generateOfferCondition(OfferMockCorrectConditions[2])).toBe(
      'От 500 ₽ в чеке',
    );
    expect(generateOfferCondition(OfferMockCorrectConditions[3])).toBe(
      'От двух позиций в чеке',
    );
  });
});
