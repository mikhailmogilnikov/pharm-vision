export type TReceipt = {
  id: number;
  name: string;
  price: number;
  cashback: number;
  number: number;
  date: string;
};

export type TFullReceipt = {
  id: number;
  name: string;
  price: number;
  cashback: number;
  number: number;
  date: string;
  address: string;
  items: TReceiptItem[];
};

export type TReceiptItem = {
  vendor: string;
  name: string;
  cashback: number | null;
  price: number;
  avatar: string | null;
};
