import { IOffer } from '../../model/offer.type';
import { OfferBanner } from '../card/banner';
import { OfferBrand } from '../card/brand';

import { ScanQrOfferButton } from './offer-button';

import { ModalLayout } from '@/src/entities/modal';
import { Flex } from '@/src/shared/ui/primitives/flex';

type Props = {
  offer: IOffer;
};

export const OfferModal = ({ offer }: Props) => {
  return (
    <ModalLayout footer={<ScanQrOfferButton />}>
      <OfferBanner height={240} offer={offer} />
      <Flex col tag='article'>
        <OfferBrand isBlurred={false} offer={offer} />
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
