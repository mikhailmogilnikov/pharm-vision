import { PasswordRecoveryForm } from '@/src/features/auth/password-recovery';
import { SectionWithTitleLayout } from '@/src/shared/ui/layouts/section-with-title';
import { Flex } from '@/src/shared/ui/primitives/flex';

type Props = {
  promotionId?: string;
};

export const PasswordRecoveryPage = ({ promotionId }: Props) => {
  return (
    <Flex col className='max-w-5xl mx-auto p-4 mb-24' gap={5} tag='section'>
      <SectionWithTitleLayout isBack title='Восстановить пароль'>
        <PasswordRecoveryForm />
      </SectionWithTitleLayout>
    </Flex>
  );
};
