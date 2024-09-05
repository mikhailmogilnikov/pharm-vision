import { Spinner } from '@nextui-org/spinner';
import { CircleNotch } from '@phosphor-icons/react/dist/ssr';

import { Flex } from './primitives/flex';

type Props = {
  fullscreen?: boolean;
};

export const Loader = ({ fullscreen = false }: Props) => {
  return fullscreen ? (
    <Flex center className='justify-center fixed inset-0'>
      <CircleNotch className='animate-spin origin-center' opacity={0.4} size={36} weight='bold' />
    </Flex>
  ) : (
    <Flex center className='justify-center mt-4'>
      <Spinner classNames={{ circle1: ' border-b-[--accent]', circle2: ' border-b-[--accent]' }} />
    </Flex>
  );
};
