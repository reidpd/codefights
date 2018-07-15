const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // alphanumericLess(s1, s2)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [
            "a",
            "a1"
          ],
          out: true,
        },{
          cxt: 'simple test',
          in: [
            "ab",
            "a1"
          ],
          out: false,
        },{
          cxt: 'simple test',
          in: [
            "b",
            "a1"
          ],
          out: false,
        },{
          cxt: 'simple test',
          in: [
            "x11y012",
            "x011y13"
          ],
          out: true,
        },{
          cxt: 'simple test',
          in: [
            "ab000144",
            "ab144"
          ],
          out: true,
        },{
          cxt: 'simple test',
          in: [
            "ab",
            "a"
          ],
          out: false,
        },{
          cxt: 'simple test',
          in: [
            "000",
            "0000"
          ],
          out: false,
        },{
          cxt: 'simple test',
          in: [
            "abc123",
            "abc123"
          ],
          out: false,
        },{
          cxt: 'simple test',
          in: [
            "zza1233",
            "zza1234"
          ],
          out: true,
        },{
          cxt: 'simple test',
          in: [
            "zzz1",
            "zzz1"
          ],
          out: false,
        },{
          cxt: 'simple test',
          in: [
            "00",
            "a2"
          ],
          out: true,
        },{
          cxt: 'simple test',
          in: [
            "000000",
            "a2"
          ],
          out: true,
        }
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
