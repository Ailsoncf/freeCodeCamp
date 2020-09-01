function selectionSort(array) {
  const arr = [...array]
  for (let i = 0; i < arr.length - 1; i += 1) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
      ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }

  return arr
}

selectionSort([
  1,
  4,
  2,
  8,
  345,
  123,
  43,
  32,
  5643,
  63,
  123,
  43,
  2,
  55,
  1,
  234,
  92,
])
