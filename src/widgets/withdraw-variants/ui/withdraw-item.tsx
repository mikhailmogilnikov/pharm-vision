import { WithdrawIcons } from '../config/withdraw-icons';
import { TCard, TPhone } from '../model/withdraw.type';

import { WithdrawVariantLayout } from '@/src/features/withdraw/withdraw-variants';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';

type Props = TCard | TPhone;

export const WithdrawItem = ({ title, type, isActive, id }: Props) => {
  const icon = WithdrawIcons[type];

  return (
    <WithdrawVariantLayout
      isActive={isActive}
      variant={{
        title,
        icon,
        id,
      }}
    >
      <Flex center>
        <div className='h-6 w-10 overflow-hidden bg-white rounded-md p-1 flex items-center justify-center -ml-2'>
          {icon}
        </div>
        <Text className='transition-opacity' opacity={isActive ? 1 : 0.5}>
          {title}
        </Text>
      </Flex>
    </WithdrawVariantLayout>
  );
};
