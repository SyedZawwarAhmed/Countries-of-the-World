const main = document.getElementById("main");

fetch("https://restcountries.eu/rest/v2/all")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((country) => {
      main.innerHTML += `<div class="country"><div class="flag-container"><img class="flag" src=${country.flag}></div><div class="country-details"><h2 class="country-name">${country.name}</h2><span><strong>Population: </strong>${country.population}</span><br><span><strong>Region: </strong>${country.region}</span><br><span><strong>Capital: </strong>${country.capital}</span></div></div>`;
    });
  });
