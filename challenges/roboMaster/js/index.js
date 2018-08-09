const roboMaster = (shots) => {
    const game = new Game(shots);
    return game.result;
}


class Game {
    constructor(shots) {
        this.teams = { red: new Team('red'), blue: new Team('blue') };
        this.shots_fired = shots;
        this.shots_fired.forEach(shot => {
            const target = (shot) => {
                let trgt = shot[1].split(' ')[1];
                return trgt === 'base' ? 0 : parseInt(trgt);
            };
            const defensive = { color: shot[1].split(' ')[0], target: target(shot) };
            const pellet_size = shot[2];
            this.teams[defensive.color].takeBlow(defensive.target, pellet_size);
        });
        this.scores = this.finalTally();
    }

    finalTally() { return ['red', 'blue'].map(color => this.teams[color].tally) }

    get result() {
        const teams = ['red', 'blue'].map(color => this.teams[color])
        if (this.scores[0].baseHP === this.scores[1].baseHP) {
            const leastDamage = Math.min(...this.scores.map(sc => sc.total_damage));
            if (this.scores.every(sc => sc.total_damage === leastDamage)) { return 'draw' }
            return this.scores.filter(sc => sc.total_damage === leastDamage)[0].name;
        } else {
            const healthiestBaseHP = Math.max(...this.scores.map(sc => sc.baseHP));
            return this.scores.filter(sc => sc.baseHP === healthiestBaseHP)[0].name;
        }
    }
}

class Team {
    constructor(name) {
        this.name = name;
        this.total_damage = 0;
        this.team = [new Bot(2000), new Bot(1000), new Bot(2000), new Bot(5000), new Bot(1000), new Bot(1000)];
        this.base = this.team[0];
    }

    get tally() {
        return { name: this.name, baseHP: this.base.hp, total_damage: this.total_damage }
    }

    get baseHP() { return this.base.hp }

    takeBlow(victim, bullet) {
        let pts = bullet === '17mm' ? 50: 500;
        if (this.team[victim] === this.base) {
            if (this.team.slice(1).every(bot => bot.isAlive)) { pts = 0 }
        }
        this.total_damage += pts;
        this.team[victim].takeDamage(pts);
    }
}


class Bot {
  constructor(hp) { this.hp = hp; }

  get isAlive() { return this.hp > 0; }
  
  takeDamage(pts) { this.hp -= pts; }
}

module.exports = { fns: [ roboMaster ] };
