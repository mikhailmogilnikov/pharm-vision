import { TCard, TPhone } from '@/src/widgets/customer/withdraw-variants';

export const CardsList: TCard[] = [
  {
    id: 1,
    isActive: false,
    title: 'Мир ... 999',
    type: 'mir',
  },
  {
    id: 2,
    isActive: false,
    title: 'Visa ... 999',
    type: 'visa',
  },
  {
    id: 3,
    isActive: false,
    title: 'MasterCard ... 999',
    type: 'masterCard',
  },
  {
    id: 4,
    isActive: false,
    title: 'OtherBank ... 999',
    type: 'other',
  },
];

export const PhonesList: TPhone[] = [
  {
    id: 5,
    isActive: false,
    title: '+ 7 (777) 777-77-77',
    type: 'beeline',
  },
  {
    id: 6,
    isActive: false,
    title: '+ 7 (777) 777-77-77',
    type: 'megafon',
  },
  {
    id: 7,
    isActive: false,
    title: '+ 7 (777) 777-77-77',
    type: 'mts',
  },
  {
    id: 8,
    isActive: false,
    title: '+ 7 (777) 777-77-77',
    type: 'other',
  },
  {
    id: 9,
    isActive: true,
    title: '+ 7 (777) 777-77-77',
    type: 'tele2',
  },
];

export const WithdrawList = [
  {
    type: 'bank',
    list: CardsList,
  },
  {
    type: 'phone',
    list: PhonesList,
  },
];
