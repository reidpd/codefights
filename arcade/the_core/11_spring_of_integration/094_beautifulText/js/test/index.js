const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // beautifulText(inputString, l, r)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [
            "Look at this example of a correct text",
            5,
            15
          ],
          out: true,
        },{
          cxt: 'simple test',
          in: [
            "abc def ghi",
            4,
            10
          ],
          out: false,
        },{
          cxt: 'simple test',
          in: [
            "a a a a a a a a",
            1,
            10
          ],
          out: true,
        },{
          cxt: 'simple test',
          in: [
            "ab cd fg xyz",
            1,
            5
          ],
          out: false,
        },{
          cxt: 'simple test',
          in: [
            "aa aa aaaaa aaaaa aaaaa",
            6,
            11
          ],
          out: true,
        },{
          cxt: 'simple test',
          in: [
            "aa aa aaaaa aaaaa aaaaa",
            5,
            10
          ],
          out: true,
        },{
          cxt: 'simple test',
          in: [
            "aa aa aaaaa aaaaa aaaaa",
            6,
            10
          ],
          out: false,
        },{
          cxt: 'simple test',
          in: [
            "aaa aaaaaaa",
            3,
            10
          ],
          out: false,
        },{
          cxt: 'simple test',
          in: [
            "dht skq dkg",
            4,
            10
          ],
          out: false,
        },{
          cxt: 'simple test',
          in: [
            "skspv iakqh ygzwz ntkmi xqhpj",
            3,
            7
          ],
          out: true,
        },{
          cxt: 'simple test',
          in: [
            "skspv iakqh ygzwz ntkmi xqhpj",
            8,
            9
          ],
          out: false,
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
