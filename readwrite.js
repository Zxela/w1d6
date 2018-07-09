var fs = require("fs");

var filePath = "/tmp/test_readwriteasync.txt";
var readfilePath = process.argv[2];

fs.readFile(readfilePath, 'utf8', (err, fileData) => {
    if (err) {
        throw err;
    }
    console.log(fileData)
})

