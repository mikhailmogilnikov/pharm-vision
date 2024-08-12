import { PropsWithChildren } from 'react';
import { Squircle } from '@squircle-js/react';

import { Flex } from './flex';
import { Text } from './text';

type Props = PropsWithChildren<{ title: string; radius?: number; titleClassname?: string }>;

export const Article = ({ children, title, radius = 18, titleClassname }: Props) => {
  return (
    <Flex col gap={3} tag='article'>
      <Text className={titleClassname} tag='h3'>
        {title}
      </Text>
      <Squircle
        className='bg-default flex flex-col h-min gap-4 p-4'
        cornerRadius={radius}
        cornerSmoothing={1}
      >
        {children}
      </Squircle>
    </Flex>
  );
};
