// const productSection = document.querySelector('.products');
// console.log(productSection);
// window.addEventListener('DOMContentLoaded', async (e) => {
//   const res = await fetch('http://localhost:3000/product');
//   const products = await res.json();

//   let template = '';
//   products.forEach((product) => {
//     template += `
//         <div class="col">
//           <div class="card" style="width: 18rem;">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZNIpXj7OPolk69NoNREhMM2Um99PBMhMMw&usqp=CAU" class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">${product.title}</h5>
//               <p class="card-text">${product.description}</p>
//               <div class="d-flex justify-content-evenly align-items-center">
//               <a href="#" class="btn btn-primary">Go somewhere</a>
//               <span>${product.price}$</span>
//               </div>
//               </div>
//           </div>
//         </div>
//     `;
//   });

//   productSection.innerHTML = template;
// });
