var fs = require('fs')

arg1 = process.argv[2]


if(arg1) {
    fs.appendFile('log.txt', arg1 + "\n", function(err) {
    
        if (err) {
            return console.log(err)
        }
        
        console.log('success')
    });

}