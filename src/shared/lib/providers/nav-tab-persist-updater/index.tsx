'use client';

import { usePathname } from 'next/navigation';
import { PropsWithChildren, useEffect } from 'react';

type Props = PropsWithChildren<{ localStorageKey: string }>;

export const NavTabPersistUpdater = ({ children, localStorageKey }: Props) => {
  const pathname = usePathname();

  useEffect(() => {
    localStorage.setItem(localStorageKey, pathname);
  }, []);

  return <>{children}</>;
};
