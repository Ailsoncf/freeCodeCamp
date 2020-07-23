function sumAll(arr) {
  const max = arr.reduce((a, b) => (a > b ? a : b))
  const min = arr.reduce((a, b) => (a < b ? a : b))
  let sum = 0
  for (i = min; i <= max; i++) {
    sum += i
  }
  return sum
}

sumAll([1, 4])
