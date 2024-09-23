import { Image } from '@nextui-org/image';
import NextImage from 'next/image';
import { MouseEventHandler, ReactNode } from 'react';

type Props = {
  tag?: 'div' | 'li';
  title?: string;
  description?: string | ReactNode;
  avatarUrl?: string;
  isAvatarBlurred?: boolean;
  endContent?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const ListElement = ({
  tag = 'li',
  title,
  description,
  avatarUrl,
  isAvatarBlurred = false,
  endContent,
  onClick,
}: Props) => {
  const Tag = tag;

  const desc =
    typeof description === 'string' ? (
      <p className='font-medium opacity-50 text-sm'>{description}</p>
    ) : (
      description
    );

  return (
    <button className='text-start' type='button' onClick={onClick}>
      <Tag className='flex gap-1 items-start'>
        {avatarUrl && (
          <Image
            fill
            alt={title}
            as={NextImage}
            className='rounded-full'
            classNames={{
              wrapper:
                'rounded-full bg-default-200 aspect-square h-[44px] mr-2 mt-1 !w-[44px] flex-shrink-0 fit-contain',
            }}
            isBlurred={isAvatarBlurred}
            sizes='48px'
            src={avatarUrl}
          />
        )}
        <div className='flex flex-col gap-1 w-full'>
          {title && <h5 className='text-base font-semibold'>{title}</h5>} {description && desc}
        </div>
        {endContent && (
          <div className='flex flex-col gap-1 w-fit flex-shrink-0 mt-1'>{endContent}</div>
        )}
      </Tag>
    </button>
  );
};
