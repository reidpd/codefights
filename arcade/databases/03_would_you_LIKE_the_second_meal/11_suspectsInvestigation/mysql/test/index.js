const expect = require('chai').expect;

// const makeData;
const con = require('../../../../../database_server/connection.js');

// let q = "CREATE TABLE table_1(
//   vendor_id   INT   NOT NULL   UNIQUE   AUTO_INCREMENT,
//   name       VARCHAR(50)   NOT NULL
// );";
// console.log(q);
// con.query(q, (err, res) => {
//   if (err) { throw err }
//
//   console.log(res);
// });


// describe('testing suite for SQL scripts', () => {
//   const tests = [
//     {
//       fn: '', // sqlReturnsCorrectData
//       ins_and_outs: [
//         {
//           cxt: 'simple test',
//           in: [],
//           out: true,
//         },
//       ],
//       run: param => {
//         const cxt = param.fn.name + '() ' + param.cxt;
//         it(cxt, () => {
//           expect(param.fn(...param.in)).to.deep.equal(param.out);
//         });
//       }
//     }/*, {
//       fn: '', // name
//       ins_and_outs: [
//         {
//           cxt: 'simple test',
//           in: [],
//           out: true,
//         },
//       ],
//       run: param => {
//         const cxt = param.fn.name + '() ' + param.cxt;
//         it(cxt, () => {
//           expect(param.fn(...param.in)).to.deep.equal(param.out);
//         });
//       }
//     }
//     */
//   ];
//   tests.forEach((test, testIdx) => {
//     test.fn = fns[testIdx]; // sets functions according to order set in index.js
//     test.ins_and_outs.forEach(params => {
//       params.fn = test.fn;
//       test.run(params);
//     });
//   });
// });
