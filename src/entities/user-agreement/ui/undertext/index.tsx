'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Text } from '@/src/shared/ui/primitives/text';

export const UserAgreementUnder = () => {
  const pathname = usePathname();
  const promotionId = pathname.split('/')[2];

  return (
    <Text className='text-center w-72 mx-auto' opacity={0.5} size={14}>
      Отправляя запрос, вы подтверждаете{' '}
      <Link className='underline' href={`/promotion/${promotionId}/profile/terms`}>
        положения и условия
      </Link>
      , а так же факт ознакомления с{' '}
      <Link className='underline' href={`/promotion/${promotionId}/profile/support`}>
        часто задаваемыми вопросами
      </Link>
      .
    </Text>
  );
};
