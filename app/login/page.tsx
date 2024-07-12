import { LoginPage } from '@/src/page/auth/login';

type Props = {
  searchParams: Record<string, string>;
};

export default function Login({ searchParams }: Props) {
  return <LoginPage promotion={searchParams.promotion} />;
}
