export const mapPizzaSize = {
  50: '50г',
  100: '100г',
  500: '500г',
} 

export const mapPizzaType = {
1: '',
}

export const pizzaSizes = Object.entries(mapPizzaSize).map(([value, name]) => ({
  name,
  value,
}));

export const pizzaTypes = Object.entries(mapPizzaType).map(([value, name]) => ({
  name,
  value,
}));

export type PizzaSize = keyof typeof mapPizzaSize;
export type PizzaType = keyof typeof mapPizzaType;
