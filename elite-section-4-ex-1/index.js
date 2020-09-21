const fs = require('fs');
const path = require('path');

try {
    const data = fs.readFileSync('1.txt', 'UTF-8');

    const lines = data.split(/\r?\n/);

    fs.writeFile(path.join(__dirname, 'answer1.txt'), 'ANSWERS', err => {
        if (err) throw err;
        lines.forEach((line) => {
            fs.appendFile(path.join(__dirname, 'answer1.txt'), `\n${eval(line)}`, err => {
                if (err) throw err;
            })
        })  
    })
} catch (err) {
    console.error(err);
}