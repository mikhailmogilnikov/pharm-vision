import { WithdrawVariantsFooter } from './withdraw-variants-footer';

import { ModalLayout } from '@/src/entities/modal';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';

type Props = {
  title: string;
  id: number;
  icon: React.ReactNode;
  isActive: boolean;
};

export const WithdrawVariantModal = ({ title, icon, id, isActive }: Props) => {
  return (
    <ModalLayout footer={<WithdrawVariantsFooter isActive={isActive} />} title='Способ выплаты'>
      <Flex center col className='p-8 justify-center -mt-16'>
        <div className='h-20 w-20 rounded-full overflow-hidden bg-white  py-3 px-1 flex items-center justify-center'>
          {icon}
        </div>
        <Text className='transition-opacity' size={20}>
          {title}
        </Text>
      </Flex>
    </ModalLayout>
  );
};
