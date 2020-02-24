document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        let heading = document.querySelector(".content h1");
        let paragraphs = document.querySelectorAll("blockquote > :not(cite)")

        // Handle heading text
        heading.innerText = heading.innerText
            .replace(/\sthe\s/g, " replace ")
            .replace(/The\s/g, "Replace ");

        // Handle paragraph texts
        paragraphs.forEach(paragraph => {
            paragraph.innerText = paragraph.innerText
                .replace(/\sthe\s/g, " replace ")
                .replace(/The\s/g, "Replace ");
        });
    }, 4000);
});
