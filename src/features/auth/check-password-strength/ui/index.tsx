import { Progress } from '@nextui-org/progress';
import { useEffect, useState } from 'react';
import { clsx } from 'clsx';

import { checkPasswordStrength } from '../lib/chech-password-strength';
import { PasswordValidationStateNames } from '../model/password-validation-states';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';
import { InfoBlock } from '@/src/shared/ui/primitives/info-block';

export const PasswordStrengthBar = ({
  password,
  setIsVerified,
  className,
}: {
  password: string;
  setIsVerified?: (value: boolean) => void;
  className?: string;
}) => {
  const status = checkPasswordStrength(password);
  const [currentColor, setCurrentColor] = useState<'default' | 'danger' | 'warning' | 'success'>(
    'default',
  );

  const isStrong = status === 'strong';
  const isMedium = status === 'medium' || isStrong;
  const isWeak = status === 'weak' || isMedium;

  useEffect(() => {
    if (isStrong) {
      setCurrentColor('success');
      if (setIsVerified) {
        setIsVerified(true);
      }

      return;
    } else if (isMedium) {
      setCurrentColor('warning');
      if (setIsVerified) {
        setIsVerified(true);
      }

      return;
    } else if (isWeak) {
      setCurrentColor('danger');
      if (setIsVerified) {
        setIsVerified(false);
      }

      return;
    }

    setCurrentColor('default');
    if (setIsVerified) {
      setIsVerified(false);
    }
  }, [isWeak, isStrong, isMedium]);

  const textClassnames = clsx({
    'text-success': currentColor === 'success',
    'text-warning': currentColor === 'warning',
    'text-danger': currentColor === 'danger',
    'opacity-40': currentColor === 'default',
  });

  return (
    <Flex col className={className}>
      <Text size={20} weight={600}>
        <span>Надёжность пароля: </span>
        <span className={textClassnames}>{PasswordValidationStateNames[status]}</span>
      </Text>
      <Flex gap={2}>
        <Progress
          aria-label='weak indicator'
          color={currentColor}
          size='sm'
          value={isWeak ? 100 : 0}
        />
        <Progress
          aria-label='mid indicator'
          color={currentColor}
          size='sm'
          value={isMedium ? 100 : 0}
        />
        <Progress
          aria-label='strong indicator'
          color={currentColor}
          size='sm'
          value={isStrong ? 100 : 0}
        />
      </Flex>

      <InfoBlock className='mt-2 p-4'>
        <span className='block mb-1'>Сильный пароль содержит:</span>
        &bull; Больше восьми символов <br />
        &bull; Как минимум одну заглавную букву <br />
        &bull; Как минимум одну цифру
        <br />
        &bull; Как минимум один спецсимвол
      </InfoBlock>
    </Flex>
  );
};
