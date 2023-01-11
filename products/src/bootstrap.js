import faker from 'faker';

let products = '';

for (let i = 0; i < 10; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}

document.querySelector('#dev-products').innerHTML = products;

//sub app execution context
//Context #1:
// file running in development in isolation
// using local index.html file
// which DEFINITELY has an element with an id of 'dev-products' 
// need to immediately render our app into that element 

//Context #2:
// file is running in development or production
// through the CONTAINER app
// no gurantee that an element with an id of 'dev-products' exists  
// we do not want to try to immediately render the app  
