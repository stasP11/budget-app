/*
temporrory desition for mock server part!
*/

//setap value for local host

function generateID() {
  return Math.floor(Math.random() * 1000);
}

const userData2 = {
  time: "09.11.2021",
  categories: [
    {
      id: 1,
      categoryName: "Food",
      categoryItems: {
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
    {
      id: 2,
      categoryName: "Transport",
      categoryItems: {
        1112: {
          id: 1112,
          name: "taxi",
          value: 15,
          currency: "EUR",
        },
        2222: {
          id: 2222,
          name: "train",
          value: 2.54,
          currency: "EUR",
        },
      },
    },
  ],
};

// localStorage.setItem("user1", JSON.stringify(userData2));

class UserData {
  constructor() {}

  // shoud be removed lately
  setDataInLS(userId) {
    localStorage.setItem(userId, JSON.stringify(userData2));
  }

  async getUserData(userId) {
    const result = await new Promise((resolve) =>
      setTimeout(() => resolve(JSON.parse(localStorage.getItem(userId))), 100)
    );
    return result;
  }

  async updateUserData(user) {
    const { categoryName } = user;
    const result = await new Promise((resolve) =>
      setTimeout(() => resolve(JSON.parse(localStorage.getItem("user1"))), 100)
    );
    result.categories.map((obj) => {
      let { categoryItems } = obj;
      if (obj.categoryName === categoryName) {
        for (let categoryId in categoryItems) {
          categoryItems[categoryId] = {
            ...categoryItems[categoryId],
            ...user[categoryId],
          };
        }
      }
    });
    localStorage.setItem("user1", JSON.stringify(result));
    return result;
  }

  async updateUserData2(value) {
    const result = await new Promise((resolve) =>
      setTimeout(() => resolve(JSON.parse(localStorage.getItem("user1"))), 100)
    );

    //console.log(JSON.stringify(result), 'console.log(JSON.stringify(result));');
    // console.log(JSON.stringify(value), 'JSON.stringify(value)');

    function result2() {
      let cat = result.categories;
      cat.forEach(({ id, categoryItems }) => {
        if (id == value.id) {
          value.itemsState.forEach((obj) => {
            categoryItems[obj.id] = obj;
          });
        }
      });
    }

    result2();
    localStorage.setItem("user1", JSON.stringify(result));
    return result;
  }

  async addNewData(userData) {
    const { categoryName, name, value } = userData;
    const result = await new Promise((resolve) =>
      setTimeout(() => resolve(JSON.parse(localStorage.getItem("user1"))), 100)
    );

    result.categories.map((obj) => {
      if (obj?.categoryName === categoryName) {
        const id = generateID();
        obj.categoryItems = {
          ...obj.categoryItems,
          [id]: { id, name, value, currency: "EUR" },
        };
      }
    });

    localStorage.setItem("user1", JSON.stringify(result));
    return result;
  }
  async addNewData2(userData) {
    const {id, itemData} = userData
    const result = await new Promise((resolve) =>
      setTimeout(() => resolve(JSON.parse(localStorage.getItem("user1"))), 100)
    );
    
    result.categories.map((obj) => {
      if (obj?.id == id) {
        obj.categoryItems = {
          ...obj.categoryItems,
          [itemData.id]: { ...itemData },
        };
      }
    });


    localStorage.setItem("user1", JSON.stringify(result));
    return result;
    
  }
}

export const allUserData = new UserData();
