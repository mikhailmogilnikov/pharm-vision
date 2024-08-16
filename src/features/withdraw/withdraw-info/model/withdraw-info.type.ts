export interface IWithdrawInfo {
  id: number;
  date: string;
  receiver_type: 'card' | 'phone';
  receiver_data: string;
  status: 'success' | 'pending' | 'declined';
}
