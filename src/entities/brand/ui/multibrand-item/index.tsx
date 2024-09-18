import { Avatar, AvatarGroup } from '@nextui-org/avatar';
import { clsx } from 'clsx';

import { IBrand } from '../../model/brand.type';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';

type Props = {
  brands: IBrand[];
};

export const MultibrandItem = ({ brands }: Props) => {
  return (
    <Flex center gap={3} tag='article'>
      <AvatarGroup
        classNames={{ count: 'bg-background w-12 h-12' }}
        max={3}
        renderCount={() => null}
      >
        {brands.map(({ id, name, logo }, index) => (
          <Avatar
            key={id}
            alt={name}
            classNames={{ base: clsx('w-12 h-12', { '!-ms-4': index > 0 }) }}
            src={logo}
          />
        ))}
      </AvatarGroup>

      <Flex col className='justify-center' gap={2}>
        <Text className='leading-5 line-clamp-2' size={15} weight={600}>
          {brands.map(({ name, id }, index) => {
            if (index < 3) {
              return (
                <span key={id}>
                  {name}
                  {index < brands.length - 1 && index !== 2 && ','}{' '}
                </span>
              );
            }
          })}
          {brands.length > 3 && `и ещё ${brands.length - 3}`}
        </Text>
      </Flex>
    </Flex>
  );
};
