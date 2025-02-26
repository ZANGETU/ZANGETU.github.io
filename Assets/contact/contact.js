document.addEventListener("DOMContentLoaded", () => {
    const background = document.querySelector(".background");
    const starContainer = document.createElement("div");
    starContainer.classList.add("stars-container");
    background.appendChild(starContainer);
    const starCount = 100;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        star.style.left = `${x}vw`;
        star.style.top = `${y}vh`;
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        const brightness = Math.random() * 0.4 + 0.1;
        star.style.opacity = brightness;
        starContainer.appendChild(star);
    }
});
