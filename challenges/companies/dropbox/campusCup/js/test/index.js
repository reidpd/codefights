const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // campusCup(emails)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [
            "john.doe@mit.edu",
            "admin@rain.ifmo.ru",
            "noname@mit.edu"
          ],
          out: [
            "mit.edu",
            "rain.ifmo.ru"
          ],
        },{
          cxt: 'simple test',
          in: [
            "b@harvard.edu",
            "c@harvard.edu",
            "d@harvard.edu",
            "e@harvard.edu",
            "f@harvard.edu",
            "a@student.spbu.ru",
            "b@student.spbu.ru",
            "c@student.spbu.ru",
            "d@student.spbu.ru",
            "e@student.spbu.ru",
            "f@student.spbu.ru",
            "g@student.spbu.ru"
          ],
          out: [
            "harvard.edu",
            "student.spbu.ru"
          ],
        },{
          cxt: 'simple test',
          in: [
            "a@rain.ifmo.ru",
            "b@rain.ifmo.ru",
            "c@rain.ifmo.ru",
            "d@rain.ifmo.ru",
            "e@rain.ifmo.ru",
            "noname@mit.edu"
          ],
          out: [
            "rain.ifmo.ru",
            "mit.edu"
          ],
        },{
          cxt: 'simple test',
          in: [
            "john.doe@mit.edu",
            "admin@rain.ifmo.ru"
          ],
          out: [
            "mit.edu",
            "rain.ifmo.ru"
          ],
        },{
          cxt: 'simple test',
          in: [
            "a@rain.ifmo.ru",
            "b@rain.ifmo.ru",
            "c@rain.ifmo.ru",
            "d@rain.ifmo.ru",
            "e@rain.ifmo.ru",
            "f@rain.ifmo.ru",
            "g@rain.ifmo.ru",
            "h@rain.ifmo.ru",
            "i@rain.ifmo.ru",
            "j@rain.ifmo.ru",
            "k@rain.ifmo.ru",
            "l@rain.ifmo.ru",
            "m@rain.ifmo.ru",
            "n@rain.ifmo.ru",
            "o@rain.ifmo.ru",
            "p@rain.ifmo.ru",
            "q@rain.ifmo.ru",
            "r@rain.ifmo.ru",
            "s@rain.ifmo.ru",
            "t@rain.ifmo.ru",
            "u@rain.ifmo.ru",
            "v@rain.ifmo.ru",
            "w@rain.ifmo.ru",
            "x@rain.ifmo.ru",
            "y@rain.ifmo.ru",
            "a@mit.edu.ru",
            "b@mit.edu.ru",
            "c@mit.edu.ru",
            "d@mit.edu.ru",
            "e@mit.edu.ru",
            "f@mit.edu.ru",
            "g@mit.edu.ru",
            "h@mit.edu.ru",
            "i@mit.edu.ru",
            "j@mit.edu.ru",
            "k@mit.edu.ru",
            "l@mit.edu.ru",
            "m@mit.edu.ru",
            "n@mit.edu.ru",
            "o@mit.edu.ru"
          ],
          out: [
            "rain.ifmo.ru",
            "mit.edu.ru"
          ],
        },{
          cxt: 'simple test',
          in: [
            "b@rain.ifmo.ru",
            "c@rain.ifmo.ru",
            "d@rain.ifmo.ru",
            "e@rain.ifmo.ru",
            "f@rain.ifmo.ru",
            "g@rain.ifmo.ru",
            "h@rain.ifmo.ru",
            "i@rain.ifmo.ru",
            "j@rain.ifmo.ru",
            "k@rain.ifmo.ru",
            "l@rain.ifmo.ru",
            "m@rain.ifmo.ru",
            "n@rain.ifmo.ru",
            "o@rain.ifmo.ru",
            "p@rain.ifmo.ru",
            "q@rain.ifmo.ru",
            "r@rain.ifmo.ru",
            "s@rain.ifmo.ru",
            "t@rain.ifmo.ru",
            "u@rain.ifmo.ru",
            "v@rain.ifmo.ru",
            "w@rain.ifmo.ru",
            "x@rain.ifmo.ru",
            "y@rain.ifmo.ru",
            "a@mit.edu.ru",
            "b@mit.edu.ru",
            "c@mit.edu.ru",
            "d@mit.edu.ru",
            "e@mit.edu.ru",
            "f@mit.edu.ru",
            "g@mit.edu.ru",
            "h@mit.edu.ru",
            "i@mit.edu.ru",
            "j@mit.edu.ru",
            "k@mit.edu.ru",
            "l@mit.edu.ru",
            "m@mit.edu.ru",
            "n@mit.edu.ru",
            "o@mit.edu.ru"
          ],
          out: [
            "mit.edu.ru",
            "rain.ifmo.ru"
          ],
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
