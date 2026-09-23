const aboutButton = document.getElementById("about-btn");
const aboutSection = document.getElementById("about");

aboutButton.addEventListener("click", function () {
    aboutSection.scrollIntoView({
        behavior: "smooth"
    });
});