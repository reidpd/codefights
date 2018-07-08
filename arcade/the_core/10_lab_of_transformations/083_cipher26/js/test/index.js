const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // name
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: "taiaiaertkixquxjnfxxdh",
          out: "thisisencryptedmessage",
        },{
          cxt: 'simple test',
          in: "ibttlprimfymqlpgeftwu",
          out: "itsasecrettoeverybody",
        },{
          cxt: 'simple test',
          in: "ftnexvoky",
          out: "fourtytwo",
        },{
          cxt: 'simple test',
          in: "taevzhzmashvjw",
          out: "thereisnospoon",
        },{
          cxt: 'simple test',
          in: "abdgkpvcktdoanbqgxpicxtqon",
          out: "abcdefghijklmnopqrstuvwxyz",
        },{
          cxt: 'simple test',
          in: "z",
          out: "z",
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
