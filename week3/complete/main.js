const fs = require("fs");

const table = require("table");

const programName = process.argv[1];
const args = process.argv.slice(2);

if (!args.length) {
    throw new Error("Expected a filename input");
}

let startYear = null;
let endYear = null;
if (args.some(arg => arg.includes("start="))) {
    startYear = parseInt(args.find(arg => arg.includes("start=")).replace("start=", ""));
}
if (args.some(arg => arg.includes("end="))) {
    endYear = parseInt(args.find(arg => arg.includes("end=")).replace("end=", ""));
}

fs.readFile(args[0], (err, data) => {
    if (err) {
        throw new Error(`File "${args[0]}" does not exist`);
    }
    let json = JSON.parse(data.toString());
    if (startYear !== null) {
        json = json.filter(year => year.year >= startYear);
    }
    if (endYear !== null) {
        json = json.filter(year => year.year <= endYear);
    }
    const avgWins = idiomaticAverageWins(json);
    console.log(table.table([["Average Wins per Year", avgWins]]))
    const histories = coachHistories(json);
    console.log(table.table(
        Object.keys(histories).map(coach => [coach, histories[coach].join(", ")])
    ))
})


function averageWins(data) {
    const winCounts = data.map(year => year.wins);
    let sum = 0;
    for (const winCount of winCounts) {
        sum += winCount;
    }
    return sum / winCounts.length;
}

function idiomaticAverageWins(data) {
    return data.map(year => year.wins).reduce((acc, x) => acc + x, 0) / data.length;
}


function coachHistories(data) {
    const coaches = {};
    for (const year of data) {
        if (!coaches.hasOwnProperty(year.coach)) {
            coaches[year.coach] = [];
        }
        coaches[year.coach].push(year.year);
    }
    for (const [coach, years] of Object.entries(coaches)) {
        years.reverse()
        // coaches with one year have just one year
        if (years.length === 1) {
            continue;
        }
        let start = years[0];
        let end = years[years.length - 1];
        // coaches with a single contiguous span of years get a range
        if (end - start === years.length - 1) {
            coaches[coach] = [`${start}-${end}`];
        } else {
            // if there are gaps, find them
            const ranges = [[years[0], years[0]]];
            for (const year of years.slice(1)) {
                const lastRange = ranges[ranges.length - 1];
                if (year === lastRange[1] + 1) {
                   lastRange[1] = year;
                } else {
                    ranges.push([year, year]);
                }
            }
            coaches[coach] = ranges.map(range => range.join("-"));
        }
    }
    return coaches
}
