import { Icon } from '@phosphor-icons/react';
import { CheckCircle, ClockCountdown, XCircle } from '@phosphor-icons/react/dist/ssr';

type TChipData = {
  color: 'success' | 'warning' | 'danger';
  text: 'Выполнено' | 'На рассмотрении' | 'Отклонено';
  icon: Icon;
};

export const ChipData: Record<'success' | 'pending' | 'declined', TChipData> = {
  success: {
    color: 'success',
    text: 'Выполнено',
    icon: CheckCircle,
  },
  pending: { color: 'warning', text: 'На рассмотрении', icon: ClockCountdown },
  declined: { color: 'danger', text: 'Отклонено', icon: XCircle },
};
