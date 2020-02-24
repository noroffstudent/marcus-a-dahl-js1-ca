const API = "https://rickandmortyapi.com/api/character/";

document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(document.location.search);

    if (params.has("id")) {
        let id = params.get("id");

        fetch(`${API}${id}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (payload) {
                document.querySelector(".loader").setAttribute("style", "display: none;");
                
                initializeDetails(payload);
            })
            .catch(function (error) {
                window.location.href = "error.html";
            });
    }
});


function initializeDetails(data) {
    const container = document.querySelector(".detail-container");
    let image = document.createElement("img");

    image.setAttribute("class", "details.image");
    image.setAttribute("src", data.image);
    image.setAttribute("alt", data.name);

    let details = document.createElement("div");
    details.setAttribute("class", "detail-details")

    let name = document.createElement("h1");

    name.innerText = data.name;

    let status = document.createElement("p");
    status.innerHTML = `Status: <span class=\"value\" id=\"status\">${data.status}</span>`;

    let species = document.createElement("p");
    species.innerHTML = `Species: <span class=\"value\" id=\"species\">${data.species}</span>`;

    let origin = document.createElement("p");
    origin.innerHTML = `Origin: <span class=\"value\" id=\"origin\">${data.origin.name}</span>`;

    let location = document.createElement("p");
    location.innerHTML = `Location: <span class=\"value\" id=\"location\">${data.location.name}</span>`;

    details.appendChild(status);
    details.appendChild(species);
    details.appendChild(origin);
    details.appendChild(location);

    container.appendChild(image);
    container.appendChild(details);
}