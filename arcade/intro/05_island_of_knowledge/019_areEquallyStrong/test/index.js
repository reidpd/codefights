const expect = require('chai').expect;
const areEquallyStrong = require('..').areEquallyStrong;

describe('areEquallyStrong()', () => {
  it('output should be a boolean type', () => {
    expect(areEquallyStrong(1,1,1,1)).to.be.a('boolean');
    expect(areEquallyStrong(10,5,10,5)).to.be.a('boolean');
    expect(areEquallyStrong(10,5,10,6)).to.be.a('boolean');
    expect(areEquallyStrong(50,100,50,200)).to.be.a('boolean');
    expect(areEquallyStrong(3,6,3,6)).to.be.a('boolean');
  });

  it('should return true if all weights are the same', () => {
    expect(areEquallyStrong(1,1,1,1)).to.deep.equal(true);
  });

  it('should return true if each persons hands *in either order* can carry an equal amount of weight', () => {
    // const inOut = [
    //   { input: [], output:  },
    //   { input: [], output:  },
    //   { input: [], output:  },
    //   { input: [], output:  },
    //   { input: [], output:  },
    //   { input: [], output:  },
    // ]
    expect(areEquallyStrong(5,10,5,10)).to.deep.equal(true);
    expect(areEquallyStrong(10,5,5,10)).to.deep.equal(true);
  });

  it("should return false if lowest-bearing hand for one person differs from the other's", () => {
    expect(areEquallyStrong(5,10,6,10)).to.deep.equal(false);
    expect(areEquallyStrong(10,5,6,10)).to.deep.equal(false);
  });

  it("should return false if highest-bearing hand for one person differs from the other's", () => {
    expect(areEquallyStrong(5,10,5,11)).to.deep.equal(false);
    expect(areEquallyStrong(5,10,11,5)).to.deep.equal(false);
  });

});
