'use client';

import { Button } from '@nextui-org/button';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

type Props = {
  redirectUrl?: string;
};

export const LogoutButton = ({ redirectUrl }: Props) => {
  const { refresh, replace } = useRouter();

  const handleLogout = () => {
    deleteCookie('token');
    if (redirectUrl) {
      replace(redirectUrl);
    }
    refresh();
  };

  return (
    <Button className='text-danger font-semibold h-14' size='lg' onClick={handleLogout}>
      Выйти
    </Button>
  );
};
