import { Button } from '@nextui-org/button';
import { Textarea } from '@nextui-org/input';
import { useRouter } from 'next/navigation';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { useState } from 'react';

import { TReasonFromProps } from '../../model/reason-forms-props.type';
import { ValidateIssueFormSchema } from '../../model/validator';

import { UserAgreementUnder } from '@/src/entities/user-agreement';
import { MotionLayout } from '@/src/shared/ui/primitives/motion-layout';
import { getErrorsFromValidator } from '@/src/shared/lib/utils/get-errors-from-validator';
import { Article } from '@/src/shared/ui/primitives/article';

export const ContactIssueForm = ({ email, reason }: TReasonFromProps) => {
  const { replace } = useRouter();

  const [description, setDescription] = useState('');

  const [validateError, setValidateErrors] = useState<string | null>(null);

  const requestData = { email, reason, description };

  const handleSubmit = async () => {
    const validError = await getErrorsFromValidator(ValidateIssueFormSchema, requestData);

    if (validError) {
      setValidateErrors(validError);

      return;
    }

    replace(`confirm?type=support`);
  };

  return (
    <>
      <Textarea
        classNames={{ innerWrapper: 'min-h-20', label: 'text-base', inputWrapper: '!bg-default' }}
        label='Описание'
        labelPlacement='outside'
        placeholder='Подробно опишите суть вашего вопроса'
        size='lg'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <LayoutGroup>
        <AnimatePresence>
          {validateError && (
            <MotionLayout
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(24px)' }}
              initial={{ opacity: 0, filter: 'blur(24px)' }}
              layout={false}
            >
              <Article blockClassname='!bg-danger/15 h-min text-danger font-medium p-4'>
                {validateError}
              </Article>
            </MotionLayout>
          )}
        </AnimatePresence>
        <MotionLayout className='w-full flex flex-col gap-4'>
          <Button
            className='bg-[--accent] text-secondary-foreground font-semibold -mb-1'
            size='lg'
            onClick={handleSubmit}
          >
            Отправить
          </Button>
          <UserAgreementUnder />
        </MotionLayout>
      </LayoutGroup>
    </>
  );
};
