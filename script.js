function enableDarkMode() {
    let main_body = document.body;
    main_body.classList.toggle("light-mode");

    // Check if checkbox is checked or not
    if (document.getElementById('checkitem').checked) {
        console.log("checked");
    } else {
        console.log("NOT checked");
    }


}