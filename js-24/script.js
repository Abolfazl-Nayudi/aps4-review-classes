// const arr = [1, 2, 3];
// arr.push;
// arr.pop;
// console.log(arr);

// const obj = { name: 'abolfazl' };
// obj prototype => main Object prototype
// console.log(obj);
////////////////////////////

// console.log(Array.prototype);
// Array prototype => Object copy prototype => main Object prototype

/////////////////////
const arr = [1, 2, 3];
//  Array copy prototype => Object copy prototype =>  Array prototype => Object copy prototype => main Object prototype

// console.log(arr);
///////////////////////////

const names = ['zahra', 'morteza', 'dina'];

// names.__proto__.sing = function () {
//   return 'singing';
// };

// Array.prototype.walk = function () {
//   return 'walking';
// };

// console.log(names);

// const secondArray = [2, 3, 4];
// console.log(secondArray);

// console.log(names.__proto__ === Array.prototype);

// const str = 'hello';
// str.__proto__.toUpperCase = function () {
//   return 'bye bedeh';
// };
// console.log(str.toUpperCase());

const user = 'jasem';

// function hi () {
// }

// function bye(){}

// function middleOfHiAndBye(){}

// const person = {
//   user: 'jasem',
//   hi() {
//     this.user;
//   },
//   bye() {},
//   middleOfHiAndBye() {},
// };
// console.log(person);

// 4 pillars
// encapsulation
// ....

// function createUser(username, password) {
//   const user = {};
//   user.username = username;
//   user.password = password;
//   user.isLoggedIn = false;
//   user.login = function () {
//     this.isLoggedIn = true;
//   };

//   user.logout = function () {
//     this.isLoggedIn = false;
//   };

//   return user;
// }

// const firstUser = createUser('amin', '1234');

// firstUser.login();
// firstUser.logout();

// console.log(firstUser);

////////////////////
// second example of factory function

function createProduct(productName, price, description) {
  const product = {
    productName,
    price,
    description,
  };

  product.sale = function (percentage) {
    this.price = this.price - this.price * (percentage / 100);
  };

  return product;
}

const shoes = createProduct('shoes', 240, 'best shoes ever');

shoes.sale(20);
console.log(shoes);

const shirt = createProduct('shirt', 66, 'best shirt ever');

shirt.sale(66);
console.log(shirt);
// ///////////////////////////

function createRectangle(width, height) {
  const rectangle = {};
  rectangle.width = width;
  rectangle.height = height;

  rectangle.getArea = function () {
    return this.width * this.height;
  };

  return rectangle;
}

const firstRect = createRectangle(10, 20);
console.log(firstRect);
console.log(firstRect.getArea());
