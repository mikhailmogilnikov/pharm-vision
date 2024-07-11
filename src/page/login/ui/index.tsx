import { LoginForm } from '@/src/features/auth/login';
import { Flex } from '@/src/shared/ui/flex';

export const LoginPage = () => {
  return (
    <Flex center className='h-dvh justify-center px-4' tag='section'>
      <LoginForm />
    </Flex>
  );
};
