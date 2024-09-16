export interface IProduct {
  id: number;
  name: string;
  fixCashback: number;
  cashbackType: 'percent' | 'amount';
  sku: string;
}
