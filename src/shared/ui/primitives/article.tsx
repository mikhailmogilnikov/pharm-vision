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
  titleInside?: boolean;
  id?: string;
}>;

export const Article = ({
  children,
  title,
  radius = 18,
  titleClassname,
  actionButton,
  className,
  titleInside = false,
  blockClassname = `${titleInside ? ' gap-3' : 'gap-4'} p-4`,
  id,
}: Props) => {
  return (
    <Flex col className={className} gap={3} id={id} tag='article'>
      {title && !titleInside && (
        <Flex center className='justify-between'>
          <Text className={titleClassname} opacity={0.7} tag='h3' weight={600}>
            {title}
          </Text>
          {actionButton}
        </Flex>
      )}

      <Squircle
        suppressHydrationWarning
        className={`bg-default flex flex-col h-min ${blockClassname}`}
        cornerRadius={radius}
        cornerSmoothing={1}
      >
        {title && titleInside && (
          <Text opacity={0.5} size={16} weight={600}>
            {title}
          </Text>
        )}
        {children}
      </Squircle>
    </Flex>
  );
};
