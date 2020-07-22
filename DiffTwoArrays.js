function diffArray(arr1, arr2) {
  const concatArr = arr1.concat(arr2)
  const res = concatArr.filter((a) => !arr1.includes(a) || !arr2.includes(a))
  console.log(res)
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])
