import { Flex } from '@/src/shared/ui/flex';
import { QrScanner } from '@/src/widgets/qr-scanner';

type Props = { promotionId: string };

export const PromotionScannerPage = ({ promotionId }: Props) => {
  return (
    <Flex className='w-dvw h-dvh bg-black'>
      <QrScanner />
    </Flex>
  );
};
