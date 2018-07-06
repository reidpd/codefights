const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // adaNumber(line)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: "123_456_789",
          out: true,
        },{
          cxt: 'simple test',
          in: "16#123abc#",
          out: true,
        },{
          cxt: 'simple test',
          in: "10#123abc#",
          out: !true,
        },{
          cxt: 'simple test',
          in: "10#10#123ABC#",
          out: !true,
        },{
          cxt: 'simple test',
          in: "10#0#",
          out: true,
        },{
          cxt: 'simple test',
          in: "10##",
          out: !true,
        },{
          cxt: 'simple test',
          in: "16#1234567890ABCDEFabcdef#",
          out: true,
        },{
          cxt: 'simple test',
          in: "1600#",
          out: !true,
        },{
          cxt: 'simple test',
          in: "7#???#",
          out: !true,
        },{
          cxt: 'simple test',
          in: "4#4#",
          out: !true,
        },{
          cxt: 'simple test',
          in: "3454235ab534",
          out: !true,
        },{
          cxt: 'simple test',
          in: "1#0#",
          out: !true,
        },{
          cxt: 'simple test',
          in: "17#ac#",
          out: !true,
        },{
          cxt: 'simple test',
          in: "2#10110#",
          out: true,
        },{
          cxt: 'simple test',
          in: "2#10110",
          out: !true,
        },{
          cxt: 'simple test',
          in: "#2#10110",
          out: !true,
        },{
          cxt: 'simple test',
          in: "#2#10110#",
          out: !true,
        },{
          cxt: 'simple test',
          in: "9##",
          out: false
        }
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(param.in)).to.deep.equal(param.out);
        });
      }
    }/*, {
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
    test.fn = fns[testIdx]; // sets functions according to order set in index.js
    test.ins_and_outs.forEach(params => {
      params.fn = test.fn;
      test.run(params);
    });
  });
});
