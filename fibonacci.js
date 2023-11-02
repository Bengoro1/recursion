function fibs(n) {
  const arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  console.log(arr);
}

fibs(8);

const fibsRec = (n, x = [0, 1]) => {
  if (n < 1 || typeof n !== 'number') return 'Wrong format';
  if (x.length >= n) return x;
  return fibsRec(n, [...x, x[x.length - 1] + x[x.length - 2]]);
}

console.log(fibsRec(8));

// 2 x[0,1]
// 3 x[1] + x[2]
// 4 x[2] + x[3]