const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];

  for (let i = 0; i < towns.length; i++ ) {

        let card = document.createElement('section');
        let text = document.createElement('div');
        let image = document.createElement('img');
        let name = document.createElement('h2');
        let motto = document.createElement('h4');
        let yearFounded = document.createElement('p');
        let currentPopulation = document.createElement('p');
        let averageRainfall = document.createElement('p');

        name.textContent = towns[i].name
        motto.textContent = ' ' + towns[i].motto;
        yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
        currentPopulation.textContent = 'Current Population: ' + towns[i].currentPopulation;
        averageRainfall.textContent = 'Averge Rain Fall: ' + towns[i].averageRainfall;

        card.appendChild(image);
        text.appendChild(name);
        text.appendChild(motto);
        text.appendChild(yearFounded);
        text.appendChild(currentPopulation);
        text.appendChild(averageRainfall);
        card.appendChild(text);

        document.querySelector('div.cards').appendChild(card);
        image.setAttribute('src', 'images/' + towns[i].photo);
    }
  });