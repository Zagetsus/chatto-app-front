import { ProductCart } from './orderProduct';

export interface OrderFreightInterface {
  sender: string;
  address: string;
  freight: FreightInterface[];
  products: ProductCart[];
}

export interface FreightInterface {
  name: string;
  deadline: string;
  icon?: string;
  value: string;
  checked?: boolean;
}
