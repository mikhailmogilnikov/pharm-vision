import { Icon } from '@phosphor-icons/react';
import { CheckCircle, Question, XCircle } from '@phosphor-icons/react/dist/ssr';

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
  pending: { color: 'warning', text: 'На рассмотрении', icon: Question },
  declined: { color: 'danger', text: 'Отклонено', icon: XCircle },
};
