const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // pairOfShoes(shoes)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [
            [0,21],
            [1,23],
            [1,21],
            [0,23]
          ],
          out: true,
        },{
          cxt: 'simple test',
          in: [
            [0,21],
            [1,23],
            [1,21],
            [1,23]
          ],
          out: false,
        },{
          cxt: 'simple test',
          in: [
            [0,23],
            [1,21],
            [1,23],
            [0,21],
            [1,22],
            [0,22]
          ],
          out: true,
        },{
          cxt: 'simple test',
          in: [
            [0,23],
            [1,21],
            [1,23],
            [0,21]
          ],
          out: true,
        },{
          cxt: 'simple test',
          in: [
            [0,100],
            [1,1],
            [1,100],
            [0,1]
          ],
          out: true,
        },{
          cxt: 'simple test',
          in: [[0,23]],
          out: false,
        },{
          cxt: 'simple test',
          in: [
            [0,23],
            [1,23]
          ],
          out: true,
        },{
          cxt: 'simple test',
          in: [
            [0,23],
            [1,22]
          ],
          out: false,
        },{
          cxt: 'simple test',
          in: [
            [1,81],
            [0,55],
            [1,92],
            [0,96],
            [0,19],
            [1,94],
            [1,45],
            [0,37],
            [0,55],
            [1,21],
            [1,48],
            [0,53],
            [0,79],
            [1,56],
            [0,10],
            [0,85],
            [0,78],
            [0,66],
            [0,99],
            [0,68],
            [0,28],
            [1,3],
            [0,95],
            [0,52],
            [1,73],
            [0,19],
            [0,38],
            [1,72],
            [1,28],
            [1,9],
            [1,44],
            [1,10],
            [0,75],
            [0,2],
            [1,17],
            [0,4],
            [0,76],
            [0,13],
            [0,80],
            [1,91],
            [0,89],
            [0,4],
            [0,8],
            [0,44],
            [1,36],
            [1,50],
            [1,44],
            [0,12],
            [0,81],
            [1,87],
            [0,48],
            [0,53],
            [1,92],
            [0,55],
            [0,74],
            [0,48],
            [0,83],
            [0,83],
            [1,71],
            [1,84],
            [0,20],
            [1,97],
            [1,57],
            [1,74],
            [1,46],
            [1,14],
            [1,66],
            [0,43],
            [1,26],
            [0,94],
            [0,63],
            [0,31],
            [0,87],
            [1,19],
            [1,42],
            [1,56],
            [0,4],
            [0,80],
            [0,3],
            [1,1],
            [1,26],
            [1,71],
            [0,83],
            [0,78],
            [0,44],
            [0,15],
            [0,77],
            [1,52],
            [1,87],
            [1,89],
            [1,6],
            [1,84],
            [0,12],
            [0,50],
            [0,87],
            [1,54],
            [1,80],
            [1,82],
            [0,47],
            [1,34]
          ],
          out: false,
        },{
          cxt: 'simple test',
          in: [
            [1,21],
            [1,54],
            [0,65],
            [1,4],
            [0,93],
            [0,74],
            [0,25],
            [0,70],
            [1,11],
            [1,35],
            [1,7],
            [0,6],
            [0,46],
            [1,45],
            [0,26],
            [0,62],
            [1,59],
            [0,7],
            [0,28],
            [1,34],
            [0,4],
            [1,93],
            [0,89],
            [1,61],
            [0,90],
            [0,29],
            [1,72],
            [1,52],
            [1,87],
            [1,70],
            [1,17],
            [1,85],
            [0,52],
            [1,79],
            [1,61],
            [1,40],
            [0,70],
            [1,21],
            [0,49],
            [1,17],
            [1,6],
            [0,54],
            [0,10],
            [1,29],
            [1,4],
            [1,58],
            [0,63],
            [0,73],
            [1,2],
            [0,87],
            [0,25],
            [1,70],
            [0,35],
            [0,93],
            [1,53],
            [0,35],
            [0,65],
            [0,4],
            [0,61],
            [1,46],
            [0,11],
            [1,98],
            [0,82],
            [1,65],
            [0,34],
            [0,87],
            [0,85],
            [1,77],
            [0,78],
            [1,100],
            [0,79],
            [1,35],
            [0,34],
            [1,29],
            [0,18],
            [1,73],
            [1,33],
            [0,30],
            [1,23],
            [0,14],
            [0,66],
            [0,61],
            [1,19],
            [0,29],
            [1,26],
            [0,19],
            [1,28],
            [0,45],
            [0,40],
            [1,28],
            [0,98],
            [0,2],
            [1,23],
            [1,87],
            [0,59],
            [1,4],
            [1,52],
            [1,89],
            [1,70],
            [0,2],
            [1,10],
            [0,72],
            [1,34],
            [0,17],
            [0,50],
            [0,34],
            [1,2],
            [0,70],
            [1,25],
            [1,65],
            [0,22],
            [1,65],
            [1,8],
            [1,48],
            [0,94],
            [1,50],
            [1,18],
            [0,52],
            [0,35],
            [1,58],
            [0,40],
            [0,53],
            [1,68],
            [1,43],
            [0,89],
            [0,21],
            [0,100],
            [0,23],
            [1,93],
            [1,94],
            [1,30],
            [1,25],
            [1,34],
            [0,79],
            [1,63],
            [0,43],
            [0,4],
            [1,82],
            [1,69],
            [0,77],
            [0,18],
            [1,35],
            [0,69],
            [1,72],
            [1,96],
            [0,13],
            [1,90],
            [0,41],
            [1,62],
            [1,14],
            [0,81],
            [1,21],
            [0,55],
            [1,18],
            [1,41],
            [0,29],
            [1,49],
            [0,30],
            [0,21],
            [1,5],
            [0,8],
            [0,63],
            [0,18],
            [1,30],
            [1,66],
            [0,73],
            [0,23],
            [1,78],
            [1,18],
            [1,74],
            [1,31],
            [0,84],
            [0,10],
            [0,72],
            [0,65],
            [1,89],
            [0,31],
            [0,68],
            [1,73],
            [1,84],
            [0,96],
            [0,28],
            [1,46],
            [0,46],
            [0,33],
            [1,55],
            [1,79],
            [1,10],
            [0,58],
            [1,22],
            [0,17],
            [1,40],
            [0,21],
            [1,63],
            [0,48],
            [0,58],
            [1,29],
            [1,81],
            [1,13],
            [0,5]
          ],
          out: true,
        },{
          cxt: 'simple test',
          in: [
            [1,1],
            [1,1],
            [1,3],
            [0,2],
            [0,2],
            [0,1]
          ],
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
