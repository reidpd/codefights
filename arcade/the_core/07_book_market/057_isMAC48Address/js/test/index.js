const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // isMAC48Address(inputString)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: "00-1B-63-84-45-E6",
          out: true,
        },{
          cxt: 'simple test',
          in: "Z1-1B-63-84-45-E6",
          out: false,
        },{
          cxt: 'simple test',
          in: "not a MAC-48 address",
          out: false,
        },{
          cxt: 'simple test',
          in: "FF-FF-FF-FF-FF-FF",
          out: true,
        },{
          cxt: 'simple test',
          in: "00-00-00-00-00-00",
          out: true,
        },{
          cxt: 'simple test',
          in: "G0-00-00-00-00-00",
          out: false,
        },{
          cxt: 'simple test',
          in: "02-03-04-05-06-07-",
          out: false,
        },{
          cxt: 'simple test',
          in: "12-34-56-78-9A-BC",
          out: true,
        },{
          cxt: 'simple test',
          in: "FF-FF-AB-CD-EA-BC",
          out: true,
        },{
          cxt: 'simple test',
          in: "12-34-56-78-9A-BG",
          out: false,
        },
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
