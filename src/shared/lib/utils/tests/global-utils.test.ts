import { formatDateToDayAndMonth } from '../format-date';
import { plural } from '../plural';

import { PluralFixture } from './fixtures/plural-fixtures';

describe('shared/formatDateToDeadline', () => {
  test('correct', () => {
    expect(formatDateToDayAndMonth(1721377414000)).toBe('19 июля');
    expect(formatDateToDayAndMonth(1725477414000)).toBe('4 сентября');
  });
  test('edged', () => {
    expect(formatDateToDayAndMonth(0)).toBe('1 января');
    expect(formatDateToDayAndMonth(Infinity)).toBe('Invalid Date');
  });
  test('incorrect', () => {
    expect(formatDateToDayAndMonth(17254773414000)).not.toBe('21 августа');
  });
});

describe('shared/plural', () => {
  test('correct', () => {
    expect(plural(1, PluralFixture)).toBe('Позиция');
    expect(plural(2, PluralFixture)).toBe('Позиции');
    expect(plural(5, PluralFixture)).toBe('Позиций');
    expect(plural(10, PluralFixture)).toBe('Позиций');
    expect(plural(21, PluralFixture)).toBe('Позиция');
  });
  test('edged', () => {
    expect(plural(0, PluralFixture)).toBe('Позиций');
    expect(plural(11, PluralFixture)).toBe('Позиций');
    expect(plural(Infinity, PluralFixture)).toBe('Позиций');
  });
  test('incorrect', () => {
    expect(plural(3, PluralFixture)).not.toBe('Позиция');
    expect(plural(0, PluralFixture)).not.toBe('Позиция');
    expect(plural(12, PluralFixture)).not.toBe('Позиция');
  });
});

describe('shared/pluralCreative', () => {
  test('correct', () => {});
  test('edged', () => {});
  test('incorrect', () => {});
});

describe('shared/sortByDate', () => {
  test('correct', () => {});
  test('edged', () => {});
  test('incorrect', () => {});
});
