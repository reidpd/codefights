const expect = require('chai').expect;
const variableName = require('..').variableName;

describe('variableName()', () => {
  const contexts = [
    'should return false if the input string begins with a ',
    'should return false if the input contains anything other than Latin letters, digits or underscores, including ',
    'should otherwise return true, like in '
  ];

  let tests = [
    [
      { cxt: 'digit - should handle small str', in: '2w2', out: false },
      { cxt: 'digit - should handle big str', in: '2abcdefghi', out: false },
      { cxt: 'space - should handle small str', in: ' bg', out: false },
      { cxt: 'space - should handle big str', in: ' variable2', out: false },
      { cxt: 'capital str', in: 'Blue', out: false },
    ],
    [],
    [
      { cxt: 'simple test 1', in: 'var_2_me', out: true },
      { cxt: 'simple test 2', in: 'variable23', out: true },
      { cxt: 'simple test 3', in: '_var_3_for', out: true },
      { cxt: 'simple test 4', in: 'var_1__Int', out: true }
    ]
  ]
  const unacceptable_chars = ['!', '@', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', ';', ':', "'", "'", '<', '>'];
  unacceptable_chars.forEach(char => tests[1].push({ cxt: char, in: 'vari' + char + 'able', out: false }))

  contexts.forEach((context, cxt_idx) => {
    describe(context, () => {
      const test_collection = tests[cxt_idx];
      test_collection.forEach(test => {
        it(test.cxt, () => expect(variableName(test.in)).to.deep.equal(test.out) );
      })
    });

  })
});
