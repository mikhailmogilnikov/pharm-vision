import { IOffer } from '../../model/offer.type';
import { OfferBanner } from '../card/banner';
import { OfferBrand } from '../card/brand';

import { ScanQrOfferButton } from './offer-button';
import { OfferModalGuide } from './guide';

import { ModalLayout } from '@/src/entities/modal';
import { Flex } from '@/src/shared/ui/primitives/flex';

type Props = {
  offer: IOffer;
};

export const OfferModal = ({ offer }: Props) => {
  return (
    <ModalLayout footer={<ScanQrOfferButton />}>
      <OfferBanner height={240} offer={offer} />
      <Flex col className='p-4' tag='section'>
        <Flex className='p-4 bg-default rounded-3xl'>
          <OfferBrand isBlurred={false} offer={offer} />
        </Flex>

        <OfferModalGuide offer={offer} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Flex>
    </ModalLayout>
  );
};
