const fs = require('fs');
const parse = require('csv-parse');

const parser = parse();
const output = [];

// called basically on every row of csv.
// Each row is a list. Pushing each row into my output array
parser.on('readable', () => {
    let record;
    while (record = parser.read()) {
        output.push(record);
    }
});

parser.on('error', error => {
    console.error('Upsie whoopsie');
    console.error(error);
    process.exit(1);
});

parser.on('end', () => {
    console.log('Done reading file!');
    console.log(output);
})

fs.createReadStream('example-csv-file.csv').pipe(parser);
