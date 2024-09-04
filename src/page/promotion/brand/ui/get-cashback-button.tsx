import { Button } from '@nextui-org/button';
import Link from 'next/link';

type Props = {
  promotionId: string;
};

export const GetCashbackButton = ({ promotionId }: Props) => {
  return (
    <Button
      as={Link}
      className='bg-opacity-50 shadow-base font-medium'
      href={`/promotion/${promotionId}/scanner`}
      size='lg'
    >
      Получить кешбэк
    </Button>
  );
};
