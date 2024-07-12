import { RegistrationPage } from '@/src/page/auth/registration';

type Props = {
  params: {
    promotionId: string;
  };
};

export default function Registration({ params: { promotionId } }: Props) {
  return <RegistrationPage promotionId={promotionId} />;
}
