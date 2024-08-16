import { IWithdrawInfo } from '@/src/features/withdraw/withdraw-info';

export const MockWithdrawHistory: IWithdrawInfo[] = [
  {
    id: 1,
    date: '2024-08-16T10:33:05Z',
    receiver_type: 'phone',
    receiver_data: '+7 (932) 050-54-97',
    amount: 140,
    status: 'success',
  },
  {
    id: 2,
    date: '2024-08-15T10:33:05Z',
    receiver_type: 'phone',
    receiver_data: '+7 (312) 421-64-43',
    amount: 421,
    status: 'pending',
  },
  {
    id: 3,
    date: '2024-08-14T10:33:05Z',
    receiver_type: 'phone',
    receiver_data: '+7 (454) 975-31-11',
    amount: 6453,
    status: 'declined',
  },
  {
    id: 4,
    date: '2024-08-13T10:33:05Z',
    receiver_type: 'card',
    receiver_data: '4213',
    amount: 132,
    status: 'success',
  },
  {
    id: 5,
    date: '2024-08-10T10:33:05Z',
    receiver_type: 'card',
    receiver_data: '6544',
    amount: 654,
    status: 'pending',
  },
  {
    id: 6,
    date: '2024-08-06T10:33:05Z',
    receiver_type: 'card',
    receiver_data: '1226',
    amount: 743,
    status: 'declined',
  },
];
