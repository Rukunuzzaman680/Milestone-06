const allCountries = () => {
  fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
};

const displayCountries = countries => {
  const countriesContainer = document.getElementById('all-countries');

  // console.log(countries);
  // for (const country of countries) {
  //   console.log(country.name);
  // }

  // forEach and for loop is same
  countries.forEach(country => {
    console.log(country.cca2);
    const countryDiv = document.createElement('div');
    countryDiv.classList.add('country');
    countryDiv.innerHTML = `
    <h3>Name: ${country.name.common}</h3>
    <p>Capital: ${country.capital ? country.capital[0] : 'no capital'}</p>
    <button onclick= "countryDetails('${country.cca2}')">Details</button>
    `;
    countriesContainer.appendChild(countryDiv);
  });
};
const countryDetails = code => {
  const url = `https://restcountries.com/v3.1/alpha/${code}
`;
  // console.log(url);
  fetch(url)
    .then(res => res.json())
    .then(data => showCountryDetails(data[0]));
};

const showCountryDetails = country => {
  console.log(country);
  const detailsContainer = document.getElementById('country-details');
  detailsContainer.innerHTML = `
  <h3>Name: ${country.name.common}</h3>
  <img src = "${country.flags.png}">
  `;
};

allCountries();
