import { TCardType, TPhoneType } from './withdraw.type';

export type TCardsIcons = Record<TCardType, React.ReactNode>;
export type TPhonesIcons = Record<TPhoneType, React.ReactNode>;
export type TIcons = TCardsIcons | TPhonesIcons;
