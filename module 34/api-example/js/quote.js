const loadQuotes = () => {
  fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuotes(data));
};

const displayQuotes = quotes => {
  const blockQuotes = document.getElementById('quote');
  console.log(quotes);
  blockQuotes.innerText = quotes.quote;
};

loadQuotes();
