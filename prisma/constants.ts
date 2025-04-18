export const categories = [
  {
    name: 'Чіпси',
  },
  {
    name: 'Сухоцвіти',
  },
  {
    name: 'Гарніши',
  },
  {
    name: 'Пудри',
  },
  {
    name: 'Ізомальт',
  },
  {
    name: 'Сиропи',
  },
];

export const _ingredients = [
  {
    name: '',
    price: 179,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
  },
 
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: 'Омлет с ветчиной и грибами',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7970321044479C1D1085457A36EB.webp',
    categoryId: 2,
  },
];
