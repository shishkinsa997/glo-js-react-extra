const str = '    qwertyuiop qwertyuiop qwertyuiop   '

const formatString = (str) => {
  if (typeof str !== 'string') throw new Error(str)
  str = str.trim()
  if (str.length > 30) return str.slice(0, 30) + '...'
  return str
}
const formatedStr = formatString(str)
console.log(formatedStr, formatedStr.length);

