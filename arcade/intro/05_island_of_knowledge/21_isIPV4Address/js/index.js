const isIPv4Address = inputString => {
  const filter = inputString.split('.')
  if (filter.length !== 4 || filter.some(item => item.length === 0)) { return false }
  return filter.every(num =>
    num.split('').every(char => !isNaN(parseInt(char))) && parseInt(num) < 256;
  )
}

module.exports = { isIPv4Address }
