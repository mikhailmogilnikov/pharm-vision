import { X } from '@phosphor-icons/react';

type Props = {
  onClick: VoidFunction;
};

export const CloseModalButton = ({ onClick }: Props) => {
  return (
    <button
      className='absolute top-3 right-3 w-8 h-8 bg-default-200 dark:bg-default rounded-full flex items-center justify-center z-50'
      onClick={onClick}
    >
      <X className='text-foreground/50' size={20} weight='bold' />
    </button>
  );
};
