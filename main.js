const moonPath = "M42 71C42 112.421 75 150 75 150C33.5786 150 0 116.421 0 75C0 33.5786 33.5786 0 75 0C75 0 42 29.5786 42 71Z";

const sunPath = "M150 75C150 116.421 116.421 150 75 150C33.5786 150 0 116.421 0 75C0 33.5786 33.5786 0 75 0C116.421 0 150 33.5786 150 75Z";

const darkMode = document.querySelector("#darkMode");
let toggle = false;

// When Sun is clicked

darkMode.addEventListener('click', () => {
    // Use of anime.js

    // Setting up the Timeline
    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    });

    // Adding different Animations to the Timeline
    timeline.add({
            targets: ".sun",
            d: [{ value: toggle ? sunPath : moonPath }]
        })
        .add({
                targets: "#darkMode",
                rotate: toggle ? 0 : 320
            },
            "-= 350")
        .add({
                targets: "section",
                backgroundColor: toggle ? "rgb(255, 255, 255)" : "rgb(22, 22, 22)",
                color: toggle ? "rgb(22, 22, 22)" : "rgb(255, 255, 255)"
            },
            "-= 700");

    // Toggle when Sun is Clicked
    if (!toggle) toggle = true;
    else toggle = false;
});