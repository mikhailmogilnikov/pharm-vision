import { TCard, TPhone } from '../../model/withdraw.type';

export const findSelectedValue = (acc: string, item: TCard | TPhone) =>
  item.isActive ? `${item.id}` : acc;
