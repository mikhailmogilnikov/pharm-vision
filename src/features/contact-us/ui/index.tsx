'use client';

import { createContext, useState } from 'react';
import { Input } from '@nextui-org/input';

import { ContactReasons } from '../config/reasons';
import { ContactForms } from '../model/forms';

import { SelectInput } from '@/src/shared/ui/inputs/select-input';
import { Flex } from '@/src/shared/ui/primitives/flex';

type Props = {
  receiptId?: string;
};

export const ReceiptContext = createContext<string | undefined>(undefined);

export const ContactWithUsForm = ({ receiptId }: Props) => {
  const [email, setEmail] = useState('qwewr@mail.ru');
  const [reason, setReason] = useState(receiptId ? ['2'] : ['1']);

  const Form = ContactForms[reason[0]];

  return (
    <ReceiptContext.Provider value={receiptId}>
      <Flex col className='mt-3' gap={6}>
        <Input
          classNames={{ inputWrapper: '!bg-default' }}
          label='Почта для связи'
          labelPlacement='outside'
          placeholder='Ваш email'
          size='lg'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <SelectInput
          disallowEmptySelection
          label='Какой у вас вопрос?'
          labelPlacement='outside'
          placeholder='Выберите из списка'
          selectedVariants={new Set(reason)}
          variants={ContactReasons}
          onSelectionChange={(value) => setReason([...value])}
        />
        <Form email={email} reason={reason} />
      </Flex>
    </ReceiptContext.Provider>
  );
};
