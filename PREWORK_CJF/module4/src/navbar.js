let home = "<li class='navbar'><a href='index.html'>Home</a></li>";
let discog = "<li class='navbar'><a href='discography.html'>Discography</a></li>";
let concert= "<li class='navbar'><a href='concert.html'>Concert</a></li>";

document.getElementById("navbar").innerHTML = `<ul>${home}${discog}${concert}</ul>`;