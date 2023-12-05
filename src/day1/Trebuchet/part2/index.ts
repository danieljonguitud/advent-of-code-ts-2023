import fs from 'node:fs'
const trebuchet = (inputData: string[]) => {
    const resArr: number[] = [];
    const numMap: Record<string, number> = {
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9,
    };

    for (const string of inputData) {
        console.log(string);
        const obj: Record<number, number> = {};

        for (const key in numMap) {
            if (string.includes(key)) {
                console.log(key);
                const regex = new RegExp(key, "g");
                const test = (string.match(regex) || []).length;

                let index = string.indexOf(key);
                obj[index] = numMap[key];

                if (test >= 2) {
                    const reverseIdx = string.lastIndexOf(key);
                    obj[reverseIdx] = numMap[key];
                }

            }
        }

        for (let i = 0; i < string.length; i++) {
            let potentialNum = parseInt(string[i]);
            if (!isNaN(potentialNum)) {
                obj[i] = potentialNum;
            }
        }

        console.log(obj);
        const values = Object.values(obj);
        const foundNumber = [values[0], values[values.length -1]];
        const foundNumberInt = parseInt(foundNumber.join(''));
        resArr.push(foundNumberInt);
    }

    console.log(resArr.length);
    return resArr.reduce((partial, num) => partial + num, 0);
}

const file = process.argv[2];
let inputData: any = [];
const data = fs.readFileSync(file, 'utf-8');

console.log(trebuchet(data.split('\n')));