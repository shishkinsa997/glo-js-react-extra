const num = 266219

let sum = (num.toString().split("")).reduce((x, acc) => {
  return Number(x) * acc
});
sum = sum ** 2
const len = sum.toString().length
sum = Math.floor(sum / 10 ** (len - 2))

console.log(sum);
