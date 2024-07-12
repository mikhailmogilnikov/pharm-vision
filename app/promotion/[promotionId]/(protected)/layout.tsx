import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';
import { permanentRedirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{ params: { promotionId: string } }>;

export default function PromotionLayout({
  children,
  params: { promotionId },
}: Props) {
  const token = getCookie('token', { cookies });

  return token
    ? children
    : permanentRedirect(`/login?promotion=${promotionId}`);
}
