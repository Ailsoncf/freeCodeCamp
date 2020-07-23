function pairElement(str) {
  const arr = str.split('')
  const pair = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  }
  const res = arr.map((i) => [i, pair[i]])
  console.log(res)
}

pairElement('GCG') //[['g', 'c'], ['c', 'g'], ['g', 'c']]

//A = T ; C = G ; T = A , G = C
