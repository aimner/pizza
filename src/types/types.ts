export const category = [0, 1, 2, 3, 4, 5] as const;

export const sortItemUrlArr = ["title", "price", "rating"] as const;

export const sortOrderArr = ["desc", "asc"] as const;

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
