'use client';

import { DiamondsFour } from '@phosphor-icons/react/dist/ssr';
import { clsx } from 'clsx';
import { Chip } from '@nextui-org/chip';

import { IWithdrawInfo } from '../../model/withdraw-info.type';
import { ChipData } from '../../config/chip-data';
import { WithdrawInfoModal } from '../modal';

import { Text } from '@/src/shared/ui/primitives/text';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { formatDateToDayAndMonth } from '@/src/shared/lib/utils/format-date';
import { getTime } from '@/src/shared/lib/utils/get-time';
import { useModal } from '@/src/entities/modal';

type Props = {
  info: IWithdrawInfo;
};

export const WithdrawInfo = ({ info }: Props) => {
  const { setModal } = useModal();

  const { receiver_type, receiver_data, date, amount, status } = info;
  const typeText = receiver_type === 'phone' ? 'На телефон' : 'На карту';
  const dataText =
    receiver_type === 'phone' ? `***-${receiver_data.slice(13)}` : `****-${receiver_data}`;

  const bonusStyles = clsx({
    'text-[--accent]': status === 'success',
    '!opacity-50': status !== 'success',
  });

  const Icon = ChipData[status].icon;

  const handleOpenModal = () => setModal(<WithdrawInfoModal info={info} />);

  return (
    <button
      className='text-start active:scale-95 transition-transform'
      type='button'
      onClick={handleOpenModal}
    >
      <Flex gap={2}>
        <Flex col className='h-full justify-between' gap={1}>
          <Text size={16} weight={600}>
            {typeText} {dataText}
          </Text>
          <Text opacity={0.5} size={15}>
            {formatDateToDayAndMonth(date)} · {getTime(new Date(date))}
          </Text>
        </Flex>
        <Flex center className='items-end' gap={2} width={'30%'}>
          <Flex center className='justify-end' gap={1}>
            <DiamondsFour className={bonusStyles} weight='fill' />
            <Text className={bonusStyles} size={18} weight={600}>
              {amount}
            </Text>
          </Flex>
          <Chip
            className='min-w-6 p-0'
            classNames={{ content: 'font-medium p-0 flex justify-center' }}
            color={ChipData[status].color}
            size='sm'
            variant='flat'
          >
            <Icon size={20} weight='bold' />
          </Chip>
        </Flex>
      </Flex>
    </button>
  );
};
