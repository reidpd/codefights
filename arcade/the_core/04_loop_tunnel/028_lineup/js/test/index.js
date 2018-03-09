const expect = require('chai').expect;
const fns = require('..').fns;
const Student = require('..').Student;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      type: 'function',
      fn: '', // lineup()
      ins_and_outs: [
        {
          cxt: '2 commands cancel each other out, and 1 command (A) adds one when all students previously uniform',
          in: ["LLARL"],
          out: 3,
        },{
          cxt: 'alternating side directions add one to the count that is returned',
          in: ["RLR"],
          out: 1,
        },{
          cxt: 'returns 0 with an input of only an empty string',
          in: [""],
          out: 0,
        },{
          cxt: 'only one command of L means students who disobey directions will still be out of line, so 0 is returned',
          in: ["L"],
          out: 0,
        },{
          cxt: 'only one command of R means students who disobey directions will still be out of line, so 0 is returned',
          in: ["R"],
          out: 0,
        },{
          cxt: 'since students do not misinterpret A for turning 180 degrees, a single command of A returns 1',
          in: ["A"],
          out: 1,
        },{
          cxt: 'since students do not misinterpret A for turning 180 degrees, a string containing only A returns input.length (1)',
          in: ["A"],
          out: 1,
        },{
          cxt: 'since students do not misinterpret A for turning 180 degrees, a string containing only A returns input.length (3)',
          in: ["AAA"],
          out: 3,
        },{
          cxt: 'since students do not misinterpret A for turning 180 degrees, a string containing only A returns input.length (15)',
          in: ["AAAAAAAAAAAAAAA"],
          out: 15,
        },{
          cxt: 'simple test',
          in: ["RRRRRRRRRRLLLLLLLLLRRRRLLLLLLLLLL"],
          out: 16,
        },{
          cxt: 'simple test',
          in: ["AALAAALARAR"],
          out: 5,
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(...param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      type: 'function',
      fn: '', // makeQueue(clockwiseBool, length)
      ins_and_outs: [
        {
          cxt: 'when first input param equals false & a length of 1 is specified, an array containing 4 clockwise directions in caps is returned',
          in: [false, 1],
          out: ['N', 'E', 'S', 'W'],
        },{
          cxt: 'when first input param equals true & a length of 1 is specified, an array containing 4 counter-clockwise directions in caps is returned',
          in: [true, 1],
          out: ['N', 'W', 'S', 'E'],
        },{
          cxt: 'when first input param equals false & a length of 2 is specified, an array containing 8 clockwise directions in caps is returned',
          in: [false, 2],
          out: ['N', 'E', 'S', 'W', 'N', 'E', 'S', 'W'],
        },{
          cxt: 'when first input param equals true & a length of 2 is specified, an array containing 8 counter-clockwise directions in caps is returned',
          in: [true, 2],
          out: ['N', 'W', 'S', 'E', 'N', 'W', 'S', 'E'],
        },,{
          cxt: 'when first input param equals false & a length of 30 is specified, an array containing 120 clockwise directions in caps is returned',
          in: [false, 30],
          out: ((fillArr, returnArr = []) => {
            for (let i = 0; i < 30; i++) { returnArr.push(...fillArr); }
            return returnArr;
          })(['N', 'E', 'S', 'W']),
        },{
          cxt: 'when first input param equals true & a length of 30 is specified, an array containing 120 counter-clockwise directions in caps is returned',
          in: [true, 35],
          out: ((fillArr, returnArr = []) => {
            for (let i = 0; i < 35; i++) { returnArr.push(...fillArr); }
            return returnArr;
          })(['N', 'W', 'S', 'E']),
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(...param.in)).to.deep.equal(param.out);
          expect(param.fn(...param.in).length / 4).to.deep.equal(param.in[1]);
        });
      }
    }, {
      type: 'class',
      class: Student, // set this yourself
      class_name_string: 'Student', // set this yourself
      inst_props: [[true]/*, [false] arrays of inputs for instances */],
      methods: [
        { // turn(dir)
          ins_and_outs: [
            {
              cxt: 'simple test',
              in: ['R'],
              out: 71,
            }

          ],
          run: (instance, params) => {
            console.log('inst === ', instance);
            console.log('params === ', params);
            const cxt = params.cxt;
            it(cxt, () => {
              const oldIdx = instance.queueIdx;
              instance./*name_your_method_here*/turn(...params.in);
              expect(instance.queueIdx).to.deep.equal(oldIdx + 1);
            });
          },
        },
      ],
      run: param => {
        const cxt = 'new ' + param.class_name_string + '(' + param.inst_props.join(', ') + ').' + param.method_name_string + '(' + param.fn_input.join(', ') + ') ' + param.cxt;
        it(cxt, () => {
          expect(param.instance.makeTurns(...param.in)).to.deep.equal(param.out);
        });
      }
    }/*, {
      type: 'function' || 'class',
      fn: '', // name
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [],
          out: true,
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(...param.in)).to.deep.equal(param.out);
        });
      }
    }
    */
  ];
  tests.forEach((test, testIdx) => {
    if (test.type === 'function') {
      test.fn = fns[testIdx]; // sets functions according to order set in index.js
      test.ins_and_outs.forEach(params => {
        params.fn = test.fn;
        test.run(params);
      });
    } else if (test.type === 'class') {
      test.instances = test.inst_props.map(props => new test.class(...props));
      // console.log('test.instances === ', test.instances);
      test.instances.forEach((inst, instIdx) => {
        test.methods.forEach(method => {
          method.ins_and_outs.forEach(io => {
            method.run(inst, io);
          })
        });
      })
      // test.ins_and_outs.forEach(params => {
      //   params.instance = new test.class(...params.inst_props);
      //   console.log('params.instance.makeTurns === ', params.instance.makeTurns);
      //   params.class_name = test.class_name_string;
      //   test.run(params);
      // })
    }
  });
});
