const expect = require('chai').expect;
const areSimilar = require('..').areSimilar;

describe('areSimilar()', () => {
  const inOut = [
    { input: [[1,2,3], [1,2,3]], output: true },
    { input: [[1,2,3], [2,1,3]], output: true },
    { input: [[1,2,2], [2,1,1]], output: false },
    { input: [[1,1,4], [1,2,3]], output: false },
    { input: [[1,2,3], [1,10,2]], output: false },
    { input: [[2,3,1], [1,3,2]], output: true },
    { input: [[2,3,9], [10,3,2]], output: false },
    { input: [[4,6,3], [3,4,6]], output: false },
    { input: [[832, 998, 148, 570, 533, 561, 894, 147, 455, 279], [832, 998, 148, 570, 533, 561, 455, 147, 894, 279]], output: true },
    { input: [[832, 998, 148, 570, 533, 561, 894, 147, 455, 279], [832, 570, 148, 998, 533, 561, 455, 147, 894, 279]], output: false }
  ]
  it('output should be a boolean value', () => {
    inOut.forEach(pair => expect(areSimilar(pair.input)).to.be.a('boolean'))
  });
  it('output should reflect if it is possible to retain equal weight between arrays by swapping at most one value between them', () => {
    inOut.forEach(pair => expect(areSimilar(pair.input)).to.deep.equal(output));
  });
  it('output returns true for arrays in which all elements at x index are the same', () => {
    expect(areSimilar(inOut[0].input)).to.deep.equal(true);
  });
  it('output returns true for arrays in which only two elements from a single array are swapped in order for every item in both arrays at index X will be the same', () => {
    expect(areSimilar(inOut[1].input)).to.deep.equal(true);
  });

  it('swapped numbers dont have to be right next to each other', () => {
    expect(areSimilar(inOut[5].input)).to.deep.equal(true);
  });


});
