const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // losslessDataCompression
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [
            "",
            00
          ],
          out: "",
        },{
          cxt: 'simple test',
          in: [
            "",
            00
          ],
          out: "",
        },{
          cxt: 'simple test',
          in: [
            "",
            00
          ],
          out: "",
        },{
          cxt: 'simple test',
          in: [
            "",
            00
          ],
          out: "",
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(...param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // conjureWindow(str, idx, width)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [
            "abacabadabacaba",
            0,
            7
          ],
          out: "",
        },{
          cxt: 'simple test',
          in: [
            "abacabadabacaba",
            1,
            7
          ],
          out: "a",
        },{
          cxt: 'simple test',
          in: [
            "abacabadabacaba",
            2,
            7
          ],
          out: "ab",
        },{
          cxt: 'simple test',
          in: [
            "abacabadabacaba",
            3,
            7
          ],
          out: "aba",
        },{
          cxt: 'simple test',
          in: [
            "abacabadabacaba",
            7,
            7
          ],
          out: "abacaba",
        },{
          cxt: 'simple test',
          in: [
            "abacabadabacaba",
            8,
            7
          ],
          out: "bacabad",
        },{
          cxt: 'simple test',
          in: [
            "abacabadabacaba",
            12,
            7
          ],
          out: "badabac",
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(...param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // substringThing(str, idx, window)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [
            "abacabadabacaba",
            2,
            "ab"
          ],
          out: "(0,1)",
        }/*,{
          cxt: 'simple test',
          in: [
            "",
            00,
            ""
          ],
          out: "(,)",
        }*/
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
