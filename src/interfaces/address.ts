export interface DefaultAddressInterface {
  title?: string;
  receiver?: string;
  street: string;
  number: string;
  adjunct?: string;
  neighborhood: string;
  city: string;
  uf: string;
  zipCode: string;
  main: any;
}

export interface AddressInterface extends DefaultAddressInterface {
  id: number;
}

export type SelectedAddressType = AddressInterface | null;

export interface UseAddressInterface {
  addresses: AddressInterface[];
  getAddresses: (shouldRefresh?: boolean) => void;
  results: number;
  totalPages: number;
  selectedAddress: SelectedAddressType;
  setSelectedAddress: (address: AddressInterface) => void;
}
