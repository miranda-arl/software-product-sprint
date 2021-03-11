/** Fetches stats from the server and adds them to the page. */
async function getServerStats() {
  const responseFromServer = await fetch('/hello');
  // The json() function returns an object that contains fields that we can
  // reference to create HTML.
  const stats = await responseFromServer.json();

  const statsListElement = document.getElementById('hi-container');
  statsListElement.innerHTML = '';

  statsListElement.appendChild(
      createListElement('Color: ' + stats.color));
  statsListElement.appendChild(
      createListElement('Hotsauce: ' + stats.hotSauce));
  statsListElement.appendChild(
      createListElement('Food: ' + stats.food));
  statsListElement.appendChild(
      createListElement('SpicyFact: ' + stats.spicyFact));
    
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}

function addRandomFact() {
 const facts =
      ['My favorite color is royal blue', 'My favorite hot sauce is Tapatio', 'My favorite food is steak burrito', 'I love spicy food'];

  // Pick a random greeting.
  const fact = facts[Math.floor(Math.random() * facts.length)];

  // Add it to the page.
  const factContainer = document.getElementById('fact-container');
  factContainer.innerText = fact;
}