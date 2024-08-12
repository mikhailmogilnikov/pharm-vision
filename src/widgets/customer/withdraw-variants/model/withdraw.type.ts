export type TWithdrawType = 'bank' | 'phone';

export type TCard = {
  id: number;
  title: string;
  type: TCardType;
  isActive: boolean;
};

export type TCardType = 'mir' | 'visa' | 'masterCard' | 'other';

export type TPhone = {
  id: number;
  title: string;
  type: TPhoneType;
  isActive: boolean;
};

export type TPhoneType = 'tele2' | 'beeline' | 'mts' | 'megafon' | 'other';
