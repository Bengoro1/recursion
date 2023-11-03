const mergeSort = (arr) => {
  if (!Array.isArray(arr)) return 'Invalid format';
  if (arr.length === 1) return arr;
  const m = Math.floor(arr.length / 2);
  const l = arr.slice(0, m);
  const r = arr.slice(m, arr.length);
  return merge(mergeSort(l), mergeSort(r));
}

const merge = (l, r) => {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < l.length && j < r.length) { 
    if (l[i] < r[j]) {
      result.push(l[i]);
      i++;
    } else {
      result.push(r[j]);
      j++;
    }
  }

  while (i < l.length) {
    result.push(l[i]);
    i++;
  } 

  while (j < r.length) {
    result.push(r[j]);
    j++;
  }

  return result;
}
const a2 = [7, 14, 48, 25, 17, 9];
console.log(mergeSort(a2));