function sumAll(arr) {
  let sum = 0
  const max = Math.max(arr[0], arr[1])
  const min = Math.min(arr[0], arr[1])
  for (let i = min; i <= max; i++) {
    sum += i
  }
  return sum
}

sumAll([1, 4])