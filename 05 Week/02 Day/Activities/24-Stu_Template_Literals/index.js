const music = {
  // code here
  title: "Strobe",
  artist: 'deadmau5',
  lyrics: "boots N Cats N B-boot cats"
};

// write code between the <p> tags to output the data from the music object above
const songSnippet = `<p>Artist: ${music.artist} <br> Title: ${music.title} <br> snippet: ${music.lyrics}</p>`;


const element = document.getElementById("music");
element.innerHTML = songSnippet;
