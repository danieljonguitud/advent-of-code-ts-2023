import fs from 'node:fs'
const trebuchet = (inputData: string[]) => {
    const resArr: number[] = [];

    for (const string of inputData) {
        let firstIdx = 0;
        let lastIdx = string.length - 1;
        let supArr: number[] = [0, 0];
        while (supArr[0] === 0 || supArr[1] === 0) {

            let potentialFirst = parseInt(string[firstIdx]);
            if (!isNaN(potentialFirst)) {
                supArr[0] = potentialFirst
            } else {
                firstIdx++;
            }

            let potentialLast = parseInt(string[lastIdx]);
            if (!isNaN(potentialLast)) {
                supArr[1] = potentialLast;
            } else {
                lastIdx--;
            }
        }

        resArr.push(parseInt(supArr.join('')));
    }

    return resArr.reduce((partial, num) => partial + num, 0);
}

const file = process.argv[2];
let inputData: any = [];
const data = fs.readFileSync(file, 'utf-8');

console.log(trebuchet(data.split('\n')));