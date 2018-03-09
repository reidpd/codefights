const lineUp = (commands) => {
  if (commands.length === 0) { return 0 }
  else if (commands.split('').every(cmd => cmd === 'A')) { return commands.length }
  const students = [new Student(true), new Student(false)];
  const paths = students.map(std => std.makeTurns(commands));
  let sameDirectionCount = 0;
  for (let i = 0; i < paths[0].length; i++) {
    if (paths[0][i] === paths[1][i]) { sameDirectionCount++ }
  }
  return sameDirectionCount;
};

const Student = class Student {
  constructor(isDyslexic) {
    // the student always starts facing the instructor (me), and can only face in one of 4 directions, 'n,s,e,w'
    this.isDyslexic = isDyslexic;
    this.directionQueue = makeQueue(this.isDyslexic, 35); // commands.length maxes out at 35, so 70 directions are required both left and right from the center
    this.queueIdx = this.directionQueue.length / 2; // we want the south command in the middle of an array that can handle many "A" commands
    this.currentDirection = this.directionQueue[this.queueIdx];
    while (this.currentDirection !== 'S') this.queueIdx++; // just in case the math doesn't work out
    this.path = [];
    this.queueIdxIsAboveMiddle = this.queueIdx >= (this.directionQueue.length / 2);
  }

  makeTurns(commands) {
    commands.split('').forEach(cmd => this.turn(cmd));
    return this.path;
  }

  turn(dir) {
    switch (dir) {
      case 'R':
        this.queueIdx++; break;
      case 'L':
        this.queueIdx--; break;
      case 'A':
        this.queueIdxIsAboveMiddle ? this.queueIdx -= 2: this.queueIdx += 2; break;
      default:
        console.log('Not a valid command!');
    }
    this.currentDirection = this.directionQueue[this.queueIdx];
    this.path.push(this.currentDirection);
  }
}

const makeQueue = (clockwiseBool, length) => {
  const queue = new Array();
  const clockwiseArr = ['N', 'E', 'S', 'W'];
  const counterClockwiseArr = ['N', 'W', 'S', 'E'];
  for (let i = 0; i < length; i++) { // asks for negative clockwiseBool because Student asks if they are dyslexic
    !clockwiseBool ? queue.push(...clockwiseArr) : queue.push(...counterClockwiseArr);
  }
  return queue;
}

const classes = [ { class: Student } ];
// const classInstantiations = (classes, inst_props_collections) => {
//   return classes.map((class, idx) => {
//     new (class.class)(...inst_props_collections[idx]);
//   })
// };

module.exports = { fns: [ lineUp, makeQueue,  ], Student };
