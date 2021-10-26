import { Image } from '../components/ProductImagesContainer';
import { ColorInterface } from '../pages/Product/interfaces';

export interface ProductOrders {
  isFavorite?: number;
  id?: string;
  favoriteId?: string;
  mainImage?: string;
  image?: string;
  store: string;
  name: string;
  size: string;
  color: string;
  sku: string;
  value: string;
  amount: number;
  subtotal: string;
  price?: string;
  originalPrice?: string;
  devolution?: 0 | 1 | 2;
  selloffPercentage?: number;
  paymentCondition?: string;
  sellerProfileUrl?: string;
  productSlug?: string;
  supplier?: string;
  seller?: string;
  selloffStatus?: string;
  newReleaseStatus?: string;
  reference?: string;
  description?: string;
  images?: Image[];
  colors?: ColorInterface[];
}

export interface ProductCart {
  cartProductId: number;
  variantId: number;
  price: string;
  image: string;
  store: string;
  name: string;
  sizeName: string;
  colorName: string;
  sku: string;
  value: string;
  quantity: number;
  supplier: string;
  seller: string;
}

interface AddressInterface {
  street: string;
  streetNumber: number;
  complement: string;
  district: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface BrandCartInterface {
  id: number;
  name: string;
  weight: number;
  packVolume: number;
  address: AddressInterface;
  products: ProductCart[];
}
