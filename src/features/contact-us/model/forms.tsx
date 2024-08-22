import { ContactCashbackForm } from '../ui/reason-forms/cashback-form';
import { ContactIssueForm } from '../ui/reason-forms/issue-form';

export const ContactForms: Record<string, () => JSX.Element> = {
  '1': ContactIssueForm,
  '2': ContactCashbackForm,
  '3': ContactIssueForm,
  '4': ContactIssueForm,
};
