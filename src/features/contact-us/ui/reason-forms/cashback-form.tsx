/* eslint-disable @conarti/feature-sliced/public-api */
import { Button } from '@nextui-org/button';
import { Textarea } from '@nextui-org/input';
import { Select, SelectItem } from '@nextui-org/select';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, LayoutGroup } from 'framer-motion';

import { TReasonFromProps } from '../../model/reason-forms-props.type';
import { ValidateCashbackFormSchema } from '../../model/validator';

import { UserAgreementUnder } from '@/src/entities/user-agreement';
import { ReceiptsListConst } from '@/src/widgets/customer/receipts-list/config/receipts-list';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';
import { formatDate } from '@/src/entities/receipt/lib/utils/format-date';
import { getErrorsFromValidator } from '@/src/shared/lib/utils/get-errors-from-validator';
import { MotionLayout } from '@/src/shared/ui/primitives/motion-layout';
import { Article } from '@/src/shared/ui/primitives/article';

export const ContactCashbackForm = ({ email, reason }: TReasonFromProps) => {
  const { replace } = useRouter();

  const [receipt, setCheck] = useState<string[]>([]);
  const [description, setDescription] = useState('');

  const [validateError, setValidateErrors] = useState<string | null>(null);

  const requestData = { email, reason, receipt, description };

  const handleSubmit = async () => {
    const validError = await getErrorsFromValidator(ValidateCashbackFormSchema, requestData);

    if (validError) {
      if (validateError) {
        setValidateErrors(null);
        setTimeout(() => {
          setValidateErrors(validError);
        }, 420);
      } else {
        setValidateErrors(validError);
      }

      return;
    }
    setValidateErrors(null);

    replace(`confirm?type=support`);
  };

  return (
    <>
      <Select
        disallowEmptySelection
        classNames={{ trigger: '!bg-default' }}
        items={ReceiptsListConst}
        label='Выберите чек'
        labelPlacement='outside'
        placeholder='Чек'
        selectedKeys={new Set(receipt)}
        size='lg'
        onSelectionChange={(value) => setCheck([...value])}
      >
        {(check) => (
          <SelectItem key={check.number} textValue={check.number.toString()}>
            <Flex gap={1}>
              <Flex col gap={1}>
                <Text className='mb-1' size={16} weight={600}>
                  {check.name}
                </Text>
                <Text opacity={0.5} size={15}>
                  # {check.number}
                </Text>
                <Text opacity={0.5} size={15}>
                  {formatDate(new Date(check.date))}
                </Text>
              </Flex>
            </Flex>
          </SelectItem>
        )}
      </Select>
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
              <Article blockClassname='!bg-danger/15 text-danger font-medium p-4'>
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
