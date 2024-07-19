'use client';

import { Squircle } from '@squircle-js/react';

import { IOffer } from '../../model/offer.type';
import { OfferModal } from '../modal';

import { OfferBanner } from './banner';
import { OfferBrand } from './brand';

import { useModal } from '@/src/entities/modal';
import { Flex } from '@/src/shared/ui/primitives/flex';

type Props = {
  offer: IOffer;
};

export const OfferCard = ({ offer }: Props) => {
  const { setModal } = useModal();

  const handlePress = () => {
    setModal(<OfferModal offer={offer} />);
  };

  return (
    <li className='shadow-base active:shadow-none rounded-[25px] active:scale-95 transition-transform-shadow w-full'>
      <button className='w-full text-start' onClick={handlePress}>
        <Squircle
          className='w-full h-64 bg-default relative !z-10 shadow-base flex flex-col'
          cornerRadius={24}
          cornerSmoothing={1}
        >
          <OfferBanner offer={offer} />
          <Flex className='p-4'>
            <OfferBrand offer={offer} />
          </Flex>
        </Squircle>
      </button>
    </li>
  );
};
