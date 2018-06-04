const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // simplifyPath()
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: "/home/a/./x/../b//c/",
          out: "/home/a/b/c",
        },{
          cxt: 'double-periods will simplify the path to parent directories accordingly',
          in: "/a/b/c/../..",
          out: "/a",
        },{
          cxt: 'paths that only specify to refer to the parent directory will return just the root directory',
          in: "/../",
          out: "/",
        },{
          cxt: 'a single forward slash will return a single forward slash',
          in: "/",
          out: "/",
        },{
          cxt: 'double-forward-slashes are replaced with single ones, and "/./" combinations return "/"',
          in: "//a//b//./././c",
          out: "/a/b/c",
        },{
          cxt: 'simple test',
          in: "a/../../b/",
          out: "/b",
        },{
          cxt: 'simple test',
          in: "a/b/../c/d/../../e/../../",
          out: "/",
        },{
          cxt: 'simple test',
          in: "/.././///",
          out: "/",
        },{
          cxt: 'simple test',
          in: "/cHj/T//",
          out: "/cHj/T",
        },{
          cxt: 'simple test',
          in: "/////..///K/BruP/RMplU/././",
          out: "/K/BruP/RMplU",
        },{
          cxt: 'simple test',
          in: "/mpJN/..///../../ubYgf/tFM/",
          out: "/ubYgf/tFM",
        },{
          cxt: 'simple test',
          in: "/N/cKX/bdrC/./ozFyd/NyuwO/",
          out: "/N/cKX/bdrC/ozFyd/NyuwO",
        },{
          cxt: 'simple test',
          in: "/home/",
          out: "/home",
        },{
          cxt: 'simple test',
          in: "/AagbK/////iavh/M/rmKaS/tXD/././lND//",
          out: "/AagbK/iavh/M/rmKaS/tXD/lND",
        },{
          cxt: 'simple test',
          in: "/oCTY/XJwyB/zA/qgfp/RQFl/kY/./Pa/nth/",
          out: "/oCTY/XJwyB/zA/qgfp/RQFl/kY/Pa/nth",
        },{
          cxt: 'simple test',
          in: "/home//foo/",
          out: "/home/foo",
        },{
          cxt: 'simple test',
          in: "/a/./b/../../c/",
          out: "/c",
        },{
          cxt: 'simple test',
          in: "a/b/../c/d/../../e/../../a/",
          out: "/a",
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
