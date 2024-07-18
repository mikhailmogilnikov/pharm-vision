import { RegistationForm } from '@/src/features/auth/registration';
import { Flex } from '@/src/shared/ui/primitives/flex';

type Props = {
  promotionId: string;
};

export const RegistrationPage = ({ promotionId }: Props) => {
  return (
    <Flex
      className='h-min items-center justify-center px-4 pt-20 md:pt-[22vh]'
      tag='section'
    >
      <RegistationForm promotionId={promotionId} />
    </Flex>
  );
};
