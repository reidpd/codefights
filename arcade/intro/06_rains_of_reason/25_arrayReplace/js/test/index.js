const expect = require('chai').expect;
const arrayReplace = require('..').arrayReplace;

describe('arrayReplace()', () => {
  const inOut = [
    {
      context: 'should return an array that swaps one element out for another',
      in: {
        arr: [1,2,1],
        elemToReplace: 1,
        subEl: 3
      } , out: [3,2,3] },
    {
      context: 'should be able to handle array.length up to 10',
      in: {
        arr: [1,2,1,2,1,2,1,2,1,2],
        elemToReplace: 1,
        subEl: 3
      } , out: [3,2,3,2,3,2,3,2,3,2] },
    {
      context: 'handles array[i] up to 10',
      in: {
        arr: [10,9,10,9,10,9,10,9,10,9],
        elemToReplace: 10,
        subEl: 3
      } , out: [3,9,3,9,3,9,3,9,3,9] },
    {
      context: 'handles minimum array[i] down to 0 & array.length down to 2',
      in: {
        arr: [0,1],
        elemToReplace: 0,
        subEl: 1
      } , out: [1,1] },
  ];
  inOut.forEach(pair => {
    it(pair.context, () => {
      expect(arrayReplace(pair.in.arr, pair.in.elemToReplace, pair.in.subEl)).to.deep.equal(pair.out);
    });
  })
});
