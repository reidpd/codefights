const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // perm(array)
      ins_and_outs: [
        {
          cxt: 'outputs all permutations of ints',
          in: [1,2,3],
          out: [
            [1,2,3],
            [2,1,3],
            [3,1,2],
            [1,3,2],
            [2,3,1],
            [3,2,1],
          ],
        },
        {
          cxt: 'outputs all permutations of strings',
          in: ['a', 'b', 'c'],
          out: [
            ['a', 'b', 'c'],
            ['b', 'a', 'c'],
            ['c', 'a', 'b'],
            ['a', 'c', 'b'],
            ['b', 'c', 'a'],
            ['c', 'b', 'a']
          ]
        }
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(param.in).every(arr => param.out.some(outArr => {
              const strings = item => item.toString();
              return outArr.map(strings).join('') === arr.map(strings).join('');
            })
          )).to.deep.equal(true);
        });
      }
    }, {
      fn: '', // stringsRearrangement
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: ["aba", "bbb", "bab"],
          out: false,
        }, {
          cxt: 'simple test',
          in: ["ab", "bb", "aa"],
          out: true,
        }, {
          cxt: 'simple test',
          in: ['q', 'q'],
          out: false,
        }, {
          cxt: 'simple test',
          in: ["zzzzab", "zzzzbb", "zzzzaa"],
          out: true,
        }, {
          cxt: 'simple test',
          in: ["ab", "ad", "ef", "eg"],
          out: false,
        }, {
          cxt: 'simple test',
          in: ["abc", "bef", "bcc", "bec", "bbc", "bdc"],
          out: true,
        }, {
          cxt: 'simple test',
          in: ["abc", "abx", "axx", "abc"],
          out: false,
        }, {
          cxt: 'simple test',
          in: ["abc", "abx", "axx", "abx", "abc"],
          out: true,
        }, {
          cxt: 'simple test',
          in: ['f', 'g', 'a', 'h'],
          out: true,
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(param.in)).to.be.a('boolean');
          expect(param.fn(param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // rearrangementWorks()
      ins_and_outs: [
        {
          cxt: 'this arrangement should pass',
          in: ["aa", "ab", "bb"],
          out: true,
        }, {
          cxt: 'this arrangement should fail because no characters differ',
          in: ['q', 'q'],
          out: false,
        }, {
          cxt: 'this arrangement should fail between a[1] && a[2] because two characters change between them',
          in: ["zzzzab", "zzzzbb", "zzzzaa"],
          out: false,
        }
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(param.in)).to.be.a('boolean');
          expect(param.fn(param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // onlyOneCharDiff()
      ins_and_outs: [
        {
          cxt: 'strings that do not differ return false',
          in: { a: 'aaa', b: 'aaa' }, out: false
        }, {
          cxt: 'strings that differ by more than one char return false',
          in: { a: 'abb', b: 'aaa' }, out: false
        }, {
          cxt: 'strings that differ by only one char return true',
          in: { a: 'aaa', b: 'aba' }, out: true
        }
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(param.in.a, param.in.b)).to.be.a('boolean');
          expect(param.fn(param.in.a, param.in.b)).to.deep.equal(param.out);
        });
      }
    }
  ];
  tests.forEach((test, idx) => test.fn = fns[idx]); // sets functions according to order set in index.js
  tests.forEach((test, testIdx) => {
    test.ins_and_outs.forEach(params => {
      params.fn = test.fn;
      test.run(params);
    });
  });
});
