const recurringTask = (firstDate, k, daysOfTheWeek, n) => {
  const startMonthDateYear = firstDate.split('/')
  const dates = [firstDate];

  return dates;
};

const isLeapYear = yr => {
  if (yr % 4 === 0) {
    if (yr % 100 === 0) { return yr % 400 === 0 }
    return true;
  }
  return false;
}

module.exports = { fns: [ recurringTask ] };
