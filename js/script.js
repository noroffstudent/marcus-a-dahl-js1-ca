const API = "https://rickandmortyapi.com/api/character/";

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".results");

    fetch(API)
        .then(function (response) {
            return response.json()
        })
        .then(function (payload) {
            document.querySelector(".loader").setAttribute("style", "display: none;")

            for (let i = 0, n = payload.results.length; i < n; i ++) {
                container.appendChild(createColumnCard(payload.results[i]));
            }
        })
        .catch(error => console.error);
});

function createColumnCard(data) {
    /*
    <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="card">
            <img class="image" src="https://via.placeholder.com/300" alt="Character Name">
            <div class="details">
                <h4 class="name">Character Name</h4>
                <p>Type: Type value here</p>
                <p>Episode count: Episode count here</p>
                <a class="btn btn-primary" href="details.html?id=">Details</a>
            </div>
        </div>
    </div>
    */

    // Create elements needed to represent desired HTML
    let column = document.createElement("div");
    let card = document.createElement("div");
    let image = document.createElement("img");
    let text = {
        name: document.createElement("h4"),
        type: document.createElement("p"),
        episodeCount: document.createElement("p")
    };
    let button = document.createElement("a");

    column.setAttribute("class", "col-sm-6 col-md-4 col-lg-3");
    card.setAttribute("class", "card");

    image.setAttribute("class", "image");
    image.setAttribute("src", data.image);
    image.setAttribute("alt", data.name);

    text.name.setAttribute("class", "name");
    text.name.innerText = data.name;
    text.type.innerText = data.name;

    button.setAttribute("class", "btn btn-primary");
    button.setAttribute("href", `details.html?id=${data.id}`);
    button.innerText = "Details";

    // DOM Structure
    card.appendChild(image);
    card.appendChild(text.name);
    card.appendChild(text.type);
    card.appendChild(text.episodeCount);
    card.appendChild(button);

    column.appendChild(card);

    return column;
}