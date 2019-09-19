let articles = document.getElementById('articles');
let main = document.getElementById('main');

articles.style.fontSize = "50px";
articles.firstElementChild.style.color = "blue";
articles.lastElementChild.style.color = "blue";
articles.previousElementSibling.style.backgroundColor = "black"

main.children[1].style.textDecoration = "underline"
main.lastElementChild.style.fontSize = "50px";
main.firstElementChild.style.color = "orange";
main.style.fontSize = "40px"