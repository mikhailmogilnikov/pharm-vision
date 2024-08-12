const test1 = [
  {
    id: 1,
    name: 'Нурофен',
    price: 2200,
    cashback: 200,
    number: 24342424234,
    date: '2024-08-09T13:50:32.060Z',
    img: '/nurofen_logo.png',
  },
  {
    id: 2,
    name: 'Терафлю',
    price: 3200,
    cashback: 300,
    number: 2423442234,
    date: '2024-08-08T13:50:32.060Z',
    img: '/theraflu_logo.png',
  },
];

const res1 = [
  {
    date: '2024-08-09T13:50:32.060Z',
    receipts: [
      {
        id: 1,
        name: 'Нурофен',
        price: 2200,
        cashback: 200,
        number: 24342424234,
        date: '2024-08-09T13:50:32.060Z',
        img: '/nurofen_logo.png',
      },
    ],
  },
  {
    date: '2024-08-08T13:50:32.060Z',
    receipts: [
      {
        id: 2,
        name: 'Терафлю',
        price: 3200,
        cashback: 300,
        number: 2423442234,
        date: '2024-08-08T13:50:32.060Z',
        img: '/theraflu_logo.png',
      },
    ],
  },
];

const test2 = [
  {
    id: 1,
    name: 'Нурофен',
    price: 2200,
    cashback: 200,
    number: 24342424234,
    date: '2024-08-08T13:50:32.060Z',
    img: '/nurofen_logo.png',
  },
  {
    id: 2,
    name: 'Терафлю',
    price: 3200,
    cashback: 300,
    number: 2423442234,
    date: '2024-08-09T13:50:32.060Z',
    img: '/theraflu_logo.png',
  },
  {
    id: 3,
    name: 'Терафлю',
    price: 3200,
    cashback: 300,
    number: 2423442234,
    date: '2024-08-08T14:50:32.060Z',
    img: '/theraflu_logo.png',
  },
];

const res2 = [
  {
    date: '2024-08-09T13:50:32.060Z',
    receipts: [
      {
        id: 2,
        name: 'Терафлю',
        price: 3200,
        cashback: 300,
        number: 2423442234,
        date: '2024-08-09T13:50:32.060Z',
        img: '/theraflu_logo.png',
      },
    ],
  },
  {
    date: '2024-08-08T14:50:32.060Z',
    receipts: [
      {
        id: 3,
        name: 'Терафлю',
        price: 3200,
        cashback: 300,
        number: 2423442234,
        date: '2024-08-08T14:50:32.060Z',
        img: '/theraflu_logo.png',
      },
      {
        id: 1,
        name: 'Нурофен',
        price: 2200,
        cashback: 200,
        number: 24342424234,
        date: '2024-08-08T13:50:32.060Z',
        img: '/nurofen_logo.png',
      },
    ],
  },
];

const res3 = [
  {
    date: '2024-08-08T13:50:32.060Z',
    receipts: [
      {
        id: 2,
        name: 'Терафлю',
        price: 3200,
        cashback: 300,
        number: 2423442234,
        date: '2024-08-08T13:50:32.060Z',
        img: '/theraflu_logo.png',
      },
    ],
  },
  {
    date: '2024-08-09T13:50:32.060Z',
    receipts: [
      {
        id: 1,
        name: 'Нурофен',
        price: 2200,
        cashback: 200,
        number: 24342424234,
        date: '2024-08-09T13:50:32.060Z',
        img: '/nurofen_logo.png',
      },
    ],
  },
];

const res4 = [
  {
    date: '2024-08-09T13:50:32.060Z',
    receipts: [
      {
        id: 2,
        name: 'Терафлю',
        price: 3200,
        cashback: 300,
        number: 2423442234,
        date: '2024-08-09T13:50:32.060Z',
        img: '/theraflu_logo.png',
      },
    ],
  },
  {
    date: '2024-08-08T13:50:32.060Z',
    receipts: [
      {
        id: 1,
        name: 'Нурофен',
        price: 2200,
        cashback: 200,
        number: 24342424234,
        date: '2024-08-08T13:50:32.060Z',
        img: '/nurofen_logo.png',
      },
      {
        id: 3,
        name: 'Терафлю',
        price: 3200,
        cashback: 300,
        number: 2423442234,
        date: '2024-08-08T14:50:32.060Z',
        img: '/theraflu_logo.png',
      },
    ],
  },
];

export const ReceiptsFixtures = {
  correct: {
    test1,
    test2,
    res1,
    res2,
  },
  incorrect: {
    test1,
    test2,
    res3,
    res4,
  },
};
