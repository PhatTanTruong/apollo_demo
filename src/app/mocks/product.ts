export interface ProductModel {
  id: string;
  name: string;
  description: string;
  price: number;
  amount: number;
}

export const MenuProduct: ProductModel[] = [
  {
    id: 'p1',
    name: 'A Book',
    description: 'A great book for rainy day',
    price: 4.25,
    amount: 1,
  },
  {
    id: 'p2',
    name: 'A Phone',
    description: 'It is your whole life!',
    price: 249.99,
    amount: 1,
  },
  {
    id: 'p3',
    name: 'A Bike',
    description: 'Look nice and cheap',
    price: 150.0,
    amount: 1,
  },
  {
    id: 'p4',
    name: 'A Laptop',
    description: 'Make your work fluency',
    price: 4.25,
    amount: 1,
  },
];
