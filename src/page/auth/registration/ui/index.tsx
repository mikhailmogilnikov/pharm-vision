import { RegistationForm } from '@/src/features/auth/registration';
import { Flex } from '@/src/shared/ui/flex';

type Props = {
  promotionId: string;
};

export const RegistrationPage = ({ promotionId }: Props) => {
  return (
    <Flex center className='h-dvh justify-center px-4' tag='section'>
      <RegistationForm promotionId={promotionId} />
    </Flex>
  );
};
