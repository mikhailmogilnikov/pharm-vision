'use client';

import { PropsWithChildren, useEffect } from 'react';

type Props = PropsWithChildren<{ storageKey: string; value: string }>;

export const NavTabPersistUpdater = ({ children, storageKey, value }: Props) => {
  useEffect(() => {
    sessionStorage.setItem(storageKey, value);
  }, []);

  return <>{children}</>;
};
