function sumAll(arr) {
  const a = [1, 4]
  const max = Math.max.apply(null, arr) //arr.reduce((a, b) => (a > b ? a : b))
  const min = Math.min.apply(null, arr) //arr.reduce((a, b) => (a < b ? a : b))
  let sum = 0
  for (i = min; i <= max; i++) {
    sum += i
  }
  return sum
}

sumAll([1, 4])
