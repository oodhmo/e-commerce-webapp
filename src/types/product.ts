import type { TImagePairList } from '@/types/image';

type BaseProductInfo = {
  id: string;
  name: string;
  price: string;
};

export type TProductInfo = BaseProductInfo & {
  description: string;
  discount: string | number | null;
  original_price: string | null;
  gender: string;
  view_count: number;
  image_pair: TImagePairList;
  seasonal: string[];
  style: string[];
};

export interface TCartProduct extends BaseProductInfo {
  mainImg: string;
  count: number;
  totalPrice: number;
}
