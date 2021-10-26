export interface ProductInterface {
  availableQuantity?: number,
  cartId?: number,
  cartProductId?: number,
  colorName?: string,
  customerId?: number | null,
  image?: string,
  originalPrice?: string | null,
  price?: string,
  productId?: number,
  productName?: string,
  productReference?: string,
  quantity?: number,
  seller?: string,
  sellerId?: number,
  selloffPercentage?: number,
  selloffStatus?: number,
  sizeName?: string,
  sku?: string,
  supplier?: string,
  supplierId?: number,
  userId?: number | null,
  variantId?: number,
};

export interface CartData {
  discount: string;
  products: Array<ProductInterface>;
  total: string;
  totalValue: number;
  totalWithDiscount: string;
}