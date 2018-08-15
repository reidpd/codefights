cconst treeClimbing = (branches, friends) => {
    const tree = new Tree(branches);
    return friends.filter(f => tree.can_be_climbed_by(f)).length;
}

class Tree {
    constructor(branches) {
        this.branches = branches;
        this.top = this.branches.slice(0).pop()[0]
    }

    can_be_climbed_by(f) {
        const climber = new Climber(f);
        let path = this.branches.slice(0);
        while (path.length > 0) {
            let next_branch = new Branch(path.shift());
            if (climber.can_reach(next_branch.height)) {
                if (next_branch.can_support(climber.weight)) {
                    climber.height = next_branch.height;
                }
            } else { return false }
        }
        return this.top === climber.height;
    }
}

class Branch {
    constructor(stat) {
        this.height = stat[0];
        this.weightLimit = stat[1];
    }

    can_support(w) { return w <= this.weightLimit }
}

class Climber {
    constructor(stat) {
        this.height = 0;
        this.reach = stat[0];
        this.weight = stat[1];
    }

    can_reach(new_height) {
        return (this.height + this.reach) >= new_height;
    }
}

module.exports = { fns: [ treeClimbing ] };
