function whatIsInAName(collection, source) {
  const sourceKey = Object.keys(source)
  const res = collection.filter((obj) =>
    sourceKey
      .map((key) => obj.hasOwnProperty(key) && obj[key] === source[key])
      .reduce((x, y) => x && y)
  )
  return res
}

whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' },
  ],
  { last: 'Capulet' }
)
