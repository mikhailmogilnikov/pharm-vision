/* eslint-disable jsx-a11y/no-autofocus */
'use client';

import { useState } from 'react';
import { Button } from '@nextui-org/button';

import { EUserSettings } from '../model/user-settings.enum';
import { UserSettingsTitlesParent } from '../config/user-settings-titles';

import { ModalLayout, useModal } from '@/src/entities/modal';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';
import { CityPicker } from '@/src/shared/ui/inputs/city-picker';
import { TGeomark } from '@/src/shared/model/types/index.type';
import { MotionLayout } from '@/src/shared/ui/primitives/motion-layout';

type Props = {
  field: EUserSettings;
  initValue: string;
};

export const ChangeUserInfoModal = ({ field, initValue }: Props) => {
  const { closeModal } = useModal();

  const [value, setValue] = useState(initValue);
  const [geomark, setGeomark] = useState<TGeomark | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = () => {
    if (field === 'address') {
      if (!geomark) {
        setError('Выберите адрес');

        return;
      }
    } else if (field !== 'email') {
      if (value.length <= 2 || value.length > 20) {
        setError('От 3 до 20 символов');

        return;
      }
    }
    closeModal();
  };

  return (
    <ModalLayout
      footer={
        <>
          <Button fullWidth className='shadow-base font-medium' size='lg' onClick={closeModal}>
            Отменить
          </Button>
          <Button
            fullWidth
            className='bg-[--accent] text-secondary-foreground font-medium'
            size='lg'
            onClick={handleChange}
          >
            Изменить
          </Button>
        </>
      }
    >
      <Flex col className='p-4 mt-10 mb-28' gap={28}>
        <Text className='text-center' opacity={0.5} weight={500}>
          Изменить {UserSettingsTitlesParent[field]}
        </Text>
        {field === 'address' && <CityPicker setCity={setGeomark} />}
        {field === 'email' && (
          <Text className='text-center' size={18} weight={600}>
            Для смены почты требуется подтверждение. Нажмите на &quot;Изменить&quot;, и мы вышлем
            письмо с инструкцией на почтовый адрес, привязанный к аккаунту.
          </Text>
        )}
        {field !== 'address' && field !== 'email' && (
          <input
            className='bg-transparent outline-none text-center text-2xl  font-bold'
            value={value}
            onChange={({ target }) => setValue(target.value)}
          />
        )}
      </Flex>
      <Flex className='p-4 pt-0'>
        {error && (
          <MotionLayout
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            className='px-4 py-3 rounded-large bg-danger/20 text-danger font-medium w-full'
            exit={{ opacity: 0, filter: 'blur(24px)' }}
            initial={{ opacity: 0, filter: 'blur(24px)' }}
          >
            {error}
          </MotionLayout>
        )}
      </Flex>
    </ModalLayout>
  );
};
