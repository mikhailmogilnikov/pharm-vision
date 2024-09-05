'use client';

import { Divider } from '@nextui-org/divider';
import { Fragment, useState } from 'react';
import { Button } from '@nextui-org/button';
import { Question } from '@phosphor-icons/react';
import { AnimatePresence, LayoutGroup } from 'framer-motion';

import { IProduct, Product } from '@/src/entities/product';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';
import { InfoBlock } from '@/src/shared/ui/primitives/info-block';
import { MotionLayout } from '@/src/shared/ui/primitives/motion-layout';

type Props = {
  products: IProduct[];
};

export const ProductsList = ({ products }: Props) => {
  const [isShowInfo, setIsShowInfo] = useState(false);

  return (
    <Flex col>
      <Flex className='justify-between'>
        <Text size={20} weight={600}>
          Товары с кешбеком
        </Text>
        <Button
          isIconOnly
          className={`shadow-base ${isShowInfo && 'bg-[--accent]'}`}
          radius='full'
          size='sm'
          onClick={() => setIsShowInfo(!isShowInfo)}
        >
          <Question
            className={isShowInfo ? 'text-secondary-foreground' : ''}
            opacity={isShowInfo ? 1 : 0.5}
            size={22}
            weight='bold'
          />
        </Button>
      </Flex>

      <LayoutGroup>
        <AnimatePresence>
          {isShowInfo && (
            <MotionLayout
              animate={{ filter: 'blur(0px)', opacity: 1 }}
              exit={{ filter: 'blur(24px)', opacity: 0 }}
              initial={{ filter: 'blur(24px)', opacity: 0 }}
              layout={false}
            >
              <InfoBlock>
                За каждый товар из этой подборки в отсканированном чеке будет начислен фиксированный
                кешбэк. Он не суммируется с бонусами, полученными в спецпредложении.
              </InfoBlock>
            </MotionLayout>
          )}
        </AnimatePresence>

        <MotionLayout className='flex flex-col gap-4 mt-2'>
          {products.map((product, index) => (
            <Fragment key={product.id}>
              <Product product={product} />
              {index < products.length - 1 && <Divider />}
            </Fragment>
          ))}
        </MotionLayout>
      </LayoutGroup>
    </Flex>
  );
};
