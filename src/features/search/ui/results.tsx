import { usePathname, useRouter } from 'next/navigation';
import { DiamondsFour, MagnifyingGlass } from '@phosphor-icons/react';
import { ScrollShadow } from '@nextui-org/scroll-shadow';

import { ISearchResponse } from '../model/search-response.type';

import { HorisontalList } from '@/src/shared/ui/primitives/horisontal-list';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { Article } from '@/src/shared/ui/primitives/article';
import { Text } from '@/src/shared/ui/primitives/text';
import { BrandMiniCard } from '@/src/entities/brand';
import { ListElement } from '@/src/shared/ui/primitives/element';
import { Placeholder } from '@/src/shared/ui/primitives/placeholder';

type Props = {
  results: ISearchResponse;
  closeModal: VoidFunction;
};

export const SearchResults = ({ results, closeModal }: Props) => {
  const { push } = useRouter();
  const pathname = usePathname();
  const promotionId = pathname.split('/promotion/')[1].split('/')[0];

  const { brands, products } = results;

  const isHaveBrands = brands.length > 0;
  const isHaveProducts = products.length > 0;

  const handleNavigateBrand = (brandId: number) => () => {
    closeModal();
    setTimeout(() => {
      push(`/promotion/${promotionId}/brand/${brandId}`);
    }, 200);
  };

  return (
    <ScrollShadow
      hideScrollBar
      className='flex flex-col gap-4 pt-6 -mt-3 h-[calc(100dvh-56px)] overflow-x-hidden px-4'
    >
      {isHaveBrands && (
        <HorisontalList title='Бренды'>
          {brands.map((brand) => (
            <BrandMiniCard key={brand.id} brand={brand} onClick={handleNavigateBrand(brand.id)} />
          ))}
        </HorisontalList>
      )}

      {isHaveProducts && (
        <Article
          blockClassname='p-4 gap-6'
          title='Товары с кешбэком'
          titleClassname='text-[20px] mb-1 font-semibold !opacity-100'
        >
          {products.map(({ brandId, id, sku, name, brand, cashbackType, fixCashback }) => (
            <ListElement
              key={`${brandId}_${id}`}
              avatarUrl={brand.logo}
              description={sku}
              endContent={
                <Flex
                  center
                  className='bg-background dark:bg-default-200 px-2 h-7 mt-2 rounded-full'
                  gap={1}
                  width={'min-width'}
                >
                  {cashbackType === 'amount' ? (
                    <>
                      <DiamondsFour className='text-[--accent]' weight='fill' width={13} />
                      <Text className='text-[--accent]' size={14} weight={600}>
                        {fixCashback}
                      </Text>
                    </>
                  ) : (
                    <Text className='text-[--accent] w-fit text-nowrap' size={14} weight={600}>
                      {fixCashback}%
                    </Text>
                  )}
                </Flex>
              }
              title={name}
              onClick={handleNavigateBrand(brand.id)}
            />
          ))}
        </Article>
      )}

      {!isHaveBrands && !isHaveProducts && (
        <Placeholder description='Попробуйте ввести другой запрос' icon={MagnifyingGlass}>
          Ничего не найдено
        </Placeholder>
      )}
    </ScrollShadow>
  );
};
