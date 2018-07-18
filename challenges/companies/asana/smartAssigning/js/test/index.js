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
            ["John", "Martin"], // names
            [false, false], // statuses
            [2, 1], // projects
            [16, 5], // tasks
          ],
          out: "Martin",
        },{
          cxt: 'simple test',
          in: [
            ["John", "Martin"], // names
            [false, true], // statuses
            [2, 1], // projects
            [6, 5], // tasks
          ],
          out: "John",
        },{
          cxt: 'simple test',
          in: [
            ["John", "Martin"], // names
            [false, false], // statuses
            [2, 1], // projects
            [6, 6], // tasks
          ],
          out: "John",
        },{
          cxt: 'simple test',
          in: [
            ["John"], // names
            [false], // statuses
            [10], // projects
            [10], // tasks
          ],
          out: "John",
        },{
          cxt: 'simple test',
          in: [
            ["John", "Martin", "Luke"], // names
            [false, true, false], // statuses
            [1, 0, 2], // projects
            [2, 0, 1], // tasks
          ],
          out: "Luke",
        },{
          cxt: 'simple test',
          in: [
            ["John", "Martin"], // names
            [false, false], // statuses
            [10, 9], // projects
            [10, 9], // tasks
          ],
          out: "Martin",
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
