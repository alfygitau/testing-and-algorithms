const fibseq = (n) => {
  if (n === 1 || n === 2) return [0, 1];
  let s = fibseq(n - 1);
  s.push(s[s.length - 1] + s[s.length - 2]);
  return s;
};

console.log(fibseq(10));
console.log(fibseq(20));

const factorial = (number) => {
  if (number === 1) return number;
  return number * factorial(number - 1);
};

console.log(factorial(5));
