const loadPhone = async (searchText, dataLimit) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhone(data.data, dataLimit);
};

const displayPhone = (phone, dataLimit) => {
  const phoneContainer = document.getElementById('phone-container');
  phoneContainer.innerText = '';
  // display 10 phone only
  const showAll = document.getElementById('show-all');
  if (dataLimit && phone.length > 10) {
    phone = phone.slice(0, 10);
    showAll.classList.remove('d-none');
  } else {
    showAll.classList.add('d-none');
  }

  // display no phone found
  const noPhone = document.getElementById('no-found-massage');
  if (phone.length === 0) {
    noPhone.classList.remove('d-none');
  } else {
    noPhone.classList.add('d-none');
  }

  // all phone
  phone.forEach(phone => {
    console.log(phone);
    const phoneDiv = document.createElement('div');
    phoneDiv.classList.add('col');
    phoneDiv.innerHTML = `
    <div class="card p-5">
      <img src="${phone.image}" class="card-img-top height:50%" alt="...">
      <div class="card-body">
           <h5 class="card-title">${phone.phone_name}</h5>
           <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
          content. This content is a little bit longer.</p>
          <button onclick="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailsModal">Show Details</button>
      </div>
    </div>
    `;
    phoneContainer.appendChild(phoneDiv);
  });
  // stop spinner loader
  toggleSpinner(false);
};

const processSearch = dataLimit => {
  toggleSpinner(true);
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  loadPhone(searchText, dataLimit);
};

// handle search button clicked
document.getElementById('btn-search').addEventListener('click', function () {
  // start loader
  processSearch(10);
});

// search input field enter key handler
document
  .getElementById('search-field')
  .addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      processSearch(10);
    }
  });

const toggleSpinner = isLoading => {
  const loadingSection = document.getElementById('loader');
  if (isLoading) {
    loadingSection.classList.remove('d-none');
  } else {
    loadingSection.classList.add('d-none');
  }
};

// not the best way to show all
document.getElementById('btn-show-all').addEventListener('click', function () {
  processSearch();
});

// show phone details
const loadPhoneDetails = async id => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  modalPhoneDetails(data);
};

const modalPhoneDetails = phone => {
  console.log(phone);
  const modalTitle = document.getElementById('phoneDetailsModalLabel');
  modalTitle.innerText = phone.data.name;

  const phoneDetails = document.getElementById('phone-details');
  phoneDetails.innerHTML = `
  <p>Release Date: ${
    phone.data.releaseDate ? phone.data.releaseDate : 'No release date found'
  }</p>
  <p>Storage: ${
    phone.data.mainFeatures
      ? phone.data.mainFeatures.storage
      : 'No storage information'
  }</p>
  <p>Others: ${
    phone.data.others ? phone.data.others.Bluetooth : 'No bluetooth information'
  }</p>
  `;
};

loadPhone();
