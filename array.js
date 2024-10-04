/*Arrays:
a.
Create a function which takes parameters a,b,l
l is a list of integers
find the sum of all the multiples of a or b in l */

function sumOfMultiples(a, b, l) {
    return l.reduce((sum, x) => {
        if (x % a === 0 || x % b === 0) {
            return sum + x;
        }
        return sum;
    }, 0);
}


const l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const a = 2;
const b = 3;
const result = sumOfMultiples(a, b, l);
console.log(result);  // Output: 40 (2 + 3 + 4 + 6 + 8 + 9 + 10)