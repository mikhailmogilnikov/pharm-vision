export const convertAmountToPercents = (current: number, max: number) =>
  Math.round((current * 100) / max) || 0;

export const convertPercentsToAmount = (percents: number, max: number) =>
  Math.round((percents * max) / 100) || 0;
