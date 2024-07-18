import { TOfferCondition } from '../model/offer.type';

import { pluralCreative } from '@/src/shared/lib/utils/plural';
import { NUMBERS_CREATIVE_CASE } from '@/src/shared/model/numbers-creative-case';

export const generateOfferCondition = ({
  variant,
  type,
  from_value,
  to_value,
}: TOfferCondition) => {
  const AmountCreativePluralForms = {
    one: 'позиции',
    other: 'позиций',
  };

  const amountTypes: Record<typeof type, string> = {
    from: `От ${NUMBERS_CREATIVE_CASE[from_value as keyof typeof NUMBERS_CREATIVE_CASE]} ${pluralCreative(from_value as number, AmountCreativePluralForms)} в чеке`,
    to: `До ${NUMBERS_CREATIVE_CASE[to_value as keyof typeof NUMBERS_CREATIVE_CASE]} ${pluralCreative(to_value as number, AmountCreativePluralForms)} в чеке`,
    from_to: `От ${NUMBERS_CREATIVE_CASE[from_value as keyof typeof NUMBERS_CREATIVE_CASE]} до ${NUMBERS_CREATIVE_CASE[to_value as keyof typeof NUMBERS_CREATIVE_CASE]} ${pluralCreative(to_value as number, AmountCreativePluralForms)} в чеке`,
  };

  const priceTypes: Record<typeof type, string> = {
    from: `От ${from_value}₽ в чеке`,
    to: `До ${to_value}₽ в чеке`,
    from_to: `От ${from_value} до ${to_value} ₽ в чеке`,
  };

  const variants: Record<typeof variant, (typeof amountTypes)[typeof type]> = {
    amount: amountTypes[type],
    price: priceTypes[type],
  };

  return variants[variant];
};
