import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';
import { permanentRedirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export default function LoginLayout({ children }: Props) {
  const token = getCookie('token', { cookies });

  return !token ? children : permanentRedirect('/promotion/nurofen');
}
