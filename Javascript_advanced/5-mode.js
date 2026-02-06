function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size + "px";
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

function main() {
    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");
    
    // Add paragraph
    const paragraph = document.createElement("p");
    paragraph.textContent = "Welcome Holberton!";
    document.body.appendChild(paragraph);
    
    // Add Spooky button
    const spookyButton = document.createElement("button");
    spookyButton.textContent = "Spooky";
    spookyButton.addEventListener("click", spooky);
    document.body.appendChild(spookyButton);
    
    // Add Dark mode button
    const darkButton = document.createElement("button");
    darkButton.textContent = "Dark mode";
    darkButton.addEventListener("click", darkMode);
    document.body.appendChild(darkButton);
    
    // Add Scream mode button
    const screamButton = document.createElement("button");
    screamButton.textContent = "Scream mode";
    screamButton.addEventListener("click", screamMode);
    document.body.appendChild(screamButton);
}

main();