import { Button } from '@nextui-org/button';
import { Image } from '@nextui-org/image';
import NextImage from 'next/image';
import { useRouter } from 'next/navigation';

import { ReceiptConst } from '../../config/receipt';
import { formatDate } from '../../lib/utils/format-date';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { ModalLayout, useModal } from '@/src/entities/modal';
import { Text } from '@/src/shared/ui/primitives/text';
import { CashbackAmountBlock } from '@/src/entities/cashback';
import { Article } from '@/src/shared/ui/primitives/article';

type Props = {
  id: number;
};

export const ReceiptModal = ({ id }: Props) => {
  const { closeModal } = useModal();
  const { push } = useRouter();

  //request
  const { number, name, date, price, cashback, address, items } = ReceiptConst;

  const itemsWithCashback = items.filter(({ cashback }) => !!cashback);
  const itemsWithoutCashback = items.filter(({ cashback }) => !cashback);

  const handleDisputeCashback = () => {
    closeModal();
    push(`contact?receiptId=${number}`);
  };

  return (
    <ModalLayout>
      <Flex center col className='p-4' gap={8}>
        <Text className='mt-5' tag='h2' weight={600}>
          {formatDate(new Date(date))}
        </Text>

        <Flex center col>
          <Text isCopyable size={24} tag='h2' weight={600}>
            {name}
          </Text>
          <Text isCopyable className='-mt-4' opacity={0.5}>
            Чек №{number}
          </Text>
        </Flex>

        <Flex center col className='justify-center' gap={1}>
          <Text size={26} tag='h3' weight={600}>
            {price} ₽
          </Text>
          <CashbackAmountBlock>{cashback}</CashbackAmountBlock>
        </Flex>

        <Article blockClassname='p-4 gap-6' title='Покупки с кешбэком'>
          {itemsWithCashback.map((item) => (
            <Flex
              key={item.vendor}
              center
              className='flex justify-between py-1 items-end'
              gap={3}
              tag='li'
            >
              <Image
                fill
                alt={item.name}
                as={NextImage}
                className='rounded-full'
                classNames={{
                  wrapper:
                    'rounded-full bg-default-200 aspect-square h-10 !w-10 flex-shrink-0 fit-contain',
                }}
                sizes='48px'
                src={item.avatar || undefined}
              />
              <Flex col gap={1}>
                <Text size={16} weight={600}>
                  {item.name}
                </Text>
                <Text opacity={0.5} size={14}>
                  {item.vendor}
                </Text>
              </Flex>

              <Flex col className='w-fit items-end' gap={1} width={''}>
                <Text>{item.price} ₽</Text>
                {item.cashback && <CashbackAmountBlock>{item.cashback}</CashbackAmountBlock>}
              </Flex>
            </Flex>
          ))}
        </Article>

        <Article title='Остальные покупки'>
          {itemsWithoutCashback.map((item) => (
            <Flex key={item.vendor} center className='flex justify-between py-1' gap={2} tag='li'>
              <Flex col gap={1}>
                <Text size={16} weight={600}>
                  {item.name}
                </Text>
                <Text opacity={0.5} size={14}>
                  {item.vendor}
                </Text>
              </Flex>

              <Flex center col gap={1} width={''}>
                <Text className='w-fit text-nowrap'>{item.price} ₽</Text>
              </Flex>
            </Flex>
          ))}
        </Article>

        <Article title='Адрес'>
          <Text tag='h4'>{address}</Text>
        </Article>

        <Button
          fullWidth
          className='font-medium'
          color='warning'
          size='lg'
          variant='flat'
          onClick={handleDisputeCashback}
        >
          Оспорить кешбэк
        </Button>
      </Flex>
    </ModalLayout>
  );
};
