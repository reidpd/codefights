const expect = require('chai').expect;
const fns = require('..').fns;
const elel = require('..');
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // blankNode()
      ins_and_outs: [
        {
          cxt: 'should return a blank object',
          in: [],
          out: {},
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          console.log(param.fn());
          expect(param.fn(...param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // nodeWithVal()
      ins_and_outs: [
        {
          cxt: 'should return an object with this.val equal to the input provided (string)',
          in: ['string'],
          out: { val: 'string' },
        },{
          cxt: 'should return an object with this.val equal to the input provided (integer)',
          in: [1],
          out: { val: 1 },
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(...param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // createSingleDirNode()
      ins_and_outs: [
        {
          cxt: 'should return a node with a val && a next if provided',
          in: [1, elel.nodeWithVal(2)],
          out: { val: 1, next: elel.nodeWithVal(2) },
        },{
          cxt: 'should return a node with a val && a next prop with val of null if no next input is provided',
          in: [1],
          out: { val: 1, next: null },
        }
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(...param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // createFlexDirNode()
      ins_and_outs: [
        {
          cxt: 'should return an obj with the val, and a next && prev props if input is provided for them',
          in: [
            2,
            elel.nodeWithVal(3),
            elel.nodeWithVal(1)
          ],
          out: { val: 2, next: elel.nodeWithVal(3), prev: elel.nodeWithVal(1) },
        },{
          cxt: 'should return an obj with the val, and a next prop if input is provided for it, and a prev prop of null if that is not provided',
          in: [
            1,
            elel.nodeWithVal(2)
          ],
          out: { val: 1, next: elel.nodeWithVal(2), prev: null },
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(...param.in)).to.deep.equal(param.out);
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
