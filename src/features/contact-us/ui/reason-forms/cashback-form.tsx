/* eslint-disable @conarti/feature-sliced/public-api */
import { Button } from '@nextui-org/button';
import { Textarea } from '@nextui-org/input';
import { Select, SelectItem } from '@nextui-org/select';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { UserAgreementUnder } from '@/src/entities/user-agreement';
import { ReceiptsListConst } from '@/src/widgets/customer/receipts-list/config/receipts-list';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';
import { formatDate } from '@/src/entities/receipt/lib/utils/format-date';

export const ContactCashbackForm = () => {
  const { replace } = useRouter();
  const [check, setCheck] = useState(['']);

  const handleSubmit = () => {
    replace(`confirm?type=support`);
  };

  return (
    <>
      <Select
        disallowEmptySelection
        items={ReceiptsListConst}
        label='Выберите чек'
        labelPlacement='outside'
        placeholder='Чек'
        selectedKeys={new Set(check)}
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
