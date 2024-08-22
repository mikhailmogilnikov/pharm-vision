import { Button } from '@nextui-org/button';
import { Textarea } from '@nextui-org/input';
import { useRouter } from 'next/navigation';

import { UserAgreementUnder } from '@/src/entities/user-agreement';

export const ContactIssueForm = () => {
  const { replace } = useRouter();

  const handleSubmit = () => {
    replace(`confirm?type=support`);
  };

  return (
    <>
      <Textarea
        classNames={{ innerWrapper: 'min-h-20', label: 'text-base' }}
        label='Описание'
        labelPlacement='outside'
        placeholder='Подробно опишите суть вашего вопроса'
        size='lg'
      />
      <Button
        className='bg-[--accent] text-secondary-foreground font-semibold -mb-1'
        size='lg'
        onClick={handleSubmit}
      >
        Отправить
      </Button>
      <UserAgreementUnder />
    </>
  );
};
