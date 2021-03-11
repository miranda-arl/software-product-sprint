/** Fetches the current data from the server and adds it to the page. */
async function showWelcome() {
  const responseFromServer = await fetch('/hello');
  const textFromResponse = await responseFromServer.text();

  const dateContainer = document.getElementById('hi-container');
  dateContainer.innerText = textFromResponse;
}
