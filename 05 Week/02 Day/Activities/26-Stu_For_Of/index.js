const songs = document.querySelectorAll('#songs > li')
console.log(songs)

for (const value of songs) {
    value.classList.add('red')
}