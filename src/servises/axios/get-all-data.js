const userData = [
  {
    time: "09.11.2021",
    categories: [
      {
        categoriesName: "Food",
        categoriesItems: [
          {
            name: "meat",
            value: 15,
            currency: "EUR",
          },
          {
            name: "pasta",
            value: 2.54,
            currency: "EUR",
          },
        ],
      },
    ],
  },
];
/*
temporrory desition for mock server part!
*/

const userData2 = {
  time: "09.11.2021",
  categories: [
    {
      id: 1,
      categoriesName: "Food",
      categoriesItems: {
        111: {
          id: 111,
          name: "meat",
          value: 15,
          currency: "EUR",
        },
        222: {
          id: 222,
          name: "pasta",
          value: 2.54,
          currency: "EUR",
        },
      },
    },
  ],
};

export async function getAllData() {
    const result1 = await new Promise((resolve) =>
      setTimeout(() => resolve(userData2), 100)
    );
     return result1
}

