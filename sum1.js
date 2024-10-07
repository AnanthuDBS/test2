function sumOfMultiples(a, l) {
    let sum = 0;
    for (let i = 0; i < l.length; i++) {
      if (l[i] % a[0] === 0 || l[i] % a[1] === 0) {
        sum += l[i];
      }
    }
    return sum;
  }
  
  let a = [2, 3];
  let l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(sumOfMultiples(a, l));