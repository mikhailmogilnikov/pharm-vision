import { formatDateToDayAndMonth } from '@/src/shared/lib/utils/format-date';
import { getTime } from '@/src/shared/lib/utils/get-time';

export const formatDate = (date: Date) => {
  const dayAndMonth = formatDateToDayAndMonth(date.getTime());
  const year = date.getFullYear();

  return `${dayAndMonth} ${year}, ${getTime(date)}`;
};
