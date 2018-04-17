const properNounCorrection = noun => noun[0].toUpperCase() + noun.slice(1).toLowerCase();

module.exports = { fns: [ properNounCorrection ] };
