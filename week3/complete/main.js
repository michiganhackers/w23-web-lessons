

const fs = require("fs");

const programName = process.argv[1];
const args = process.argv.slice(2);

if (!args.length) {
    throw new Error("Expected a filename input");
}

fs.readFile(args[0], (err, data) => {
    if (err) {
        throw new Error(`File "${args[0]}" does not exist`);
    }
    const json = data.toJSON();
})


