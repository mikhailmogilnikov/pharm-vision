import { RegistationForm } from '@/src/features/auth/registration';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { CustomerHeader } from '@/src/widgets/customer/header';

type Props = {
  promotionId: string;
};

export const RegistrationPage = ({ promotionId }: Props) => {
  return (
    <Flex col className='h-min items-center justify-center p-4' tag='section'>
      <CustomerHeader promotionId={promotionId} />
      <br />
      <RegistationForm promotionId={promotionId} />
    </Flex>
  );
};
