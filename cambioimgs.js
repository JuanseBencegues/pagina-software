const themeButton = document.getElementById("themeButton");
const body = document.body;


//BUSCAR COMO CAMBIAR IMAGENES Y UBICAR RUTAS


themeButton.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    body.classList.toggle("light-theme");

    // Cambia la imagen del botón basándose en el tema actual
    const currentTheme = body.classList.contains("dark-theme") ? "dark" : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    // Rutas de las imágenes para los temas oscuro y claro
    const moonImagePath = "moon.png";
    const sunImagePath = "sun.png";

    // Crea nuevos elementos de imagen
    const newImage = document.createElement("img");

    // Establece la ruta de la nueva imagen basándose en el nuevo tema
    newImage.src = newTheme === "dark" ? moonImagePath : sunImagePath;
    newImage.alt = newTheme === "dark" ? "Tema Oscuro" : "Tema Claro";

    // Reemplaza el botón actual con el nuevo elemento de imagen
    themeButton.parentNode.replaceChild(newImage, themeButton);

    // Establece el ID y la clase al nuevo botón
    newImage.id = "themeButton";
    newImage.className = "theme-button";

    // Agrega un evento de clic al nuevo botón
    newImage.addEventListener("click", () => {
        body.classList.toggle("dark-theme");
        body.classList.toggle("light-theme");
        // Vuelve a llamar a la función para cambiar el tema cuando se hace clic en el nuevo botón
    });
});