function summerMusicFestival(lineup, friends) {
    const friendIDS = friends.map((f,i) => i);
    const schedules = friends.map((wishlist,f) => wishlist.map(artist => {
        return { f, artist, ts: lineup.indexOf(artist) }
    }));
    const groupSchedule = [];
    schedules.forEach(setOfTimeSlots => {
        setOfTimeSlots.forEach(ts => groupSchedule.push(ts));
    });
    const gs = groupSchedule.sort((a,b) => a.ts < b.ts ? -1: 1);
    // search every combination of groupSchedule slices until you find an array containing all friendIDs
    let smallestLineupLength = lineup.length;
    let fLen = friendIDS[friendIDS.length-1];
    for (let firstShow = 0; firstShow < gs.length - fLen; firstShow++) {
        for (let lastShow = firstShow + fLen; lastShow < gs.length; lastShow++) {
            const program = gs.slice(firstShow, lastShow);
            const pLen = program[program.length-1].ts - program[0].ts + 1;
            if (pLen < smallestLineupLength) {
                const allFriendsSeeOneShowFrom = (program, fIDs) => {
                    return fIDs.every(f => program.some(ts => ts.f === f));
                }
                if (allFriendsSeeOneShowFrom(program, friendIDS)) {
                    smallestLineupLength = pLen;
                }
            }
        }
    }
    return smallestLineupLength;
}


module.exports = { fns: [ summerMusicFestival ] };
