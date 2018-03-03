const expect = require('chai').expect;
const Stack = require('..').Stack;

describe("testing ", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  describe('Stack instantiation ', () => {
    it('should return an empty array as this.pile', () => {
      expect(stack.pile)
    });

  });

});
