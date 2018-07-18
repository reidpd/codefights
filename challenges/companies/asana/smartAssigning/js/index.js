const smartAssigning = (names, statuses, projects, tasks) => {
    let people = [];
    names.forEach((name, idx) => people.push(person(name, statuses[idx], projects[idx], tasks[idx])));
    return people.filter(p => !p.status).sort((p1,p2) => {
        if (p1.tasks < p2.tasks) { return -1 }
        else if (p1.tasks > p2.tasks) { return 1 }
        else {
            return p1.projects < p2.projects ? -1 : 1;
        }
    })[0].name;
}

const person = (name, status, projects, tasks) => {
    return { name, status, projects, tasks };
}

module.exports = { fns: [ smartAssigning ] };
