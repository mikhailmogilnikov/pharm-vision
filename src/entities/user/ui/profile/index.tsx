import { Button } from '@nextui-org/button';
import { GearFine } from '@phosphor-icons/react/dist/ssr';
import dynamic from 'next/dynamic';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';
import { ChangeThemeSkeleton } from '@/src/features/change-theme';

const DynamicChangeThemeButton = dynamic(
  () => import('@/src/features/change-theme').then((mod) => mod.ChangeThemeButton),
  {
    loading: () => <ChangeThemeSkeleton />,
    ssr: false,
  },
);

export const UserProfile = () => {
  return (
    <Flex center className='justify-between' tag='article'>
      <Text className=' leading-5' size={32} weight={600}>
        Михаил
      </Text>
      <Flex gap={3} width='min-content'>
        <DynamicChangeThemeButton />
        <Button
          isIconOnly
          className='shadow-base'
          radius='full'
          size='md'
          startContent={<GearFine size='60%' weight='bold' />}
        />
      </Flex>
    </Flex>
  );
};
