import type { TImagePairList } from '@/types/image';

type BaseProductInfo = {
  id: string;
  name: string;
  price: string;
};

export type TProductInfo = BaseProductInfo & {
  description: string;
  discount: string;
  original_price: string;
  gender: string;
  image_pair: TImagePairList;
};

export interface TCartProduct extends BaseProductInfo {
  mainImg: string;
  count: number;
  totalPrice: number;
}
