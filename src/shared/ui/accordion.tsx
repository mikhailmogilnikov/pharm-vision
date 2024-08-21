'use client';

import { Accordion as NextUIAccordion, AccordionItem } from '@nextui-org/accordion';
import { Input } from '@nextui-org/input';
import { MagnifyingGlass, XCircle } from '@phosphor-icons/react';
import { useEffect, useMemo, useState } from 'react';
import { ScrollShadow } from '@nextui-org/scroll-shadow';
import { Button } from '@nextui-org/button';
import Link from 'next/link';

import { InfoBlock } from './primitives/info-block';
import { Text } from './primitives/text';
import { Flex } from './primitives/flex';

type AccordionItem = {
  id: number;
  title: string;
  description: string;
  group?: string;
};

type Props = {
  items: AccordionItem[];
  search?: boolean;
  tooltips?: boolean;
};

export const Accordion = ({ items, search = false, tooltips = false }: Props) => {
  const [currentItems, setItems] = useState<AccordionItem[]>([]);
  const [value, setValue] = useState('');

  const GroupedValues = useMemo(() => {
    let vault: { [key: string]: AccordionItem[] } = {
      ungrouped: [],
    };

    items.forEach((item) => {
      if (item.group) {
        if (!vault[item.group]) {
          vault[item.group] = [];
        }
        vault[item.group].push(item);
      } else {
        vault.ungrouped.push(item);
      }
    });

    return vault;
  }, []);

  const TrueGroupedValues = useMemo(() => {
    const copy = { ...GroupedValues };

    delete copy.ungrouped;

    return copy;
  }, []);

  const isHaveGroupedValues = Object.keys(TrueGroupedValues).length > 0;

  useEffect(() => {
    if (tooltips) {
      document.documentElement.style.scrollBehavior = 'smooth';
    }

    return () => {
      if (tooltips) {
        document.documentElement.style.scrollBehavior = '';
      }
    };
  }, []);

  useEffect(() => {
    if (value.length > 0) {
      const filteredItems = items.filter(({ title }) =>
        title.toLowerCase().includes(value.toLowerCase()),
      );

      setItems(filteredItems);
    } else {
      setItems(GroupedValues.ungrouped);
    }
  }, [value]);

  return (
    <>
      {search && (
        <Input
          isClearable
          classNames={{ inputWrapper: '!bg-default', innerWrapper: 'px-1 pr-5' }}
          endContent={<XCircle opacity={0.5} size={22} weight='fill' />}
          placeholder='Поиск'
          size='lg'
          startContent={<MagnifyingGlass className='mr-2' opacity={0.5} size={20} weight='bold' />}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onClear={() => setValue('')}
        />
      )}
      {isHaveGroupedValues && value.length === 0 && (
        <>
          {tooltips && (
            <ScrollShadow className='flex h-10 items-center gap-2 -mt-2' orientation='horizontal'>
              {Object.keys(TrueGroupedValues).map((key) => (
                <Button
                  key={key}
                  replace
                  as={Link}
                  className='h-8 shadow-sm font-medium scroll-smooth'
                  href={`#${key}`}
                >
                  {key}
                </Button>
              ))}
            </ScrollShadow>
          )}
          {Object.entries(TrueGroupedValues).map(([key, array]) => {
            return (
              <Flex key={key} col className='my-1' gap={3} id={key}>
                <Text opacity={0.7} size={18} weight={600}>
                  {key}
                </Text>
                <NextUIAccordion
                  className='bg-default border-none shadow-none rounded-2xl'
                  variant='shadow'
                >
                  {array.map(({ id, title, description }) => (
                    <AccordionItem
                      key={id}
                      classNames={{
                        title: 'text-lg font-semibold',
                        content: 'text-[15px] font-medium opacity-60 mb-2',
                      }}
                      textValue={title}
                      title={title}
                    >
                      {description}
                    </AccordionItem>
                  ))}
                </NextUIAccordion>
              </Flex>
            );
          })}
        </>
      )}
      {currentItems.length === 0 ? (
        <>
          {value.length > 0 ? (
            <InfoBlock>По вашему запросу ничего не найдено. Попробуйте изменить запрос.</InfoBlock>
          ) : null}
        </>
      ) : (
        <NextUIAccordion
          className='bg-default border-none shadow-none rounded-2xl'
          variant='shadow'
        >
          {currentItems.map(({ id, title, description }) => (
            <AccordionItem
              key={id}
              classNames={{
                title: 'text-lg font-semibold',
                content: 'text-[15px] font-medium opacity-60 mb-2',
              }}
              textValue={title}
              title={title}
            >
              {description}
            </AccordionItem>
          ))}
        </NextUIAccordion>
      )}
    </>
  );
};
