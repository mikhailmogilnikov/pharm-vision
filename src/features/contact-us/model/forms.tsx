import { ContactCashbackForm } from '../ui/reason-forms/cashback-form';
import { ContactIssueForm } from '../ui/reason-forms/issue-form';

import { TReasonFromProps } from './reason-forms-props.type';

export const ContactForms: Record<string, ({ email, reason }: TReasonFromProps) => JSX.Element> = {
  '1': ContactIssueForm,
  '2': ContactCashbackForm,
  '3': ContactIssueForm,
  '4': ContactIssueForm,
};
