const expect = require('chai').expect;
const Hash = require('..').Hash;

describe("testing ", () => {
  let hash;

  describe('Hash instantiation testing', () => {
    it('should declare an empty obj as this.head if no base prop is provided', () => {
      hash = new Hash();
      expect(hash.head).to.deep.equal(Object.assign({}));
    });

    it('should instantiate a previous obj if provided, and set it to this.head', () => {
      let obj = { foo: 'bar' };
      hash = new Hash(obj);
      expect(hash.head).to.deep.equal(obj);
    });

    it('should fill an empty hash with props & vals, if supplied', () => {
      let props = ['prop_a', 'prop_b', 'prop_c'], vals = ['val_a', 'val_b', 'val_c'];
      hash = new Hash({}, props, vals);
      props.forEach((prop, idx) => {
        expect(hash.head[prop]).to.deep.equal(vals[idx]);
      })
    });


  });

  describe('Hash.fill(props, vals)', () => {
    // takes two arrays, props & vals, which each define properties and their values based on index
    it('should fill hash with properties and set values to them according to index', () => {
      hash = new Hash();
      let props = ['prop_a', 'prop_b', 'prop_c'], vals = ['val_a', 'val_b', 'val_c'];
      hash.fill(props, vals);
      props.forEach((prop, idx) => {
        expect(hash.head[prop]).to.deep.equal(vals[idx]);
      })
    });

    it('should set nested objects if the array structure works', () => {
      let props = ['prop_a'], vals = [[['inner_prop'], ['inner_val']]];
      hash = new Hash({}, props, vals);
      // hash.fill(props, vals);
      console.log('hash.head', hash);
      expect(hash.head.prop_a).to.deep.equal({inner_prop: 'inner_val'});
    });

  });

});
