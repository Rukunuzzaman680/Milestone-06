const user = { id: 1, name: 'Rony', job: 'acto' };

// JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
// console.log(stringified);

const shop = {
  owner: 'RONY',
  address: {
    street: 'modern road',
    city: 'rangpur',
    country: 'bd',
  },
  products: ['laptop', 'mic', 'phone', 'keyboard'],
  revenue: 45000,
  isOpen: true,
  isNew: false,
};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);
