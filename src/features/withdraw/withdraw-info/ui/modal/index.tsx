import { Chip } from '@nextui-org/chip';
import { Button } from '@nextui-org/button';
import { DiamondsFour } from '@phosphor-icons/react';

import { IWithdrawInfo } from '../../model/withdraw-info.type';
import { ChipData } from '../../config/chip-data';
import { WithdrawInfoVariants } from '../../model/withdraw-info-variants';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';
import { Article } from '@/src/shared/ui/primitives/article';
import { InfoBlock } from '@/src/shared/ui/primitives/info-block';
import { formatDate } from '@/src/entities/receipt';

type Props = {
  info: IWithdrawInfo;
};

export const WithdrawInfoModal = ({ info }: Props) => {
  const { receiver_type, receiver_data, date, amount, status } = info;
  const { title, titleClassname } = WithdrawInfoVariants[status];

  const typeText = receiver_type === 'phone' ? 'На телефон' : 'На карту';
  const dataText =
    receiver_type === 'phone' ? `***-${receiver_data.slice(13)}` : `****-${receiver_data}`;
  const Icon = ChipData[status].icon;

  return (
    <>
      <Flex center col className='p-4 py-6' gap={6}>
        <Text className='mt-5' tag='h2' weight={600}>
          {formatDate(new Date(date))}
        </Text>
        <Chip
          className='min-w-6 max-w-none w-24 h-24 p-0 -mb-2'
          classNames={{ content: 'font-medium p-0 flex justify-center' }}
          color={ChipData[status].color}
          size='sm'
          variant='flat'
        >
          <Icon className='flex-shrink-0' size={'70%'} weight='bold' />
        </Chip>
        <Text className={titleClassname} size={20} weight={600}>
          {title}
        </Text>

        <Chip
          className='h-12 p-4'
          classNames={{ content: 'font-semibold text-2xl -mr-1 ml-[2px] text-[--accent]' }}
          startContent={<DiamondsFour className='text-[--accent]' size={24} weight='bold' />}
        >
          {amount}
        </Chip>
        {status === 'declined' && (
          <InfoBlock>
            Мы проверили ваши чеки, и некоторые из них оказались невалидными. Бонусы, полученные за
            невалидные чеки были списаны с акккаунта. Вы можете продолжать сканировать новые чеки и
            выводить средства.
          </InfoBlock>
        )}
        <Article titleInside title='Счёт вывода'>
          <Text size={18} weight={600}>
            {typeText} {dataText}
          </Text>
        </Article>
        {status === 'pending' && (
          <Flex col gap={2}>
            <Button fullWidth className='font-medium' color='warning' size='lg' variant='flat'>
              Отменить заявку
            </Button>
            <Text className='text-center mt-3' opacity={0.5} size={14}>
              Бонусы вернутся на ваш счёт сразу после отмены заявки на вывод средств.
            </Text>
          </Flex>
        )}
        {status === 'declined' && (
          <Button fullWidth className='font-medium' color='warning' size='lg' variant='flat'>
            Оспорить решение
          </Button>
        )}
      </Flex>
    </>
  );
};
