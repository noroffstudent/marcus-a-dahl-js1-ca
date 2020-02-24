const API = "https://rickandmortyapi.com/api/character/";

document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(document.location.search);

    if (params.has("id")) {
        let id = params.get("id");

        fetch(`${API}id`)
            .then(function (response) {
                return response.json();
            })
            .then(function (payload) {
                document.querySelector(".loader").setAttribute("style", "display: none;");

                // document.querySelector(".detail-container").appendChild(createDetails(payload))
            })
            .catch(function (error) {
                window.location.href = "error.html";
            });
    }
});