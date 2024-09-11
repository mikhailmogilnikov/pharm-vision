'use client';

import { Divider } from '@nextui-org/divider';
import { CreditCard, Password, UserMinus } from '@phosphor-icons/react';
import Link from 'next/link';

import { Article } from '@/src/shared/ui/primitives/article';

export const UserSettingsActions = () => {
  return (
    <Article blockClassname='' title='Действия'>
      <Link
        className='font-semibold h-16 flex justify-between px-4 items-center active:bg-default-200 transition-colors'
        href='change-password'
      >
        Изменить пароль <Password size={24} weight='bold' />
      </Link>
      <Divider />
      <Link
        className='font-semibold h-16 flex justify-between px-4 items-center active:bg-default-200 transition-colors'
        href='withdraw-variants'
      >
        Настроить способы вывода <CreditCard size={24} weight='bold' />
      </Link>
      <Divider />
      <button className='font-semibold h-16 flex justify-between px-4 items-center active:bg-default-200 transition-colors text-danger'>
        Удалить мой аккаунт <UserMinus size={24} weight='bold' />
      </button>
    </Article>
  );
};
