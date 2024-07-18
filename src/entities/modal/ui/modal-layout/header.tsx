import { ModalLayoutProps } from '.';

import { Text } from '@/src/shared/ui/primitives/text';
import { Flex } from '@/src/shared/ui/primitives/flex';

export const ModalLayoutHeader = ({
  title,
  description,
}: Pick<ModalLayoutProps, 'title' | 'description'>) => {
  return (
    <Flex center col className='py-16 px-6 text-center' gap={6}>
      <Text size={24} tag='h3' weight={600}>
        {title}
      </Text>
      {description && (
        <Text opacity={0.5} size={16} tag='h4' weight={500}>
          {description}
        </Text>
      )}
    </Flex>
  );
};
