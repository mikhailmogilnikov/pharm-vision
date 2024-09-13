import { PasswordRecoveryPage } from '@/src/page/auth/password-recovery';

type Props = {
  params: {
    promotionId: string;
  };
};

export default function PasswordRecovery({ params: { promotionId } }: Props) {
  return <PasswordRecoveryPage promotionId={promotionId} />;
}
