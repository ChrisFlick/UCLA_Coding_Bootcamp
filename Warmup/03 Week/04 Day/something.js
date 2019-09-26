let names =
    ['Aaron','Anthony','Bryan','Christopher','Chuhan','Claire','Daniel',
     'Emi','Geremy','Hussein','Jamie','Justin','Mario','Marisa',
     'Marti','Matthew','Patrick','Ramon','Walter']

let counter = Math.floor(Math.random() * names.length) + names.length;
let stopat = counter % names.length;
let longest = names.reduce((longest, name) => {
  return (longest >= name.length ? longest : name.length);
},0);

let blankout = `\r${' '.repeat(longest)}\r`;


process.stdout.write('\033[2J\033');

let timer = setInterval(() => {
  if (counter === stopat) {
    process.stdout.write(`It's ${names[stopat]}!\n\n`);
    clearInterval(timer);
  } else {
    process.stdout.write(`${names[counter % names.length]}`);
    counter--;
    setTimeout(() => {
    process.stdout.write(blankout);
    }, 90);
  }
}, 100)