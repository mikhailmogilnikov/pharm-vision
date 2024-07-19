import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';

export const OfferModalGuide = () => {
  return (
    <Flex col tag='article'>
      <Text size={20} weight={600}>
        Как получить кешбэк
      </Text>
      <Text className='-mt-3' opacity={0.5} size={16} weight={500}>
        C 20 по 26 июля
      </Text>
    </Flex>
  );
};
