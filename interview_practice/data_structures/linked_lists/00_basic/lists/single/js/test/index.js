const expect = require('chai').expect;
// const node = require('../../../../nodes/js');
const {List, node} = require('..');
console.log(List);

describe("testing ", () => {
  let list;

  beforeEach(() => {
    list = new List();
  });


  describe('singly-linked lists', () => {
    it('properly defines a blank List instance when a new List is declared', () => {
      expect(list.head).to.deep.equal(null);
      // expect(list.tail).to.deep.equal(null);
      expect(list._length).to.deep.equal(0);
    });

    describe('List.push(item)', () => {
      it('should add a new node with the given item data to the pre-existing list', () => {
        list.push(1);
        expect(list.head.data).to.deep.equal(1);
        list.push(2);
        expect(list.head.next.data).to.deep.equal(2);
        list.push(3);
        expect(list.head.next.next.data).to.deep.equal(3);
      });
      it('should increment this._length by 1', () => {
        list.push(node.createSingle(1));
        expect(list._length).to.deep.equal(1);
      });
    });


    describe('List.pop()', () => {
      it('returns the final node in the list prior to deletion', () => {
        const pushVal = {val:1};
        list.push(pushVal);
        const returnVal = list.pop();
        expect(returnVal).to.deep.equal(node.createSingle(pushVal));
      });
      it('removes the final node & sets the previous *next* pointer to null on second reference', () => {
        list.fill([0,1,2]);
        const removed_node = list.pop();
        expect(list.head.next.next).to.deep.equal(null);
      });

      it('reduces this._length by 1', () => {
        list.push({val:1});
        list.pop();
        expect(list._length).to.deep.equal(0);
      });
    });

    describe('List.unshift(item)', () => {
      it('increases this._length by 1', () => {
        list.fill([1,2,3]);
        list.unshift(0);
        expect(list._length).to.deep.equal(4);
      });

      it('returns the newly increased length of the list', () => {
        list.fill([1,2,3]);
        const returnVal = list.unshift(0);
        expect(returnVal).to.deep.equal(4);
      });

      it('should replace list.head.data with the input item', () => {
        list.fill([1,2,3]);
        list.unshift(0);
        expect(list.head.data).to.deep.equal(0);
      });

    });

    describe('List.shift()', () => {
      it('returns this.head.data', () => {
        list.fill([1,2,3]);
        const returnVal = list.shift();
        expect(returnVal).to.deep.equal(1);
      });

      it('removes the first node from the list while reducing the length by 1', () => {
        list.fill([1,2,3]);
        const returnVal = list.shift();
        expect(list.head.data).to.deep.equal(2);
      });

      it('reduces this._length by 1', () => {
        list.fill([1,2,3]);
        list.shift();
        expect(list._length).to.deep.equal(2);
      });
    });

    describe('List.get(idx)', () => {
      it('returns the data at the indexETH node in the list for positive-integer inputs', () => {
        list.fill([1,2,3,4,5,6]);
        expect(list.get(2)).to.deep.equal(3);
      });
      it('returns the data at the node that is at the (this._length + index)ETH node in the list for negative-integer inputs', () => {
        list.fill([1,2,3,4,5,6]);
        expect(list.get(-1)).to.deep.equal(6);
      });
    });

    describe('List.set(index, val)', () => {
      it('returns undefined if the index provided doesnt fall below this._length or above (this._length * -1)', () => {
        list.fill([1,2,3,4,5,6]);
        expect(list.set(6,7)).to.deep.equal(undefined);
      });

      it('returns this with the indexTH node in the list (for positive input) updated', () => {
        list.fill([1,2,3,4,5,6]);
        const comparison = new List().fill([1,2,8,4,5,6]);
        const returnVal = list.set(2, 8);
        expect(returnVal).to.deep.equal(comparison);
      });
      it('sets the indexTH node in the list (for positive input) on second reference', () => {
        list.fill([1,2,3,4,5,6]);
        list.set(2, 8);
        expect(list.head.next.next.data).to.deep.equal(8)
      });
      it('returns this with the (this._length + index)TH node in the list (for negative input) updated', () => {
        list.fill([1,2,3,4,5,6]);
        const comparison = new List().fill([1,2,3,4,8,6]);
        const returnVal = list.set(-2, 8);
        expect(returnVal).to.deep.equal(comparison);
      });
      it('sets the indexTH node in the list (for positive input) on second reference', () => {
        list.fill([1,2,3,4,5,6]);
        list.set(-5, 8);
        expect(list.head.next.data).to.deep.equal(8)
      });
    });

    describe('List.fill(arr)', () => {
      it('should push each item in the input array onto the end of the list as a new node', () => {
        list.push(0);
        list.fill([1,2,3]);
        expect(list.head.data).to.deep.equal(0);
        expect(list.head.next.data).to.deep.equal(1);
        expect(list.head.next.next.data).to.deep.equal(2);
        expect(list.head.next.next.next.data).to.deep.equal(3);
      });
      it('should add the input array length to this._length', () => {
        list.push(1);
        expect(list._length).to.deep.equal(1);
        list.fill([2,3,4]);
        expect(list._length).to.deep.equal(4);
      });
    });

    describe('List.clear()', () => {
      it('returns the empty list', () => {
        list.push(1); list.push(2); list.push(3);
        expect(list._length).to.deep.equal(3);
        expect(list.clear()).to.deep.equal(new List());
      });
      it('reduces this._length to 0', () => {
        list.push(1); list.push(2); list.push(3);
        expect(list._length).to.deep.equal(3);
        list.clear();
        expect(list._length).to.deep.equal(0);
      });
    });

    describe('List.remove(index)', () => {
      it('returns the data within the node at the specified POSITIVE index which will be henceforth removed from the list', () => {
        list.fill([0,1,2,3]);
        expect(list.remove(1)).to.deep.equal(1)
      });
      it('returns the data within the node at the specified NEGATIVE index which will be henceforth removed from the list', () => {
        list.fill([0,1,2,3]);
        expect(list.remove(-2)).to.deep.equal(2)
      });
      it('removes the element at the specified POSITIVE index on second reference', () => {
        list.fill([0,1,2,3]);
        list.remove(1);
        expect(list.head.next.data).to.deep.equal(2);
      });
      it('removes the element at the specified NEGATIVE index on second reference', () => {
        list.fill([0,1,2,3]);
        list.remove(-2);
        expect(list.head.next.next.data).to.deep.equal(3);
      });
      it('reduces this._length by 1', () => {
        list.fill([0,1,2,3]);
        list.remove(1);
        expect(list._length).to.deep.equal(3);
      });
      it('returns undefined if the specified POSITIVE index does not exist within the list', () => {
        list.fill([0,1,2,3]);
        expect(list.remove(4)).to.deep.equal(undefined);
      });
      it('returns undefined if the specified NEGATIVE index does not exist within the list', () => {
        list.fill([0,1,2,3]);
        expect(list.remove([-4]));
      });
    });

    describe('List.reverse()', () => {
      it('returns a new List in which the order of nodes is reversed', () => {
        list.fill([0,1,2,3,4,5])
        const reversal = new List().fill([5,4,3,2,1,0]);
        expect(list.reverse()).to.deep.equal(reversal);
      });
      it('reverses the list on second reference', () => {
        list.fill([0,1,2,3]);
        list.reverse();
        expect(list.head.data).to.deep.equal(3);
        expect(list.head.next.data).to.deep.equal(2);
        expect(list.head.next.next.data).to.deep.equal(1);
        expect(list.head.next.next.next.data).to.deep.equal(0);
      });
      it('reverses the list on second reference if the length is equal to 1', () => {
        list.fill([0]);
        list.reverse();
        expect(list.head.data).to.deep.equal(0);
      });
      it('does not mutate this._length', () => {
        list.fill([0,1,2,3]);
        list.reverse();
        expect(list._length).to.deep.equal(4);
      });
      it('returns null if this._length is equal to zero', () => {
        expect(list.reverse()).to.deep.equal(null)
      });

    });


  });


  // const tests = [
  //   {
  //     fn: '', // list.createFromArr(array)
  //     ins_and_outs: [
  //       {
  //         cxt: 'returns a singly-linked list from an array',
  //         in: [
  //           [1,2,3]
  //         ],
  //         out: node.createSingle(1, node.createSingle(2, node.createSingle(3))),
  //       },
  //     ],
  //     run: param => {
  //       const cxt = param.fn.name + '() ' + param.cxt;
  //       it(cxt, () => {
  //         expect(param.fn(...param.in)).to.deep.equal(param.out);
  //       });
  //     }
  //   }, {
  //     fn: '', // traverseHeadToProp()
  //     ins_and_outs: [
  //       {
  //         cxt: 'should traverse the node down the tree & return that portion',
  //         in: [
  //           node.createSingle(1, node.createSingle(2, node.createSingle(3))),
  //           'val',
  //           3,
  //         ],
  //         out: node.createSingle(3),
  //       },
  //     ],
  //     run: param => {
  //       console.log(param);
  //       const cxt = param.fn.name + '() ' + param.cxt;
  //       it(cxt, () => {
  //         expect(param.fn(...param.in)).to.deep.equal(param.out);
  //       });
  //     }
    /*}, {
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
  //];
  // tests.forEach((test, testIdx) => {
  //   test.fn = fns[testIdx]; // sets functions according to order set in index.js
  //   test.ins_and_outs.forEach(params => {
  //     params.fn = test.fn;
  //     test.run(params);
  //   });
  // });
});
