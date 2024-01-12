// function multiply(x, y) {
//   console.log('hey');
//   return x * y;
// }

// function square(x) {
//   return multiply(x, x);
// }

// function isRightTriangle(a, b, c) {
//   return square(a) + square(b) > square(c);
// }

// console.log(isRightTriangle(3, 4, 5));

// function test () {
//     console.log()
// }

// LIFO => last in first out => last input, first output

// function test(a ,b) {
//   return a + b;
// }

// const greet = test(1 , 2);

// console.log('before');
// for (let i = 0; i < 100000; i++) {
//   console.log(i);
// }

// console.log('after');

// console.log('before settimeout');
// setTimeout(() => {
//   console.log('inside settimeout');
// }, 1000);

// console.log('after settimeout');

// setTimeout(function first() {
//   //   document.body.style.backgroundColor = 'red';
//   console.log('first');
// }, 1000);
// setTimeout(function second() {
//   //   document.body.style.backgroundColor = 'gray';
//   // throw 'error in second setTimeout '
//   consle.lg('hello');
//   console.log('second');
// }, 2000);

// setTimeout(function third() {
//   console.log('third');
//   //   document.body.style.backgroundColor = 'blue';
// }, 3000);

// console.log('hello')
// cont str = 'dadash'
// console.log('bye')

// const colorChange = (color, delay) => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = color;
//   }, delay);
// };

// colorChange('red', 1000);
// colorChange('blue', 1000);
// colorChange('orange', 1000);

// setTimeout(() => {
//   document.body.style.backgroundColor = 'blue';
//   throw 'an error in first setTimeout';
//   setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//       document.body.style.backgroundColor = 'purple';
//     }, 1000);
//   }, 1000);
// }, 1000);

// let counter = 0;
// const colorChagne = (color, delay, next) => {
//   setTimeout(() => {
//     counter++;
//     document.body.style.backgroundColor = color;

//     if (counter === 2) {
//       throw 'in second timeout';
//     }

//     if (next) {
//       next();
//     }
//   }, delay);
// };

// colorChagne('red', 1000, () => {
//   colorChagne('blue', 1000, () => {
//     colorChagne('orange', 1000);
//   });
// });

// fulfilled => success
// reject  => fail
// pending

//  new Promise((resolve, reject) => {
//   //   resolve('sara sabet bye bedeh');
//   reject('fatemeh halalet nemikonam');
// }).then().catch()

// const p = new Promise((resolve, reject) => {
//   //   resolve('sara sabet bye bedeh');
//   reject('fatemeh halalet nemikonam');
// })
//   .then()
//   .catch();

// p.then((response) => console.log('res', response)).catch((err) =>
//   console.log(err)
// );

// function delayColorChange(color) {
//   return new Promise((resolve, reject) => {
//     const time = Math.random();
//     console.log(time);
//     setTimeout(() => {
//       if (time < 0.8) {
//         document.body.style.backgroundColor = color;
//         resolve(`color of the screen change to ${color}`);
//       }
//       reject('the data rejected');
//     }, 1000);
//   });
// }
// delayColorChange('red')
//   .then((res) => {
//     console.log(res);
//     delayColorChange('blue')
//       .then((res) => {
//         delayColorChange('orange')
//           .then((res) => {
//             console.log(res);
//           })
//           .catch((err) => console.log(err));
//       })
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));

// delayColorChange('red')
//   .then((res) => delayColorChange('blue'))
//   .then((res) => delayColorChange('orange'))
//   .then((res) => delayColorChange('yellow'))
//   .catch((err) => console.log(err));

// function declaration
// async function test () { }

// function expression
// const test = async function () {}

// arrow function

// function delayColorChange(color) {
//   return new Promise((resolve, reject) => {
//     const time = Math.random();
//     console.log(time);
//     setTimeout(() => {
//       if (time < 0.8) {
//         document.body.style.backgroundColor = color;
//         resolve(`color of the screen change to ${color}`);
//       }
//       reject('the data rejected');
//     }, 1000);
//   });
// }
// console.log('hello');
const test = async () => {
  await delayColorChange('red');
  console.log('between hello and world');
  await delayColorChange('blue');
  delayColorChange('purple');
};

// test();
// console.log('world');

// test()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// const fetchData = async () => {
//   //await send request
//   // return data
// };

// const showCard = async () => {
//   const data = await fetchData();
//   data.forEach((item) => {
//     document.body.innerHTML = `

//     <div></div>
//     `;
//   });
// };

// showCard()

// async function greet(name) {
//   try {
//     console.log('hello');
//     //   return `hello ${name}`;
//     consle.log('bye');
//     console.log('world');
//   } catch (error) {
//     // console.log('in catch block', error);
//     alert(error);
//   }
// }

// greet('omid');
// //   .then((res) => console.log(res))
// //   .catch((err) => console.log(err));

function greet(name) {}

greet('dina');
