import { Button, ButtonProps } from '@nextui-org/button';
import { Check, Copy } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { useCopyToClipboard } from 'react-use';

type Props = {
  copyText: string;
} & ButtonProps;

export const CopyButton = ({ copyText, ...rest }: Props) => {
  const [isCopied, setIsCopied] = useState(false);
  const [, copyToClipboard] = useCopyToClipboard();

  const handleClick = () => {
    if (!isCopied) {
      copyToClipboard(copyText);
      setIsCopied(true);
    }
  };

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  }, [isCopied]);

  return (
    <Button
      {...rest}
      isIconOnly
      color={isCopied ? 'success' : 'default'}
      onPress={handleClick}
    >
      {!isCopied ? (
        <Copy className='w-1/2 h-1/2' weight='bold' />
      ) : (
        <Check className='w-1/2 h-1/2' weight='bold' />
      )}
    </Button>
  );
};
