import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 10; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

//sub app execution context
//Context / Situation #1:
// file running in development in isolation
// using local index.html file
// which DEFINITELY has an element with an id of 'dev-products'
// need to immediately render our app into that element
if (process.env.NODE_ENV === 'development') {
  // assuming our container doesn't have an element
  // with id 'dev-products'
  const el = document.querySelector('#dev-products');
  if (el) {
    //probably running in isolation
    mount(el);
  }
}

//Context / Situation #2:
// file is running in development or production
// through the CONTAINER app
// no gurantee that an element with an id of 'dev-products' exists
// we do not want to try to immediately render the app
export { mount }; // for container app
