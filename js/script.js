const API = "https://rickandmortyapi.com/api/character";

document.addEventListener("ready", function () {

    // Step 1: Query API and fetch payload data

    // Step 2: Go through each result

    // Step 3: Create elements needed to display the results

    // Step 4: Add these elements to the container which holds all the results
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
    let card = document.createelement("div");
    let image = document.createElement("img");
    let text = {
        name: document.createElement("h4"),
        type: document.createElement("p"),
        episodeCount: document.createElement("p")
    };
    let button = document.createElement("a");

    // DOM Structure
    card.appendChild(image);
    card.appendChild(text.name);
    card.appendChild(text.type);
    card.appendChild(text.episodeCount);
    card.appendChild(button);

    column.appendChild(card);


    return column;
}