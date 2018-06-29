const campusCup = emails => {
  const domains = emails.map(str => str.split('@')[1]).filter((s,i,a)=>a.indexOf(s)===i);
  const scoreboard = {};
  domains.forEach(d => {
    scoreboard[d] = {};
    let emailsForThisDomain = emails.filter(e => e.split('@')[1] === d);
    scoreboard[d].points = emailsForThisDomain.length * 20;
    scoreboard[d].spaceRank = assessSpaceRank(scoreboard[d].points);
  })
  return domains.sort((a,b)=> {
    let rankA = scoreboard[a].spaceRank, rankB = scoreboard[b].spaceRank;
    if (rankA !== rankB) { // sort by rank
      return rankA > rankB ? -1 : 1;
    } else { // sort by name
      return a < b ? -1 : 1;
    }
  });
};

const assessSpaceRank = points => {
    if (points < 100) {
        return 0;
    } else if (100 <= points && points < 200) {
        return 1;
    } else if (200 <= points && points < 300) {
        return 2;
    } else if (300 <= points && points < 500) {
        return 3;
    } else if (500 <= points) { return 4; }
}


module.exports = { fns: [ campusCup ] };
