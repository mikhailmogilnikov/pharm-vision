import { ReactNode } from 'react';
import { CaretLeft } from '@phosphor-icons/react/dist/ssr';

import { Flex } from '../primitives/flex';
import { Text } from '../primitives/text';
import { BackButton } from '../buttons/back-button';
import { FloatingBackButtonPortal } from '../buttons/floating-back-button';

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
          {isBack ? (
            <>
              <BackButton disableRipple className='bg-transparent rounded-full p-0'>
                <CaretLeft className='flex-shrink-0' size={24} weight='bold' />
                <Text className='leading-5' size={28} weight={600}>
                  {title}
                </Text>
              </BackButton>
              <FloatingBackButtonPortal />
            </>
          ) : (
            <Text className='leading-5' size={28} weight={600}>
              {title}
            </Text>
          )}
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
