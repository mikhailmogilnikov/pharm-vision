import { PropsWithChildren } from 'react';
import { Squircle } from '@squircle-js/react';

import { Flex } from './flex';
import { Text } from './text';

type Props = PropsWithChildren<{
  title?: string;
  radius?: number;
  titleClassname?: string;
  blockClassname?: string;
  actionButton?: React.ReactNode;
  className?: string;
}>;

export const Article = ({
  children,
  title,
  radius = 18,
  titleClassname,
  blockClassname = 'gap-4 p-4',
  actionButton,
  className,
}: Props) => {
  return (
    <Flex col className={className} gap={3} tag='article'>
      {title && (
        <Flex center className='justify-between'>
          <Text className={titleClassname} opacity={0.7} tag='h3' weight={600}>
            {title}
          </Text>
          {actionButton}
        </Flex>
      )}

      <Squircle
        className={`bg-default flex flex-col h-min ${blockClassname}`}
        cornerRadius={radius}
        cornerSmoothing={1}
      >
        {children}
      </Squircle>
    </Flex>
  );
};
