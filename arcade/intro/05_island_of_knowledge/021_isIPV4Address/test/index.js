const expect = require('chai').expect;
const isIPv4Address = require('..').isIPv4Address;

describe('isIPv4Address()', () => {
  const inOut = [
    { in: '172.16.254.1', out: true, context: 'should return true for inputs that follow protocol' },
    { in: '172.316.254.1', out: false, context: 'should return false if numbers beyond 255 are included' },
    { in: '.254.255.0', out: false, context: 'should return false if less than four numbers are present' },
    { in: '1.1.1.1a', out: false, context: 'should return false if alphabetic characters are present' },
    { in: '1', out: false, context: 'should return false if no periods and a single number are present' },
    { in: '0.254.255.0', out: true, context: 'should return true for 4 numbers inclusive between 0 and 255' },
    { in: '1.23.256.255.', out: false, context: 'should return false for one extra period' },
    { in: '1.23.256..', out: false, context: 'should return false for extra periods & 256' },
    { in: '0..1.0', out: false, context: 'should return false for missing numbers between periods' },
    { in: '1.1.1.1.1', out: false, context: 'should return false for more than 4 numbers' },
    { in: '1.256.1.1', out: false, context: 'should return false for 256' },
    { in: 'a0.1.1.1', out: false, context: 'should return false for alphabetic chars' },
    { in: '0.1.1.256', out: false, context: 'should return false for 256' },
    { in: '129380129831213981.255.255.255', out: false, context: 'should return false for nums beyond 255' },
    { in: '255.255.255.255abcdekjhf', out: false, context: 'should return false for letters attached to numbers' },
    { in: '7283728', out: false, context: 'should return false if no float points are present' },
  ];

  const runTest = (input, output, context) => it(context, () => expect(isIPv4Address(input)).to.deep.equal(output));

  inOut.forEach(pair => runTest(pair.in, pair.out, pair.context));
});
