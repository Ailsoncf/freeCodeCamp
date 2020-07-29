function convertHTML(str) {
  const char = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  }

  const res = str.split(' ').map((v) => char[v] || v)
  return res
}

convertHTML('Dolce & Gabbana')
