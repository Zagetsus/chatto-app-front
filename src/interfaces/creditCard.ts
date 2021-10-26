export interface CreditCard {
    cardNumber: string;
    expirationDate: string;
    securityCode: string;
}

export interface CardInterface {
  id: string;
  number: string;
  brand: string|null;
  expirationMonth: string;
  expirationYear: string;
  main?: number;
}

export interface CardSaveInterface{
  hash: string | number;
  last4Digits: string;
  brand: string;
  brandName: string;
  holder: string;
  cpf: string;
  main: number;
  birthDate: string;
  expirationMonth: string;
  expirationYear: string;
  holderPhoneNumber: string;
}

export interface cardTypesInterface {
  [key: string]: string;
}
