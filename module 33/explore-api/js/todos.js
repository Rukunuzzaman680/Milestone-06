function todosPost() {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayPosts(data));
}

function displayPosts(data) {
  const todosContainer = document.getElementById('todos-container');
  for (const todos of data) {
    console.log(todos);
    const todosDiv = document.createElement('div');
    todosDiv.innerHTML = `
    <h3>title: ${todos.title}</h3>
  <p>User: ${todos.userId}</p>
  <p>Id: ${todos.id}</p>
  <p>IS completed: ${
    todos.completed === true ? 'completed' : 'not complete'
  }</p>
    `;

    todosContainer.appendChild(todosDiv);
  }
}
todosPost();
