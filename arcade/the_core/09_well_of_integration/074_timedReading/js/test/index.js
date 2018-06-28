const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // timedReading(maxLength, text)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [
            4,
            "The Fox asked the stork, 'How is the soup?'"
          ],
          out: 7,
        },{
          cxt: 'simple test',
          in: [
            1,
            "..."
          ],
          out: 0,
        },{
          cxt: 'simple test',
          in: [
            3,
            "This play was good for us."
          ],
          out: 3,
        },{
          cxt: 'simple test',
          in: [
            3,
            "Suddenly he stopped, and glanced up at the houses"
          ],
          out: 5,
        },{
          cxt: 'simple test',
          in: [
            6,
            "Zebras evolved among the Old World horses within the last four million years."
          ],
          out: 11,
        },{
          cxt: 'simple test',
          in: [
            5,
            "Although zebra species may have overlapping ranges, they do not interbreed."
          ],
          out: 6,
        },{
          cxt: 'simple test',
          in: [
            1,
            "Oh!"
          ],
          out: 0,
        },{
          cxt: 'simple test',
          in: [
            5,
            "Now and then, however, he is horribly thoughtless, and seems to take a real delight in giving me pain."
          ],
          out: 14,
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
