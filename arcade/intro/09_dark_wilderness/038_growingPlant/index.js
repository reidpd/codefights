const growingPlant = (upSpeed, downSpeed, desiredHeight) => {
  let growth = 0, days = 0;
  while (growth < desiredHeight) {
    growth += upSpeed;
    if (growth < desiredHeight) { growth -= downSpeed }
    days++;
  }
  return days;
};

module.exports = { fns: [ growingPlant ] }
