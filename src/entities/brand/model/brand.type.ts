/* eslint-disable @conarti/feature-sliced/layers-slices */

import { IOffer } from '../../offer';
import { IProduct } from '../../product';

export interface IBrand {
  id: number;
  promotionId: string;
  logo: string;
  createdAt: string;
  name: string;
  description: string;
}

export interface IBrandFull extends IBrand {
  products: IProduct[];
  offers: IOffer[];
}
