'use client';

import { useRouter } from 'next/navigation';

import { getUniqueBrands } from '../../lib/get-unique-brands';

import { PropsWithOffer } from '.';

import { useModal } from '@/src/entities/modal';
import { Article } from '@/src/shared/ui/primitives/article';
import { ListElement } from '@/src/shared/ui/primitives/element';
import { Flex } from '@/src/shared/ui/primitives/flex';

export const OfferModalBrandsList = ({ offer }: PropsWithOffer) => {
  const { push } = useRouter();
  const { closeModal } = useModal();

  const handleClick = (brandId: number) => {
    closeModal();
    push(`/promotion/nurofen/brand/${brandId}`);
  };

  const { products } = offer;
  const brandsList = products.map(({ brand }) => brand);
  const uniqueBrands = getUniqueBrands(brandsList);

  return (
    <Article className='mt-4' id='brands' title='Бренды, участвующие в акции'>
      <Flex col gap={6} tag='ul'>
        {uniqueBrands.map(({ id, name, description, logo }) => (
          <ListElement
            key={id}
            avatarUrl={logo}
            description={description}
            title={name}
            onClick={() => handleClick(id)}
          />
        ))}
      </Flex>
    </Article>
  );
};
