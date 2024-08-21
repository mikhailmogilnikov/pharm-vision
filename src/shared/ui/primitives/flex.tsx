import { clsx } from 'clsx';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  tag?:
    | 'div'
    | 'section'
    | 'menu'
    | 'aside'
    | 'header'
    | 'footer'
    | 'span'
    | 'article'
    | 'nav'
    | 'ul'
    | 'ol'
    | 'li'
    | 'main';
  className?: string;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  gap?: number;
  width?: number | string;
  editable?: boolean;
  wrap?: boolean;
  col?: boolean;
  id?: string;
  center?: boolean;
};

export const Flex = ({
  children,
  className,
  id,
  tag = 'div',
  direction = 'row',
  gap = 4,
  width = '100%',
  editable = false,
  wrap = false,
  col = false,
  center = false,
}: Props) => {
  const Tag = tag;

  const tagClassName = clsx(
    'flex text-foreground',
    {
      'flex-wrap': wrap,
      'items-center': center,
    },
    className,
  );

  return (
    <Tag
      className={tagClassName}
      id={id}
      style={
        !editable ? { flexDirection: col ? 'column' : direction, gap: gap * 4, width } : undefined
      }
    >
      {children}
    </Tag>
  );
};
