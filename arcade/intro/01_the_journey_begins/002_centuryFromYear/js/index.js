const centuryFromYear = year => {
  let remainder = year % 100, century = Math.floor(year / 100);
  return (remainder === 0) ? century : century + 1;
}

module.exports = { centuryFromYear };
