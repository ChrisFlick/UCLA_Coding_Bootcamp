helloWorld(process.argv[2])

function helloWorld(b) {
    if (b) {
        console.log(`hello  ${b}`)
    } else {
        console.log('Please input your name')
    }
    
}