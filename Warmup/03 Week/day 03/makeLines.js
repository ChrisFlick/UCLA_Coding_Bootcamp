let paragraph = "Lorem ipsum dolor sit amet, xconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu f";


const lineLength = 20;

function makeLines(paragraph) {
    let lines = [""];
    let numOfLines = Math.ceil(paragraph.length / lineLength);
    let count = 0;

    paragraph = paragraph.split(" ")


    for (let i = 0; i < numOfLines; i++ ) {
        for (let j = 0; j < lineLength; j++) {
            let pos = count;
            if(paragraph[count]) {
                lines[i] += " " +   paragraph[count];
            }
            

            count ++;
        }
        if (lines[i]) {
            console.log(lines[i])
        }
        
    }
}

makeLines(paragraph)