// Create your HTML Page via DOM Methods here!
let wrapper = document.body.appendChild(document.createElement("wrapper"));

let h1 = wrapper.appendChild(document.createElement("h1"));
let h2 = wrapper.appendChild(document.createElement("h2"));

let img = wrapper.appendChild(document.createElement('img'));
let caption = wrapper.appendChild(document.createElement('p'))

let ul = wrapper.appendChild(document.createElement('ul'))
let li1 = ul.appendChild(document.createElement('li'))
let li2 = ul.appendChild(document.createElement('li'))
let li3 = ul.appendChild(document.createElement('li'))



h1.innerHTML = "Sag Panner";
h1.style.textAlign = "center"

h2.innerHTML = "delicious";
h2.style.textAlign = "center"

img.src = 'assets/sagPaneer.jpeg'
img.style.width = "400px";
img.style.display = "block"
img.style.margin = "0 auto";


caption.innerHTML = "Look at how delicious this is."
caption.style.textAlign = "center"


ul.innerHTML = "Other good foods";

li1.innerHTML = "Ramen"

