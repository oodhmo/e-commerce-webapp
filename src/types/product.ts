import type { TImagePairList } from '@/types/image';

type InfoKeys =
  | 'id'
  | 'name'
  | 'description'
  | 'price'
  | 'discount'
  | 'original_price'
  | 'gender';

type ImageKey = 'image_pair';

export type TProductInfo = {
  [K in InfoKeys]: string;
} & {
  [K in ImageKey]: TImagePairList;
};
