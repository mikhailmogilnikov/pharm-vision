import { ModalLayoutProps } from '.';

import { Flex } from '@/src/shared/ui/primitives/flex';

export const ModalLayoutFooter = ({ footer }: Pick<ModalLayoutProps, 'footer'>) => {
  return <Flex className='px-4 pb-4 pt-0 h-min flex-shrink-0'>{footer}</Flex>;
};
