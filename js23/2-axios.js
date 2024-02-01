// // https://jsonplaceholder.typicode.com/todos
// // axios get
// // https://icanhazdadjoke.com/
// // axios async tryCatch
// // show dadjoke in dom

// // axios
// //   .get("https://jsonplaceholder.typicode.com/todos")
// //   .then((res) => {
// //     console.log(res.data);
// //   })
// //   .catch((e) => {
// //     console.error(e);
// //   });

// const getJoke = async () => {
//   try {
//     const res = await axios.get('https://icanhazdadjoke.com/', {
//       headers: { accept: 'application/json' },
//     });
//     const joke = res.data.joke;
//     return joke;
//   } catch (error) {
//     throw new Error();
//   }
// };
// const btn = document.querySelector('button');
// const list = document.querySelector('#jokes');

// // with async
// // btn.addEventListener("click", async () => {
// //   const joke = await getJoke();
// //   const li = document.createElement("li");
// //   li.textContent = joke;
// //   list.append(li);
// // });

// // without async
// // btn.addEventListener('click', () => {
// //   getJoke().then((joke) => {
// //     const li = document.createElement('li');
// //     li.textContent = joke;
// //     list.append(li);
// //   });
// // });

// axios
//   .get('https://icanhazdadjoke.com/', {
//     headers: {
//       accept: 'application/json',
//     },
//   })
//   .then((res) => console.log(JSON.stringify(res.data)))
//   .catch((err) => console.log(err));

// async function getDataWithAxios() {
//   // const headers = {
//   //   Accept: 'application/json',
//   // };

//   // const res = await axios.get('https://icanhazdadjoke.com/', { headers });
//   // console.log(res);

//   const secondParas = {
//     headers: {
//       Accept: 'application/json',
//     },
//   };

//   const res = await axios.get('https://icanhazdadjoke.com/', secondParas);
//   console.log(res);
// }

// getDataWithAxios();
