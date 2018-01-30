const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // isMAC48Address
      ins_and_outs: [
        {
          cxt: 'returns true for inputStrings that contain 6 groups of hexadecimal (0-9, A-F) digits separated by hyphens',
          in: ["00-1B-63-84-45-E6"],
          out: true,
        },{
          cxt: 'returns false if non-hexadecimal letters ("z") are used',
          in: ["Z1-1B-63-84-45-E6"],
          out: false,
        },{
          cxt: 'returns false for clearly non-conforming inputs (like human readable sentences)',
          in: ["not a MAC-48 address"],
          out: false,
        },{
          cxt: 'Accepts F as the only and last character',
          in: ["FF-FF-FF-FF-FF-FF"],
          out: true,
        },{
          cxt: 'Accepts 0 as the only and first character',
          in: ["00-00-00-00-00-00"],
          out: true,
        },{
          cxt: 'returns false if only one character does not conform to standard hexadecimal notation (the first)',
          in: ["G0-00-00-00-00-00"],
          out: false,
        },{
          cxt: 'returns false if extraneous hyphens are inserted',
          in: ["02-03-04-05-06-07-"],
          out: false,
        },{
          cxt: 'returns true for inputStrings that contain 6 groups of hexadecimal (0-9, A-F) digits separated by hyphens',
          in: ["12-34-56-78-9A-BC"],
          out: true,
        },{
          cxt: 'returns true for inputStrings that contain 6 groups of hexadecimal (0-9, A-F) digits separated by hyphens',
          in: ["FF-FF-AB-CD-EA-BC"],
          out: true,
        },{
          cxt: 'returns false if only one character does not conform to standard hexadecimal notation (the last)',
          in: ["12-34-56-78-9A-BG"],
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
