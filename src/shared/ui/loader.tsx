import { Spinner } from '@nextui-org/spinner';

import { Flex } from './primitives/flex';

type Props = {
  fullscreen?: boolean;
};

export const Loader = ({ fullscreen = false }: Props) => {
  return (
    <Flex center className={`justify-center ${fullscreen ? 'h-screen' : 'mt-4'}`}>
      <Spinner classNames={{ circle1: ' border-b-[--accent]', circle2: ' border-b-[--accent]' }} />
    </Flex>
  );
};
