export const category = [0, 1, 2, 3, 4, 5] as const;

export const sortItemUrlArr = ["title", "price", "rating"] as const;

export const sortOrderArr = ["desc", "asc"] as const;

export const pizzasArr = ["тонкое", "традиционное"] as const;

export const sortItemArr = ["алфавиту", "цене", "рейтингу"] as const;

export const sizeArr = [26, 30, 40] as const;

export type PizzaType = {
  id: number;
  imageUrl: string;
  types: number[];
  sizes: number[];
  category: number;
  title: string;
  price: number;
  rating: number;
};

export type PizzaTypeInBasket = {
  imageUrl: string;
  title: string;
  price: number;
  count: number;
  sortValue: SortValueType;
};

export type SortValueType = {
  type: string;
  size: number;
  id: number;
};
