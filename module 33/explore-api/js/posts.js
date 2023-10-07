function loadPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data));
}
/**
 * 1. get the container element where you want you to add the new elements
 * 2. create child element
 * 3. set innerText or innerHTLM
 * 4. appendChild
 *
 */

function displayPosts(posts) {
  const postContainer = document.getElementById('posts-container');
  for (const post of posts) {
    console.log(post);
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.innerHTML = `
    <h3>User- ${post.userId}</h3>
    <h4>id: ${post.id}</h4>
    <h5>Post: ${post.title}</h5>
    <p>Post Description: ${post.body}</p>
    `;
    postContainer.appendChild(postDiv);
  }
}

loadPosts();
