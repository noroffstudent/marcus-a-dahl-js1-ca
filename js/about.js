document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        let heading = document.querySelector(".content h1");
        let paragraphs = document.querySelectorAll("blockquote > p");
        let citation = document.querySelector("p cite");

        // Handle heading text
        heading.innerText = heading.innerText
            .replace(/\sthe\s/g, " replace ")
            .replace(/The\s/g, "Replace ");

        // Handle paragraph texts
        paragraphs.forEach(paragraph => {
            if (!paragraph.contains(citation)) {
                paragraph.innerText = paragraph.innerText
                    .replace(/\sthe\s/g, " replace ")
                    .replace(/The\s/g, "Replace ");
            }
        });
    }, 4000);
});
