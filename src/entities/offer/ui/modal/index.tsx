import { IOffer } from '../../model/offer.type';
import { OfferBanner } from '../card/banner';

import { ScanQrOfferButton } from './offer-button';

import { ModalLayout } from '@/src/entities/modal';

type Props = {
  offer: IOffer;
};

export const OfferModal = ({ offer }: Props) => {
  return (
    <ModalLayout footer={<ScanQrOfferButton />}>
      <OfferBanner height={240} offer={offer} />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
    </ModalLayout>
  );
};
