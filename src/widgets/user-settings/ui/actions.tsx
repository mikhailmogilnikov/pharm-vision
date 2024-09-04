'use client';

import { Divider } from '@nextui-org/divider';
import { CreditCard, Password, UserMinus } from '@phosphor-icons/react';

import { Article } from '@/src/shared/ui/primitives/article';

export const UserSettingsActions = () => {
  return (
    <Article blockClassname='' title='Действия'>
      <button className='font-semibold h-16 flex justify-between px-4 items-center active:bg-default-200 transition-colors'>
        Изменить пароль <Password size={24} weight='bold' />
      </button>
      <Divider />
      <button className='font-semibold h-16 flex justify-between px-4 items-center active:bg-default-200 transition-colors'>
        Настроить способы вывода <CreditCard size={24} weight='bold' />
      </button>
      <Divider />
      <button className='font-semibold h-16 flex justify-between px-4 items-center active:bg-default-200 transition-colors text-danger'>
        Удалить мой аккаунт <UserMinus size={24} weight='bold' />
      </button>
    </Article>
  );
};
