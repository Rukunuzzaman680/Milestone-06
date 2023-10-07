const users = [
  {
    id: 1,
    name: 'RONY',
    job: 'developer',
  },
  {
    id: 2,
    name: 'Ahmed',
    job: 'web developer',
  },
];
// console.log(users[0].job);

const data = {
  count: 5000,
  data: [
    { id: 1, name: 'Rony', job: 'web' },
    { id: 2, name: 'Ahmed', job: 'design' },
  ],
};
// console.log(data.data[0].name);

const user = {
  id: 424,
  name: 'Rony Ahmed',
  address: {
    street: {
      first: '35/A Nilkhet Mor',
      second: 'third floor',
      third: 'right side',
    },
    postOffice: 'cantonment',
    city: 'Dhaka',
  },
};
// console.log(user.address.street.second);
console.log(user.address.stree?.third);
