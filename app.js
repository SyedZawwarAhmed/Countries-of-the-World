const root = document.querySelector(":root"),
  main = document.getElementById("main"),
  theme = document.getElementById("theme"),
  searchBar = document.getElementById("search-bar");

fetch("https://restcountries.eu/rest/v2/all")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((country) => {
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
    // root.style.setProperty("--bg", "#202c37");
    theme.innerHTML = '<img class="moon" src="icons/moon-solid.svg" alt="" /><span>Dark Mode</span>';
    searchBar.innerHTML = '<img class="search-icon" src="icons/search-regular.svg" alt="" /><input class="search" type="text" placeholder="Search for a country..."/>'
  }
  else {
    root.style.setProperty("--bg", "#fafafa");
    root.style.setProperty("--text", "#111517");
    root.style.setProperty("--lbg", "#ffffff");
    // root.style.setProperty("--bg", "#fafafa");
    theme.innerHTML = '<img class="moon" src="icons/moon-regular.svg" alt="" /><span>Dark Mode</span>';
    searchBar.innerHTML = '<img class="search-icon" src="icons/search-solid.svg" alt="" /><input class="search" type="text" placeholder="Search for a country..."/>'
  }  
}

changeTheme();