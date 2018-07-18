const tasksTypes = (deadlines, day) => {
    let types = { Today: 0, Upcoming: 0, Later: 0 };
    deadlines.map((dl, dli) => {
        if (dl <= day) { return 'Today' }
        else if (dl <= day + 7) { return 'Upcoming' }
        else { return 'Later' }
    }).forEach(type => types[type]++);
    return [types.Today, types.Upcoming, types.Later];
}

module.exports = { fns: [ tasksTypes ] };
