const fs = require("fs");

const args = process.argv.slice(2);

if (!args.length) {
    throw new Error("Expected a filename input");
}


fs.readFile(args[0], (err, data) => {
    if (err) {

    }
    let json = JSON.parse(data.toString());
})


function averageWins(data) {
    return -1;
}
