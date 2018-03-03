const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // hasPathWithGivenSum()
      ins_and_outs: [
        {
          cxt: 'if any one complete path from the binary tree has a sum equal to the one given, then return true',
          in: [
            { // tree
              "value": 4,
              "left": {
                  "value": 1,
                  "left": {
                      "value": -2,
                      "left": null,
                      "right": {
                          "value": 3,
                          "left": null,
                          "right": null
                      }
                  },
                  "right": null
              },
              "right": {
                  "value": 3,
                  "left": {
                      "value": 1,
                      "left": null,
                      "right": null
                  },
                  "right": {
                      "value": 2,
                      "left": {
                          "value": -2,
                          "left": null,
                          "right": null
                      },
                      "right": {
                          "value": -3,
                          "left": null,
                          "right": null
                      }
                  }
              }
            },
            7 //s
          ],
          out: true,
        },{
          cxt: 'if no paths with the given sum can be found, return false',
          in: [
            { // tree
              "value": 4,
              "left": {
                  "value": 1,
                  "left": {
                      "value": -2,
                      "left": null,
                      "right": {
                          "value": 3,
                          "left": null,
                          "right": null
                      }
                  },
                  "right": null
              },
              "right": {
                  "value": 3,
                  "left": {
                      "value": 1,
                      "left": null,
                      "right": null
                  },
                  "right": {
                      "value": 2,
                      "left": {
                          "value": -4,
                          "left": null,
                          "right": null
                      },
                      "right": {
                          "value": -3,
                          "left": null,
                          "right": null
                      }
                  }
              }
            },
            7 // s
          ],
          out: false,
        },{
          cxt: 'if tree is null && s === 0, return true',
          in: [
            null, // tree
            0 // s
          ],
          out: true,
        },{
          cxt: 'if tree is null & s !== 0, return false',
          in: [
            null,
            1
          ],
          out: false,
        },{
          cxt: 'simple test',
          in: [
            { "value": 5, "left": null, "right": null },
            5
          ],
          out: true,
        },{
          cxt: 'negative numbers opposite present paths do not return true',
          in: [
            { "value": 5, "left": null, "right": null },
            -5
          ],
          out: false,
        },{
          cxt: 'simple test',
          in: [
            { "value": 5, "left": null, "right": null },
            0
          ],
          out: false,
        },{
          cxt: 'incomplete paths are disregarded',
          in: [
            {
                "value": 8,
                "left": null,
                "right": {
                    "value": 3,
                    "left": null,
                    "right": null
                }
            },
            8
          ],
          out: false,
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(...param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // findPaths
      ins_and_outs: [
        {
          cxt: 'returns an array of arrays containing all paths of numbers from a binary tree',
          in: [
            {
              value: 1000,
              left: {
                value: 500,
                left: {
                  value: 250,
                  left: null,
                  right: null
                },
                right: {
                  value: 750,
                  left: null,
                  right: null
                }
              },
              right: {
                value: 1500,
                left: {
                  value: 1250,
                  left: null,
                  right: null
                },
                right: {
                  value: 1750,
                  left: null,
                  right: null
                }
              }
            }
          ],
          out: [
            [1000, 500, 250],
            [1000, 500, 750],
            [1000, 1500, 1250],
            [1000, 1500, 1750]
          ],
        },{
          cxt: 'returns [0] if tree === null',
          in: [null],
          out: [0],
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
