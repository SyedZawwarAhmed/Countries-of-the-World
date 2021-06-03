const flag = document.getElementById("flag"),
  name = document.getElementById("name");

fetch("https://restcountries.eu/rest/v2/all")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((country) => {
      flag.innerHTML += `<div style="background: #fff; width: 20rem;"><img src=${country.flag} style="width: 20rem; height: 12rem; object-fit: cover"><h1>${country.name}</h1><strong>Population: </strong><span>${country.population}</span><br><strong>Region: </strong><span>${country.region}</span><br><strong>Capital: </strong><span>${country.capital}</span></div>`;
    });
  });
