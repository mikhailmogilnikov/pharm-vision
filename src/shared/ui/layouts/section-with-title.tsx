import { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';

import { Flex } from '../primitives/flex';
import { Text } from '../primitives/text';
import { BackButton } from '../buttons/back-button';

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
        <Flex center>
          {isBack && (
            <BackButton isIconOnly className='rounded-full'>
              <ArrowLeft />
            </BackButton>
          )}
          <Text className='leading-5' size={32} weight={600}>
            {title}
          </Text>
        </Flex>

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
