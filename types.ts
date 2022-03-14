export interface TopUser {
  unStarUser: (props: User) => void;
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Person {
  blockUser: (id: number) => void;
  unblockUser: (id: number) => void;
  starUser: (props: User) => void;
  unStarUser: (props: User) => void;
  // clearBlocked: () => void;
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface View {
  show: boolean;
  handleClose: () => void;
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Coordinates;
}

export interface Coordinates {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
