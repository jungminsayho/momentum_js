const title = document.getElementById('title')
console.dir(title)

function handleTitleClick() {
    title.innerText = "Mouse is here!";
}

title.addEventListener("click", handleTitleClick);  //title.onclick = handleTitleClick;