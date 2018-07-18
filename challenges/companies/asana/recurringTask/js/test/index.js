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
          in: [
            "01/01/2015", // firstDate,
            2, // k
            ["Monday", "Thursday"], // daysOfTheWeek
            4 // n
          ],
          out: [
            "01/01/2015",
            "05/01/2015",
            "15/01/2015",
            "19/01/2015"
          ],
        },{
          cxt: 'simple test',
          in: [
            "30/05/1995", // firstDate,
            4, // k
            ["Tuesday"], // daysOfTheWeek
            1 // n
          ],
          out: ["30/05/1995"],
        },{
          cxt: 'simple test',
          in: [
            "22/02/2020", // firstDate,
            1, // k
            ["Saturday"], // daysOfTheWeek
            2 // n
          ],
          out: [
            "22/02/2020",
            "29/02/2020"
          ],
        },{
          cxt: 'simple test',
          in: [
            "01/02/2100", // firstDate,
            4, // k
            ["Sunday", "Monday"], // daysOfTheWeek
            4 // n
          ],
          out: [
            "01/02/2100",
            "07/02/2100",
            "01/03/2100",
            "07/03/2100"
          ],
        },{
          cxt: 'simple test',
          in: [
            "23/02/2000", // firstDate,
            2, // k
            ["Wednesday", "Friday"], // daysOfTheWeek
            4 // n
          ],
          out: [
            "23/02/2000",
            "25/02/2000",
            "08/03/2000",
            "10/03/2000"
          ],
        },{
          cxt: 'simple test',
          in: [
            "31/12/2999", // firstDate,
            1, // k
            ["Tuesday"], // daysOfTheWeek
            2 // n
          ],
          out: [
            "31/12/2999",
            "07/01/3000"
          ],
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
