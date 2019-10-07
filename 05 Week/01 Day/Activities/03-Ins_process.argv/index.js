// returns an array of command line arguments

console.log(process.argv);

// arguments passed from the command line are accessed by index
console.log(process.argv[2]);

helloWorld(process.argv[2])
function helloWorld(b) {
    if (b) {
        console.log('hello world')
    }
}