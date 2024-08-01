import { LoginForm } from '@/src/features/auth/login';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { CustomerHeader } from '@/src/widgets/customer/header';

type Props = {
  promotion?: string;
};

export const LoginPage = ({ promotion }: Props) => {
  return (
    <Flex center col className='h-dvh p-4' tag='section'>
      {promotion && <CustomerHeader promotionId={promotion} />}
      <LoginForm promotion={promotion} />
    </Flex>
  );
};
