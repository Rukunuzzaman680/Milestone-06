function userLoad() {
  const url = 'https://jsonplaceholder.typicode.com/users';
  fetch(url)
    .then(res => res.json())
    .then(data => displayLoad(data));
}

function displayLoad(data) {
  const ul = document.getElementById('list-items');
  for (const user of data) {
    // console.log(user.name);
    const li = document.createElement('li');
    li.innerText = user.name;
    ul.appendChild(li);
  }
}
// create
function createAPost() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(json => console.log(json));
}

// update
function updateAPost() {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(json => console.log(json));
}

// patching
function patchAPost() {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify({
      title: 'foo',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(json => console.log(json));
}

//  delete
function deleteAPost() {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  });
}
