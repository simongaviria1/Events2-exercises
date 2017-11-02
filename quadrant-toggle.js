document.addEventListener('click', function (event) {
    event.target.style.backgroundColor === "black" ? event.target.style.backgroundColor = "white" : event.target.style.backgroundColor = "black" || event.target.style.backgroundColor === "white" ? event.target.style.backgroundColor = "black" : event.target.style.backgroundColor = "white";
})