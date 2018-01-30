const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // lineEncoding()
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: ["aabbbc"],
          out: "2a3bc",
        },{
          cxt: 'simple test',
          in: ["abbcabb"],
          out: "a2bca2b",
        },{
          cxt: 'simple test',
          in: ["abcd"],
          out: "abcd",
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(...param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // leastDisjointSubStrings()
      ins_and_outs: [
        {
          cxt: "should return input.split('') if each consecutive character differs",
          in: ["abcd"],
          out: ['a', 'b', 'c', 'd'],
        },{
          cxt: 'should return an array of identical character substrings if not all characters differ',
          in: ["abbcdd"],
          out: ['a', 'bb', 'c', 'dd'],
        },{
          cxt: 'should not group later characters together with earlier ones',
          in: ["addbaacdd"],
          out: ['a', 'dd', 'b', 'aa', 'c', 'dd'],
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
          cxt: '',
          in: [],
          out: ,
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
