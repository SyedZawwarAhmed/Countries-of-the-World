const root = document.querySelector(":root"),
  body = document.querySelector("body"),
  home = document.getElementById("home"),
  main = document.getElementById("main"),
  theme = document.getElementById("theme"),
  searchBar = document.getElementById("search-bar"),
  countryName = document.getElementsByClassName("country-name"),
  moon = document.getElementById("moon"),
  menu = document.getElementById("menu"),
  searchIcon = document.getElementById("search-icon"),
  search = document.getElementById("search"),
  filter = document.getElementById("filter"),
  countryContainer = document.getElementsByClassName("country"),
  options = document.querySelector(".options"),
  regions = document.getElementsByClassName("region"),
  countryPage = document.getElementById("country-page"),
  backBtn = document.getElementById("back-btn"),
  arrow = document.getElementById("arrow");

const bigFlag = document.getElementById("big-flag"),
  cn = document.getElementById("cn"),
  col1Span = document.getElementsByClassName("col-1-span"),
  col2Span = document.getElementsByClassName("col-2-span");

let countries = [];

fetch("https://restcountries.eu/rest/v2/all")
  .then((res) => res.json())
  .then((data) => {
    countries = data;
    countries.forEach((country) => {
      main.innerHTML += `<div class="country" onclick="displayCountry({flag:'${country.flag}', name:'${country.name}', nativeName:'${country.nativeName}', population:'${country.population}', region:'${country.region}', subregion:'${country.subregion}', capital:'${country.capital}', topLevelDomain:'${country.topleveldomain}', currencies:'${country.currencies}', languages:'${country.languages}'})"><div class="flag-container"><img class="flag" src=${country.flag}></div><div class="country-details"><h2 class="country-name">${country.name}</h2><span><strong>Population: </strong>${country.population}</span><br><span><strong>Region: </strong>${country.region}</span><br><span><strong>Capital: </strong>${country.capital}</span></div></div>`;
    });
    search.addEventListener("input", () => {
      countries.forEach((country, j) => {
        if (!country.name.toLowerCase().includes(search.value.toLowerCase())) {
          countryContainer[j].style.display = "none";
        } else {
          countryContainer[j].style.display = "unset";
        }
      });
    });
    for (let i = 0; i < regions.length; i++) {
      const reg = regions[i];
      reg.addEventListener("click", () => {
        countries.forEach((country, j) => {
          if (reg.getAttribute("data-value").toLowerCase() === "all") {
            countries.forEach((country, j) => {
              countryContainer[j].style.display = "unset";
            });
          } else if (
            country.region.toLowerCase() !==
            reg.getAttribute("data-value").toLowerCase()
          ) {
            countryContainer[j].style.display = "none";
          } else {
            countryContainer[j].style.display = "unset";
          }
        });
      });
    }
  });

let mode = localStorage.getItem("mode");

theme.addEventListener("click", () => {
  if (mode === "dark") {
    localStorage.setItem("mode", "light");
  } else {
    localStorage.setItem("mode", "dark");
  }
  mode = localStorage.getItem("mode");
  changeTheme();
});

function changeTheme() {
  if (mode === "dark") {
    root.style.setProperty("--bg", "#202c37");
    root.style.setProperty("--text", "#ffffff");
    root.style.setProperty("--lbg", "#2b3945");
    moon.src = "icons/moon-regular.svg";
    searchIcon.src = "icons/search-regular.svg";
    arrow.src = "icons/arrow-left-regular.svg";
  } else {
    root.style.setProperty("--bg", "#fafafa");
    root.style.setProperty("--text", "#111517");
    root.style.setProperty("--lbg", "#ffffff");
    moon.src = "icons/moon-solid.svg";
    searchIcon.src = "icons/search-solid.svg";
    arrow.src = "icons/arrow-left-solid.svg";
  }
}

function displayCountry(country) {
  countryPage.style.transform = "translateX(0)";
  body.style.overflowY = "hidden";

  bigFlag.src = country.flag;
  cn.innerText = country.name;
  col1Span[0].innerText += " " + country.nativeName;
  col1Span[1].innerText += " " + country.population;
  col1Span[2].innerText += " " + country.region;
  col1Span[3].innerText += " " + country.subregion;
  col1Span[4].innerText += " " + country.capital;

  col2Span[0].innerText += " " + country.topleveldomain;
}

filter.addEventListener("click", () => {
  options.classList.toggle("options-opened");
});

backBtn.addEventListener("click", () => {
  body.style.overflowY = "scroll";
  countryPage.style.transform = "translateX(100%)";
});

changeTheme();

document.addEventListener(
  "mousedown",
  (e) => {
    if (e.detail > 1) {
      e.preventDefault();
    }
  },
  false
);

theme.addEventListener(
  "mousedown",
  (e) => {
    e.preventDefault();
  },
  false
);

filter.addEventListener(
  "mousedown",
  (e) => {
    e.preventDefault();
  },
  false
);
