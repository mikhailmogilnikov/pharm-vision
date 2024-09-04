import { TCard, TPhone } from '@/src/widgets/withdraw-variants';

export const findSelectedValue = (acc: string, item: TCard | TPhone) =>
  item.isActive ? `${item.id}` : acc;
