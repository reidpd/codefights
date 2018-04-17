const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // crosswordFormation(words)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: ["crossword", "square", "formation", "something"],
          out: 6,
        },{
          cxt: 'simple test',
          in: ["anaesthetist", "thatch", "ethnics", "sabulous"],
          out: 0,
        },{
          cxt: 'simple test',
          in: ["eternal", "texas", "chainsaw", "massacre"],
          out: 4,
        },{
          cxt: 'simple test',
          in: ["africa", "america", "australia", "antarctica"],
          out: 62,
        },{
          cxt: 'simple test',
          in: ["phenomenon", "remuneration", "particularly", "pronunciation"],
          out: 62,
        },{
          cxt: 'simple test',
          in: ["onomatopoeia", "philosophical", "provocatively", "thesaurus"],
          out: 20,
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
