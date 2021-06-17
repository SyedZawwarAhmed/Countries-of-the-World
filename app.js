const root = document.querySelector(":root"),
  main = document.getElementById("main"),
  theme = document.getElementById("theme"),
  searchBar = document.getElementById("search-bar"),
  countryName = document.getElementsByClassName("country-name"),
  moon = document.getElementById("moon"),
  searchIcon = document.getElementById("search-icon"),
  search = document.getElementById("search"),
  countryContainer = document.getElementsByClassName("country");

let countries = [];

fetch("https://restcountries.eu/rest/v2/all")
  .then((res) => res.json())
  .then((data) => {
    // countries = data;
    search.addEventListener("input", () => {
      // countries.forEach((country, j) => {
      //   if (country.name.toLowerCase().includes(search.value.toLowerCase()) === false) {
      //     countryContainer[j].style.display = "none";
      //   } else {
      //     countryContainer[j].style.display= "unset";
      //   }
      // });

      countries = data.filter(country => {
        if (country.name.toLowerCase().includes(search.value.toLowerCase())) {
          return country;
        }
      })
    });
    countries.forEach((country) => {
      main.innerHTML += `<div class="country"><div class="flag-container"><img class="flag" src=${country.flag}></div><div class="country-details"><h2 class="country-name">${country.name}</h2><span><strong>Population: </strong>${country.population}</span><br><span><strong>Region: </strong>${country.region}</span><br><span><strong>Capital: </strong>${country.capital}</span></div></div>`;
    });
  });

let mode = localStorage.getItem("mode");

let darkModeEnabled = false;
theme.addEventListener("click", () => {
  if (darkModeEnabled) {
    localStorage.setItem("mode", "light");
    darkModeEnabled = false;
  } else {
    localStorage.setItem("mode", "dark");
    darkModeEnabled = true;
  }
  mode = localStorage.getItem("mode");
  changeTheme();
});

function changeTheme() {
  if (mode === "dark") {
    root.style.setProperty("--bg", "#202c37");
    root.style.setProperty("--text", "#ffffff");
    root.style.setProperty("--lbg", "#2b3945");
    moon.src = "icons/moon-solid.svg";
    searchIcon.src = "icons/search-regular.svg";
  } else {
    root.style.setProperty("--bg", "#fafafa");
    root.style.setProperty("--text", "#111517");
    root.style.setProperty("--lbg", "#ffffff");
    moon.src = "icons/moon-regular.svg";
    searchIcon.src = "icons/search-solid.svg";
  }
}

changeTheme();