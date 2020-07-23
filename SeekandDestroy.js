function destroyer(arr, ...n) {
  const filteresArr = arr.filter((i) => !n.includes(i))
  return filteresArr
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3)
