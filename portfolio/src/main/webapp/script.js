// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random fact to the page.
 */
function addRandomFact() {
  const facts =
      ['My favorite color is royal blue', 'My favorite hot sauce is Tapatio', 'My favorite food is steak burrito', 'I love spicy food', 'I am the only daughter out of 3'];

  // Pick a random greeting.
  const fact = facts[Math.floor(Math.random() * facts.length)];

  // Add it to the page.
  const factContainer = document.getElementById('fact-container');
  factContainer.innerText = fact;
}

function randomizeImage() {
  // The images directory contains 2 images, so generate a random index between
  // 1 and 2.
  const imageIndex = Math.floor(Math.random() * 2) + 1;
  const imgUrl = '/images/IMG_' + imageIndex + '.jpg';
  const imgElement = document.createElement('img');
  imgElement.src = imgUrl;
  imgElement.width = "300" 
  imgElement.height = "300";
  const imageContainer = document.getElementById('random-image-container');

  // Remove the previous image.
  imageContainer.innerHTML = '';
  imageContainer.appendChild(imgElement);
}
