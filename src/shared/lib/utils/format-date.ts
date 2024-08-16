export const formatDateToDayAndMonth = (datetime: number | string): string => {
  const date = new Date(datetime);
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };

  return date.toLocaleDateString('ru-RU', options);
};
