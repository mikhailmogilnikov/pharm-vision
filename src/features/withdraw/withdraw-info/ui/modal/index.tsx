import { Chip } from '@nextui-org/chip';
import { Button } from '@nextui-org/button';

import { IWithdrawInfo } from '../../model/withdraw-info.type';
import { ChipData } from '../../config/chip-data';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';
import { formatDate } from '@/src/entities/receipt';

type Props = {
  info: IWithdrawInfo;
};

export const WithdrawInfoModal = ({ info }: Props) => {
  const { receiver_type, receiver_data, date, amount, status } = info;

  const Icon = ChipData[status].icon;

  return (
    <>
      <Flex center col className='p-4 py-6' gap={6}>
        <Text className='mt-5' tag='h2' weight={600}>
          {formatDate(new Date(date))}
        </Text>
        <Chip
          className='min-w-6 max-w-none w-24 h-24 p-0'
          classNames={{ content: 'font-medium p-0 flex justify-center' }}
          color={ChipData[status].color}
          size='sm'
          variant='flat'
        >
          <Icon className='flex-shrink-0' size={'70%'} weight='bold' />
        </Chip>
        <Text>{status}</Text>
        {status === 'declined' && (
          <Button fullWidth className='font-medium' color='warning' size='lg' variant='flat'>
            Оспорить заявку
          </Button>
        )}
      </Flex>
    </>
  );
};
