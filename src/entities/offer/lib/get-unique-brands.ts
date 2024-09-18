import { IBrand } from '../../brand';

export const getUniqueBrands = (brands: IBrand[]) => {
  const result: IBrand[] = [];

  brands.forEach((brand) => {
    if (!result.find(({ id }) => id === brand.id)) {
      result.push(brand);
    }
  });

  return result;
};
