function uniteUnique(...arr) {
  const a = arr //const args = Array.from(arr)
  const concatedArr = [].concat.apply([], a) //args.reduce((a, b) => a.concat(b))
  const res = concatedArr.filter(
    (value, index) => concatedArr.indexOf(value) === index
  )
  console.log(res)
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
