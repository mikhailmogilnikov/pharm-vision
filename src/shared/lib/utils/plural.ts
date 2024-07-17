export const plural = (
  num: number,
  forms: { one: string; some: string; many: string },
) => {
  const lastDigit = num % 10;

  switch (lastDigit) {
    case 1:
      return forms.one;
    case 2:
    case 3:
    case 4:
      return forms.some;
    default:
      return forms.many;
  }
};

export const pluralCreative = (
  num: number,
  forms: { one: string; other: string },
) => {
  const lastDigit = num % 10;

  switch (lastDigit) {
    case 1:
      return forms.one;
    default:
      return forms.other;
  }
};
