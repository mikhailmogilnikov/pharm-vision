import { Squircle } from '@squircle-js/react';
import Link from 'next/link';

import { IOffer } from '../../model/offer.type';
import { OfferBanner } from '../card/banner';
import { OfferBrand } from '../card/brand';

import { ScanQrOfferButton } from './offer-button';
import { OfferModalGuide } from './guide';
import { OfferModalProductsList } from './products';
import { OfferModalBrandsList } from './brands';

import { ModalLayout } from '@/src/entities/modal';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { InfoBlock } from '@/src/shared/ui/primitives/info-block';

export type PropsWithOffer = {
  offer: IOffer;
};

export const OfferModal = ({ offer }: PropsWithOffer) => {
  return (
    <ModalLayout footer={<ScanQrOfferButton />}>
      <OfferBanner height={240} offer={offer} />
      <Flex col className='p-4 pb-8' tag='section'>
        <Link href='#brands'>
          <Squircle className='p-4 bg-default my-2' cornerRadius={20} cornerSmoothing={1}>
            <OfferBrand isBlurred={false} offer={offer} />
          </Squircle>
        </Link>

        <OfferModalGuide offer={offer} />
        <InfoBlock>
          Убедитесь, что содержимое чека соответствует условию акции. За продукты, не подходящие по
          условию, будет начислен фиксированный кешбэк.
        </InfoBlock>
        <OfferModalProductsList products={offer.products} />
        <OfferModalBrandsList offer={offer} />
      </Flex>
    </ModalLayout>
  );
};
