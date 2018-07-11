const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // higherVersion(ver1, ver2)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [
            "1.2.2",
            "1.2.0"
          ],
          out: true,
        },{
          cxt: 'simple test',
          in: [
            "1.0.5",
            "1.1.0"
          ],
          out: false,
        },{
          cxt: 'simple test',
          in: [
            "1.1.0",
            "1.1.5"
          ],
          out: false,
        },{
          cxt: 'simple test',
          in: [
            "10",
            "9"
          ],
          out: true,
        },{
          cxt: 'simple test',
          in: [
            "1.0.10",
            "1.1.5"
          ],
          out: false,
        },{
          cxt: 'simple test',
          in: [
            "5",
            "1"
          ],
          out: true,
        },{
          cxt: 'simple test',
          in: [
            "1.1.10",
            "1.2.0"
          ],
          out: false,
        },{
          cxt: 'simple test',
          in: [
            "1.2.2",
            "1.2.10"
          ],
          out: false,
        },{
          cxt: 'simple test',
          in: [
            "1.10.2",
            "1.2.10"
          ],
          out: true,
        },{
          cxt: 'simple test',
          in: [
            "0",
            "0"
          ],
          out: false,
        },{
          cxt: 'simple test',
          in: [
            "4.3.22.1",
            "4.3.22.1"
          ],
          out: false,
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
