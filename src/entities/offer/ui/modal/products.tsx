'use client';

import { useRouter } from 'next/navigation';

import { IOffer } from '../../model/offer.type';

import { useModal } from '@/src/entities/modal';
import { Article } from '@/src/shared/ui/primitives/article';
import { ListElement } from '@/src/shared/ui/primitives/element';
import { Flex } from '@/src/shared/ui/primitives/flex';

type Props = {
  products: IOffer['products'];
};

export const OfferModalProductsList = ({ products }: Props) => {
  const { push } = useRouter();
  const { closeModal } = useModal();

  const handleClick = (brandId: number) => {
    closeModal();
    push(`/promotion/nurofen/brand/${brandId}`);
  };

  return (
    <Article className='mt-4' title='Товары, участвующие в акции'>
      <Flex col gap={6} tag='ul'>
        {products.map(({ id, brandId, name, sku, brand: { logo } }) => (
          <ListElement
            key={id}
            avatarUrl={logo}
            description={sku}
            title={name}
            onClick={() => handleClick(brandId)}
          />
        ))}
      </Flex>
    </Article>
  );
};
