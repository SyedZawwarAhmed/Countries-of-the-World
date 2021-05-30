const flag = document.getElementById("flag"),name = document.getElementById("name");

fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => {
    for (let i=0; i<data.length; i++) {
        flag.innerHTML += `<h1>${data[i].name}</h1><img src=${data[i].flag} style="width: 20rem">`;
    }
})