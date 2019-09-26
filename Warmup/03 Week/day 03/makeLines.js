let paragraph = "Lorem ipsum dolor sit amet, xconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu f";


const lineLength = 20;

function makeLines(paragraph) {
    let lines = [];
    let words = "";

    paragraph = paragraph.split(" ")


    for (let i = 0; i < paragraph.length; i++ ) {
        if (words.length + paragraph[i].length < lineLength) {
            words += paragraph[i] + " "
        } else {
            lines.push(words);
            words = paragraph[i] + " ";
        }
    }

    for(let i = 0; i < lines.length; i++) {
        console.log(lines[i]);
    }
}

makeLines(paragraph)