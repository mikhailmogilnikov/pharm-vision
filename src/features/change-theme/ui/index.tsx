'use client';

import { Button } from '@nextui-org/button';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
} from '@nextui-org/dropdown';
import { useTheme } from 'next-themes';

import { Themes } from '../config/themes';

import { Text } from '@/src/shared/ui/primitives/text';

export const ChangeThemeButton = ({ ...buttonProps }) => {
  const { resolvedTheme, theme, setTheme } = useTheme();

  const ResolvedThemeIcon = Themes.find(({ id }) => id === resolvedTheme)!.icon;

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          isIconOnly
          className='shadow-base'
          radius='full'
          startContent={<ResolvedThemeIcon size='60%' weight='bold' />}
          {...buttonProps}
        />
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        aria-label='Выберите тему оформления'
        closeOnSelect={false}
        selectedKeys={theme && new Set([theme])}
        selectionMode='single'
        onSelectionChange={(theme) => setTheme([...theme][0])}
      >
        <DropdownSection
          classNames={{ base: 'mb-0', heading: 'opacity-50' }}
          title='Тема оформления'
        >
          {Themes.map(({ id, name, icon: Icon }) => (
            <DropdownItem
              key={id}
              startContent={<Icon weight='bold' />}
              textValue={name}
              variant='faded'
            >
              <Text className=' leading-5' size={14} weight={500}>
                {name}
              </Text>
            </DropdownItem>
          ))}
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
