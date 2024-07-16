import { LoginForm } from '@/src/features/auth/login';
import { Flex } from '@/src/shared/ui/primitives/flex';

type Props = {
  promotion?: string;
};

export const LoginPage = ({ promotion }: Props) => {
  return (
    <Flex center className='h-dvh justify-center px-4' tag='section'>
      <LoginForm promotion={promotion} />
    </Flex>
  );
};
