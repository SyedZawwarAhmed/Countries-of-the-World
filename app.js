const main = document.getElementById("main");

fetch("https://restcountries.eu/rest/v2/all")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((country) => {
      main.innerHTML += `<div class="country"><img class="flag" src=${country.flag}><h1>${country.name}</h1><strong>Population: </strong><span>${country.population}</span><br><strong>Region: </strong><span>${country.region}</span><br><strong>Capital: </strong><span>${country.capital}</span></div>`;
    });
  });
