import { Spacer } from '@nextui-org/spacer';

import { RegistationForm } from '@/src/features/auth/registration';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { CustomerHeader } from '@/src/widgets/header';

type Props = {
  promotionId: string;
};

export const RegistrationPage = ({ promotionId }: Props) => {
  return (
    <Flex col className='h-min max-w-5xl mx-auto items-center justify-center p-4' tag='section'>
      <CustomerHeader promotionId={promotionId} />
      <Spacer />
      <RegistationForm promotionId={promotionId} />
    </Flex>
  );
};
