import { ReactNode } from 'react';

import { Flex } from '../primitives/flex';
import { Text } from '../primitives/text';

type Props = {
  title: string;
  actionButtons?: ReactNode;
  isBack?: boolean;
  children?: ReactNode;
};

export const SectionWithTitleLayout = ({
  actionButtons,
  title,
  isBack = false,
  children,
}: Props) => {
  return (
    <Flex col>
      <Flex center className='justify-between mt-4' tag='article'>
        <Text className='leading-5' size={32} weight={600}>
          {title}
        </Text>
        {actionButtons && (
          <Flex gap={3} width='min-content'>
            {actionButtons}
          </Flex>
        )}
      </Flex>
      {children}
    </Flex>
  );
};
