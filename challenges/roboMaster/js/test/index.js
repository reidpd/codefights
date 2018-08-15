const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // roboMaster
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [
            ["blue 1","red 3","17mm"],
            ["blue 2","red 3","42mm"],
            ["red 2","blue 1","42mm"],
            ["blue 2","red 1","42mm"],
            ["blue 2","red 5","42mm"],
            ["red 2","blue 1","42mm"],
            ["red 5","blue base","17mm"],
            ["blue 2","red 1","17mm"]
          ],
          out: "red",
        },{
          cxt: 'simple test',
          in: [
            ["red 1","blue base","17mm"],
 ["red 2","blue base","42mm"],
 ["blue 2","red 3","42mm"],
 ["blue 2","red 3","42mm"],
 ["blue 4","red 2","17mm"],
 ["blue 2","red 4","42mm"]
          ],
          out: "blue",
        },{
          cxt: 'simple test',
          in: [
            ["red 4","blue 1","17mm"],
 ["blue 1","red 5","17mm"]
          ],
          out: "draw",
        },{
          cxt: 'simple test',
          in: [
            ["red 5","blue 1","17mm"],
 ["blue 4","red 2","17mm"],
 ["red 1","blue 4","17mm"],
 ["red 5","blue 4","17mm"],
 ["blue 1","red 4","17mm"],
 ["red 5","blue 1","17mm"],
 ["blue 5","red 2","17mm"],
 ["red 1","blue 4","17mm"],
 ["blue 5","red 3","17mm"],
 ["red 2","blue 2","42mm"],
 ["red 2","blue base","17mm"],
 ["blue 4","red 2","17mm"],
 ["red 4","blue 5","17mm"],
 ["red 1","blue 1","17mm"],
 ["blue 5","red 3","17mm"],
 ["blue 2","red 3","17mm"],
 ["blue 4","red 4","17mm"],
 ["blue 2","red base","17mm"],
 ["red 5","blue 4","17mm"],
 ["blue 4","red base","17mm"],
 ["blue 1","red 2","17mm"],
 ["red 4","blue 2","17mm"],
 ["red 5","blue 4","17mm"],
 ["blue 1","red 2","17mm"],
 ["red 2","blue 2","42mm"],
 ["blue 2","red 3","17mm"],
 ["blue 2","red 3","42mm"],
 ["red 5","blue 2","17mm"],
 ["blue 1","red 1","17mm"],
 ["blue 1","red base","17mm"],
 ["blue 2","red 2","42mm"],
 ["blue 4","red 1","17mm"],
 ["blue 4","red 3","17mm"],
 ["blue 4","red 4","17mm"],
 ["blue 4","red 4","17mm"],
 ["blue 5","red base","17mm"]
          ],
          out: "blue",
        },{
          cxt: 'simple test',
          in: [
            ["blue 5","red 3","17mm"],
 ["blue 5","red 1","17mm"],
 ["red 1","blue 3","17mm"],
 ["red 5","blue 5","17mm"],
 ["blue 5","red 3","17mm"],
 ["blue 1","red 4","17mm"],
 ["red 4","blue 1","17mm"],
 ["blue 5","red base","17mm"],
 ["red 2","blue 3","17mm"],
 ["red 5","blue 3","17mm"],
 ["red 1","blue 1","17mm"],
 ["blue 5","red 5","17mm"],
 ["red 5","blue 1","17mm"],
 ["blue 1","red 1","17mm"],
 ["red 5","blue 5","17mm"],
 ["red 4","blue 3","17mm"],
 ["blue 1","red 3","17mm"],
 ["blue 1","red 2","17mm"],
 ["red 5","blue 3","17mm"],
 ["red 1","blue 4","17mm"],
 ["red 4","blue base","17mm"],
 ["red 4","blue 2","17mm"],
 ["blue 2","red 5","42mm"],
 ["blue 1","red 1","17mm"],
 ["red 4","blue 2","17mm"],
 ["red 2","blue 4","17mm"],
 ["red 2","blue 3","17mm"],
 ["blue 4","red 2","17mm"],
 ["blue 5","red base","17mm"],
 ["blue 2","red 4","42mm"],
 ["blue 1","red 4","17mm"],
 ["red 5","blue 4","17mm"],
 ["red 5","blue 2","17mm"],
 ["blue 4","red 1","17mm"],
 ["red 4","blue 5","17mm"],
 ["blue 5","red 4","17mm"],
 ["red 1","blue 3","17mm"],
 ["red 4","blue 5","17mm"],
 ["blue 2","red 1","42mm"],
 ["red 5","blue 2","17mm"],
 ["blue 4","red 1","17mm"],
 ["blue 4","red 2","17mm"],
 ["red 1","blue 5","17mm"],
 ["blue 2","red base","17mm"],
 ["red 5","blue 2","17mm"],
 ["red 5","blue 2","17mm"],
 ["blue 2","red 5","17mm"],
 ["red 1","blue 2","17mm"],
 ["blue 4","red 5","17mm"],
 ["blue 2","red 3","17mm"],
 ["blue 4","red 2","17mm"],
 ["red 5","blue 2","17mm"],
 ["blue 4","red 3","17mm"],
 ["blue 2","red 3","17mm"],
 ["red 1","blue base","17mm"],
 ["red 4","blue 2","17mm"],
 ["red 4","blue 2","17mm"],
 ["red 2","blue 1","42mm"],
 ["red 1","blue 4","17mm"],
 ["red 4","blue base","17mm"],
 ["blue 1","red 4","17mm"],
 ["blue 2","red 2","17mm"],
 ["blue 2","red 1","42mm"],
 ["blue 2","red 2","42mm"],
 ["red 2","blue 3","42mm"],
 ["red 4","blue base","17mm"],
 ["red 2","blue 5","17mm"],
 ["red 4","blue 2","17mm"],
 ["blue 5","red 2","17mm"],
 ["blue 5","red 2","17mm"],
 ["blue 5","red 4","17mm"],
 ["blue 2","red 2","42mm"],
 ["blue 5","red 2","17mm"],
 ["red 2","blue 2","42mm"],
 ["red 4","blue 5","17mm"],
 ["blue 4","red 5","17mm"],
 ["blue 1","red 3","17mm"],
 ["red 4","blue 5","17mm"],
 ["red 4","blue 2","17mm"],
 ["blue 2","red 5","17mm"],
 ["blue 1","red 5","17mm"],
 ["red 4","blue 1","17mm"],
 ["blue 4","red 5","17mm"],
 ["red 5","blue 4","17mm"],
 ["blue 1","red 5","17mm"],
 ["blue 5","red 2","17mm"],
 ["red 2","blue base","17mm"],
 ["red 2","blue 2","17mm"],
 ["blue 2","red 3","17mm"],
 ["red 4","blue 5","17mm"],
 ["red 4","blue 5","17mm"],
 ["blue 5","red 3","17mm"],
 ["red 2","blue 1","17mm"],
 ["blue 1","red 3","17mm"],
 ["blue 2","red 3","17mm"],
 ["red 4","blue 1","17mm"],
 ["blue 5","red 2","17mm"],
 ["red 5","blue 2","17mm"],
 ["blue 5","red 4","17mm"],
 ["red 2","blue base","17mm"],
 ["blue 5","red 2","17mm"],
 ["red 5","blue 1","17mm"],
 ["red 5","blue base","17mm"],
 ["blue 2","red 2","42mm"],
 ["blue 1","red 4","17mm"],
 ["red 5","blue 1","17mm"],
 ["blue 5","red base","17mm"],
 ["blue 1","red 3","17mm"],
 ["blue 1","red 3","17mm"],
 ["blue 2","red 3","42mm"],
 ["blue 1","red 5","17mm"],
 ["red 5","blue 5","17mm"],
 ["red 5","blue 5","17mm"],
 ["red 5","blue 4","17mm"],
 ["blue 5","red 3","17mm"],
 ["blue 2","red 3","42mm"],
 ["blue 2","red 4","17mm"],
 ["blue 4","red 4","17mm"],
 ["red 4","blue 1","17mm"],
 ["red 5","blue 5","17mm"],
 ["red 5","blue 3","17mm"],
 ["blue 4","red 3","17mm"],
 ["blue 2","red 3","42mm"],
 ["red 5","blue 2","17mm"],
 ["red 5","blue 2","17mm"],
 ["blue 2","red 3","42mm"],
 ["blue 5","red 5","17mm"],
 ["blue 2","red 3","42mm"],
 ["blue 4","red base","17mm"],
 ["red 4","blue 3","17mm"],
 ["blue 1","red 3","17mm"],
 ["red 4","blue 3","17mm"],
 ["blue 1","red 3","17mm"],
 ["blue 1","red 4","17mm"],
 ["blue 4","blue 2","17mm"],
 ["blue 4","red base","17mm"]
          ],
          out: "blue",
        },{
          cxt: 'simple test',
          in: [
            ["red 4","blue base","17mm"],
 ["blue 5","red 2","17mm"],
 ["red 5","blue 4","17mm"],
 ["blue 1","red 4","17mm"],
 ["red 1","blue 2","17mm"],
 ["red 2","blue 3","42mm"],
 ["red 4","blue base","17mm"],
 ["red 2","blue base","42mm"],
 ["red 1","blue 2","17mm"],
 ["red 2","blue 2","17mm"],
 ["blue 1","red base","17mm"],
 ["red 4","blue 4","17mm"],
 ["blue 2","red 4","42mm"],
 ["red 4","blue 4","17mm"],
 ["blue 2","red 5","42mm"],
 ["red 5","blue 1","17mm"],
 ["blue 4","red base","17mm"],
 ["red 4","blue 3","17mm"],
 ["blue 4","red 4","17mm"],
 ["blue 4","red 4","17mm"],
 ["red 5","blue 4","17mm"],
 ["blue 4","red 1","17mm"],
 ["blue 2","red 1","42mm"],
 ["blue 4","red 3","17mm"],
 ["blue 4","red 4","17mm"],
 ["blue 1","red 4","17mm"],
 ["red 5","blue base","17mm"],
 ["red 1","blue 1","17mm"],
 ["blue 5","red 1","17mm"],
 ["red 5","blue 4","17mm"],
 ["red 4","blue 2","17mm"],
 ["blue 1","red 2","17mm"],
 ["blue 1","red 2","17mm"],
 ["red 1","blue 3","17mm"],
 ["blue 1","red 1","17mm"],
 ["red 2","blue 4","17mm"],
 ["red 5","blue 2","17mm"],
 ["blue 2","red 2","42mm"],
 ["red 2","blue 4","42mm"],
 ["red 2","blue 3","42mm"],
 ["blue 4","red 4","17mm"],
 ["blue 2","red 1","17mm"],
 ["blue 1","red 5","17mm"],
 ["blue 5","red base","17mm"],
 ["red 1","blue base","17mm"],
 ["red 5","blue 5","17mm"],
 ["blue 5","red 2","17mm"],
 ["blue 1","red 4","17mm"],
 ["blue 1","red 1","17mm"],
 ["blue 1","red base","17mm"],
 ["blue 2","red 1","42mm"],
 ["red 2","blue 1","42mm"],
 ["blue 2","red 2","17mm"],
 ["red 2","blue 4","42mm"],
 ["blue 2","red 3","17mm"],
 ["blue 1","red 2","17mm"],
 ["red 4","blue base","17mm"],
 ["red 5","blue 2","17mm"],
 ["red 4","blue 5","17mm"]
          ],
          out: "red",
        },{
          cxt: 'simple test',
          in: [
            ["blue 5","red 3","17mm"],
 ["red 1","blue 2","17mm"],
 ["red 2","blue 1","42mm"],
 ["red 2","blue 5","17mm"],
 ["red 1","blue 1","17mm"],
 ["red 1","blue 3","17mm"],
 ["blue 2","red 2","42mm"],
 ["red 4","blue 2","17mm"],
 ["red 2","blue 2","42mm"]
          ],
          out: "red",
        },{
          cxt: 'simple test',
          in: [
            ["red 1","blue 1","17mm"],
 ["blue 5","red 5","17mm"],
 ["red 2","blue 1","17mm"],
 ["blue 1","red 2","17mm"],
 ["blue 1","red 4","17mm"],
 ["blue 2","red 1","17mm"],
 ["red 4","blue base","17mm"],
 ["blue 5","red base","17mm"],
 ["red 1","blue 2","17mm"],
 ["red 5","blue 3","17mm"],
 ["blue 2","red 4","42mm"],
 ["blue 2","red 5","17mm"],
 ["blue 2","red 5","17mm"],
 ["red 5","blue 1","17mm"],
 ["red 4","blue 5","17mm"],
 ["blue 5","red 3","17mm"],
 ["blue 4","red 3","17mm"],
 ["red 4","blue 2","17mm"],
 ["red 2","blue 3","17mm"],
 ["blue 2","red base","42mm"],
 ["blue 2","red 5","42mm"],
 ["red 5","blue 2","17mm"],
 ["blue 1","red 5","17mm"],
 ["red 1","blue 1","17mm"],
 ["blue 2","red 3","17mm"],
 ["red 1","blue 3","17mm"],
 ["red 4","blue base","17mm"],
 ["blue 4","red 1","17mm"],
 ["blue 1","red 3","17mm"],
 ["blue 5","red 5","17mm"],
 ["blue 4","red 2","17mm"],
 ["blue 2","red 3","42mm"],
 ["red 1","blue base","17mm"],
 ["red 2","blue base","42mm"],
 ["blue 4","red 3","17mm"],
 ["red 5","blue 4","17mm"],
 ["red 4","blue 4","17mm"],
 ["blue 4","red 4","17mm"],
 ["red 4","blue 4","17mm"],
 ["blue 5","red base","17mm"],
 ["blue 2","red 4","17mm"],
 ["blue 2","red 1","42mm"],
 ["blue 2","red 2","42mm"],
 ["red 1","blue 3","17mm"],
 ["red 4","blue 1","17mm"],
 ["red 4","blue base","17mm"],
 ["red 1","blue 4","17mm"],
 ["blue 5","red 3","17mm"],
 ["blue 1","red 5","17mm"],
 ["blue 2","red 5","17mm"],
 ["blue 1","red 4","17mm"],
 ["blue 4","red 5","17mm"],
 ["red 5","blue 2","17mm"],
 ["blue 1","red 4","17mm"],
 ["blue 2","red base","17mm"],
 ["red 5","blue 5","17mm"],
 ["red 4","blue 1","17mm"],
 ["blue 2","red 2","17mm"],
 ["red 1","blue 4","17mm"],
 ["red 2","blue 5","17mm"],
 ["red 2","blue 5","17mm"],
 ["red 1","blue base","17mm"],
 ["blue 2","red base","42mm"],
 ["blue 4","red 3","17mm"],
 ["blue 4","red 3","17mm"],
 ["blue 4","red 4","17mm"],
 ["red 2","blue base","42mm"],
 ["blue 5","red 1","17mm"],
 ["red 1","blue 4","17mm"],
 ["red 1","blue 1","17mm"],
 ["red 2","blue 3","42mm"],
 ["blue 1","red 5","17mm"],
 ["blue 1","red 5","17mm"],
 ["blue 1","red 3","17mm"],
 ["blue 2","red base","42mm"],
 ["blue 5","red 4","17mm"],
 ["red 4","blue 5","17mm"],
 ["blue 1","red 4","17mm"],
 ["blue 5","red 2","17mm"],
 ["blue 2","red 4","17mm"],
 ["blue 4","red base","17mm"],
 ["red 2","blue 3","17mm"],
 ["blue 1","red 1","17mm"],
 ["blue 5","red 4","17mm"],
 ["red 1","blue 4","17mm"],
 ["blue 4","red 3","17mm"],
 ["blue 4","red 2","17mm"],
 ["red 2","blue 5","17mm"]
          ],
          out: "blue",
        },{
          cxt: 'simple test',
          in: [
            ["blue 1","red 2","17mm"],
 ["blue 2","red 2","42mm"],
 ["red 1","blue 5","17mm"],
 ["red 1","blue 1","17mm"],
 ["blue 5","red 4","17mm"],
 ["red 5","blue 3","17mm"],
 ["blue 5","red 2","17mm"],
 ["blue 4","red 1","17mm"],
 ["blue 1","red 3","17mm"],
 ["red 5","blue 3","17mm"],
 ["blue 2","red base","17mm"],
 ["blue 4","red 3","17mm"],
 ["blue 1","red 5","17mm"],
 ["blue 4","red 2","17mm"],
 ["red 4","blue 2","17mm"],
 ["red 2","blue 3","42mm"],
 ["red 4","blue base","17mm"],
 ["blue 4","red 1","17mm"],
 ["blue 2","red 2","42mm"],
 ["red 1","blue 1","17mm"],
 ["blue 4","red 3","17mm"],
 ["red 4","blue base","17mm"],
 ["red 1","blue 4","17mm"],
 ["red 5","blue 2","17mm"],
 ["red 1","blue 5","17mm"],
 ["blue 4","red 5","17mm"],
 ["red 4","red 5","17mm"],
 ["blue 5","red base","17mm"],
 ["red 4","blue 3","17mm"],
 ["blue 4","red 4","17mm"],
 ["blue 4","red 1","17mm"],
 ["blue 5","red 2","17mm"],
 ["red 2","blue 5","42mm"],
 ["blue 1","red 2","17mm"],
 ["red 1","blue 5","17mm"],
 ["blue 1","red 4","17mm"],
 ["blue 2","red 5","17mm"],
 ["blue 2","red 1","42mm"],
 ["red 1","blue 1","17mm"],
 ["blue 1","red 1","17mm"],
 ["blue 1","red 1","17mm"],
 ["red 5","blue base","17mm"],
 ["red 5","blue 1","17mm"],
 ["blue 1","red 1","17mm"],
 ["blue 2","red 4","17mm"],
 ["blue 1","red 1","17mm"],
 ["red 1","blue 4","17mm"],
 ["red 2","red 1","42mm"],
 ["blue 5","red 2","17mm"],
 ["blue 5","red base","17mm"],
 ["blue 2","red 4","17mm"],
 ["red 5","blue 2","17mm"],
 ["blue 4","red 2","17mm"],
 ["blue 4","red 4","17mm"],
 ["red 5","blue 2","17mm"],
 ["red 2","blue 3","17mm"],
 ["red 5","blue 4","17mm"],
 ["red 4","blue 1","17mm"],
 ["blue 2","red 5","42mm"],
 ["red 4","blue base","17mm"],
 ["blue 1","red 5","17mm"],
 ["blue 4","red base","17mm"],
 ["blue 2","red 5","17mm"],
 ["red 4","blue 3","17mm"],
 ["blue 5","red 4","17mm"],
 ["red 2","blue 2","42mm"],
 ["blue 2","red 2","17mm"],
 ["red 2","blue base","42mm"],
 ["red 2","blue 4","42mm"],
 ["red 4","blue 1","17mm"],
 ["blue 1","red base","17mm"],
 ["blue 4","red 5","17mm"],
 ["red 2","blue 3","17mm"],
 ["red 4","blue 3","17mm"],
 ["blue 1","red 4","17mm"],
 ["blue 4","red 5","17mm"],
 ["red 5","blue 2","17mm"],
 ["blue 2","red 3","17mm"],
 ["red 5","blue 5","17mm"],
 ["blue 5","red 2","17mm"],
 ["blue 5","red 2","17mm"],
 ["red 4","blue 2","17mm"],
 ["blue 1","red 2","17mm"],
 ["blue 1","red 2","17mm"],
 ["blue 4","red 5","17mm"],
 ["blue 4","red 5","17mm"],
 ["blue 4","red 3","17mm"],
 ["blue 1","red 2","17mm"],
 ["red 4","blue 4","17mm"],
 ["red 4","blue 4","17mm"],
 ["red 2","blue 5","42mm"],
 ["red 4","blue 4","17mm"],
 ["red 4","blue 2","17mm"],
 ["red 4","blue 1","17mm"],
 ["red 4","blue 4","17mm"],
 ["blue 4","red 2","17mm"],
 ["blue 4","red 4","17mm"],
 ["red 4","blue 1","17mm"],
 ["blue 2","red 3","17mm"],
 ["red 2","blue 3","17mm"],
 ["blue 4","red 2","17mm"],
 ["blue 4","red 2","17mm"],
 ["red 2","blue 1","17mm"],
 ["red 2","blue 4","17mm"],
 ["red 4","blue 1","17mm"],
 ["red 2","blue 2","17mm"],
 ["red 4","blue 4","17mm"],
 ["red 2","blue 1","42mm"],
 ["red 2","blue 3","17mm"],
 ["blue 4","red 3","17mm"],
 ["blue 4","red 2","17mm"]
          ],
          out: "blue",
        },{
          cxt: 'simple test',
          in: [
            ["blue 2","red 5","42mm"],
 ["red 4","blue 1","17mm"],
 ["blue 5","red 3","17mm"],
 ["red 2","blue 3","17mm"],
 ["blue 5","red 4","17mm"],
 ["blue 1","red 1","17mm"],
 ["red 5","blue base","17mm"],
 ["red 1","blue 2","17mm"],
 ["blue 4","red 3","17mm"],
 ["red 1","blue 1","17mm"],
 ["blue 5","red base","17mm"],
 ["red 4","blue base","17mm"],
 ["red 5","blue 2","17mm"],
 ["blue 5","red 4","17mm"],
 ["red 4","blue 5","17mm"],
 ["blue 5","red 3","17mm"],
 ["red 4","blue 2","17mm"],
 ["red 2","blue base","17mm"],
 ["blue 2","red 3","42mm"],
 ["blue 2","red 5","42mm"],
 ["blue 4","red 4","17mm"],
 ["red 4","blue 5","17mm"],
 ["red 2","blue 3","42mm"],
 ["blue 4","red 2","17mm"],
 ["blue 4","red base","17mm"],
 ["red 2","blue 1","42mm"],
 ["red 4","blue 1","17mm"],
 ["red 1","blue 1","17mm"],
 ["red 4","blue 2","17mm"],
 ["red 4","blue 2","17mm"],
 ["blue 2","red 1","17mm"],
 ["blue 2","red 4","17mm"],
 ["blue 4","red base","17mm"],
 ["red 1","blue 4","17mm"],
 ["blue 4","red 3","17mm"],
 ["blue 5","red 3","17mm"],
 ["blue 5","red 2","17mm"],
 ["blue 2","red 5","17mm"],
 ["blue 4","red 4","17mm"],
 ["blue 4","red 4","17mm"],
 ["blue 4","red 3","17mm"],
 ["blue 5","red 4","17mm"],
 ["blue 5","red 4","17mm"],
 ["red 1","blue base","17mm"],
 ["red 1","blue 2","17mm"],
 ["red 1","blue 4","17mm"],
 ["red 4","blue 2","17mm"],
 ["red 2","blue 2","17mm"],
 ["red 1","blue 4","17mm"],
 ["blue 1","red 3","17mm"],
 ["red 2","blue 5","42mm"],
 ["blue 5","red 1","17mm"],
 ["red 4","blue 4","17mm"],
 ["blue 5","red 1","17mm"],
 ["blue 5","red 1","17mm"],
 ["red 4","blue 3","17mm"],
 ["red 4","blue 4","17mm"],
 ["red 1","blue base","17mm"],
 ["blue 2","red 1","17mm"],
 ["red 4","blue 1","17mm"],
 ["red 4","blue 2","17mm"],
 ["red 1","blue 3","17mm"],
 ["red 4","blue 1","17mm"],
 ["blue 4","red 4","17mm"],
 ["red 2","blue 4","42mm"],
 ["blue 4","red 5","17mm"],
 ["blue 2","red 5","17mm"],
 ["red 2","blue 2","42mm"],
 ["blue 2","red 2","17mm"],
 ["red 1","blue 1","17mm"],
 ["blue 2","red 4","17mm"],
 ["red 1","blue 5","17mm"],
 ["red 4","blue 2","17mm"],
 ["blue 4","red 4","17mm"],
 ["red 4","blue 4","17mm"],
 ["blue 1","red 1","17mm"],
 ["blue 4","red 3","17mm"],
 ["red 1","blue 1","17mm"],
 ["red 1","blue 4","17mm"],
 ["red 1","blue base","17mm"],
 ["blue 5","red 4","17mm"],
 ["red 2","blue 5","42mm"],
 ["blue 4","red 2","17mm"],
 ["red 4","blue 2","17mm"],
 ["blue 1","red 4","17mm"],
 ["red 4","blue 1","17mm"],
 ["red 2","blue 1","17mm"],
 ["red 2","blue 1","42mm"],
 ["blue 2","red 1","42mm"],
 ["red 4","blue 1","17mm"],
 ["red 4","blue base","17mm"],
 ["blue 4","red 1","17mm"],
 ["blue 4","red 1","17mm"],
 ["red 1","blue 1","17mm"],
 ["red 4","blue 5","17mm"],
 ["blue 2","red 4","17mm"],
 ["red 2","blue 5","17mm"],
 ["blue 2","red 3","17mm"],
 ["blue 2","red 1","17mm"],
 ["blue 4","red 3","17mm"],
 ["blue 4","red 4","17mm"],
 ["blue 4","red 5","17mm"]
          ],
          out: "blue",
        },{
          cxt: 'simple test',
          in: [
            ["red 2","blue 5","17mm"],
 ["red 5","blue 2","17mm"],
 ["red 2","blue 5","42mm"],
 ["red 5","blue 4","17mm"],
 ["red 1","blue 3","17mm"],
 ["red 1","blue 3","17mm"],
 ["blue 2","red 3","42mm"],
 ["red 1","blue 1","17mm"],
 ["blue 1","red base","17mm"],
 ["red 5","blue 5","17mm"],
 ["red 2","blue 2","42mm"],
 ["red 2","blue 3","17mm"],
 ["red 1","blue 4","17mm"]
          ],
          out: "red",
        },{
          cxt: 'simple test',
          in: [
            ["red 4","blue 5","17mm"],
 ["red 2","blue 2","17mm"],
 ["blue 5","red base","17mm"],
 ["blue 4","red 2","17mm"],
 ["blue 1","red 4","17mm"],
 ["blue 1","red 5","17mm"],
 ["blue 4","red 3","17mm"],
 ["blue 5","red 1","17mm"],
 ["blue 5","red 5","17mm"],
 ["red 1","blue 2","17mm"],
 ["red 1","blue 5","17mm"],
 ["red 5","blue 5","17mm"],
 ["red 2","blue 1","17mm"],
 ["red 2","blue 5","17mm"],
 ["blue 1","red 1","17mm"],
 ["red 4","blue 3","17mm"],
 ["red 4","blue 1","17mm"],
 ["red 4","blue 1","17mm"],
 ["red 5","blue base","17mm"],
 ["red 4","blue 5","17mm"],
 ["red 4","blue 3","17mm"],
 ["blue 2","red 1","42mm"],
 ["blue 4","red 5","17mm"],
 ["blue 2","red 1","17mm"],
 ["blue 4","red 1","17mm"],
 ["blue 2","red 1","42mm"],
 ["red 2","blue 3","17mm"],
 ["blue 2","red 2","17mm"],
 ["red 5","blue 1","17mm"],
 ["blue 4","red 3","17mm"],
 ["red 2","blue base","42mm"],
 ["red 2","blue 3","42mm"],
 ["red 4","blue base","17mm"],
 ["blue 5","red 2","17mm"],
 ["blue 1","red 3","17mm"],
 ["red 4","blue 5","17mm"],
 ["red 5","blue 4","17mm"],
 ["red 4","blue 1","17mm"],
 ["blue 4","red 4","17mm"],
 ["blue 5","red 3","17mm"],
 ["red 5","blue 3","17mm"],
 ["blue 2","red 4","42mm"],
 ["blue 4","red 3","17mm"],
 ["blue 4","red 3","17mm"],
 ["red 4","blue 5","17mm"],
 ["red 4","blue 3","17mm"],
 ["red 4","blue 4","17mm"],
 ["red 4","blue 2","17mm"],
 ["red 4","blue base","17mm"],
 ["red 4","blue 1","17mm"],
 ["blue 5","red 4","17mm"],
 ["red 5","blue 3","17mm"],
 ["blue 5","red 2","17mm"],
 ["red 2","blue 5","17mm"]
          ],
          out: "blue",
        },{
          cxt: 'simple test',
          in: [
            ["blue 2","red 3","17mm"],
 ["red 4","blue 3","17mm"],
 ["blue 2","red 3","42mm"],
 ["red 5","blue 2","17mm"],
 ["red 5","blue 3","17mm"],
 ["blue 1","red 2","17mm"],
 ["blue 2","red 5","42mm"],
 ["blue 2","red base","42mm"],
 ["red 5","blue 3","17mm"],
 ["blue 5","red 5","17mm"],
 ["blue 5","red 2","17mm"],
 ["blue 2","red 4","17mm"],
 ["red 1","blue base","17mm"],
 ["red 5","blue 3","17mm"],
 ["blue 1","red base","17mm"],
 ["red 4","blue 5","17mm"],
 ["blue 2","red 4","42mm"],
 ["blue 1","red 2","17mm"],
 ["blue 2","red 4","17mm"],
 ["blue 4","red 2","17mm"],
 ["blue 4","red 5","17mm"],
 ["red 5","blue 3","17mm"],
 ["red 4","blue 3","17mm"],
 ["blue 2","red base","42mm"],
 ["blue 5","red 2","17mm"],
 ["blue 4","red 3","17mm"],
 ["blue 1","red 5","17mm"],
 ["blue 4","red 2","17mm"],
 ["red 2","blue 2","42mm"],
 ["red 4","blue 4","17mm"],
 ["red 4","blue 2","17mm"],
 ["blue 1","red 5","17mm"],
 ["red 5","blue 3","17mm"],
 ["blue 1","red 3","17mm"],
 ["blue 1","red 1","17mm"],
 ["blue 2","red 5","42mm"],
 ["red 1","blue 5","17mm"],
 ["red 1","blue 1","17mm"],
 ["red 2","blue 4","42mm"],
 ["red 4","blue base","17mm"],
 ["blue 2","red 4","42mm"],
 ["blue 4","red 1","17mm"],
 ["red 2","blue 2","42mm"],
 ["red 2","blue 1","42mm"]
          ],
          out: "blue",
        },{
          cxt: 'simple test',
          in: [
            ["red 2","blue 4","17mm"],
 ["blue 4","red 4","17mm"],
 ["blue 5","red 3","17mm"],
 ["blue 2","red 2","17mm"],
 ["blue 5","red 2","17mm"],
 ["blue 1","red 3","17mm"],
 ["blue 5","red 5","17mm"],
 ["blue 1","red 1","17mm"],
 ["red 5","blue 3","17mm"],
 ["blue 2","red 5","42mm"],
 ["red 5","blue 2","17mm"],
 ["blue 1","red 5","17mm"],
 ["blue 4","red 4","17mm"],
 ["blue 4","red 4","17mm"],
 ["blue 1","red 3","17mm"],
 ["blue 2","red 2","42mm"],
 ["red 2","blue 5","42mm"],
 ["red 1","blue 5","17mm"],
 ["blue 2","red base","17mm"],
 ["red 2","blue 4","42mm"],
 ["red 2","blue 1","17mm"],
 ["blue 4","red 4","17mm"],
 ["blue 2","red 2","42mm"],
 ["red 1","blue 3","17mm"],
 ["red 2","blue base","42mm"],
 ["red 1","blue 4","17mm"],
 ["blue 4","red 1","17mm"],
 ["red 2","blue 1","17mm"],
 ["blue 1","red 4","17mm"],
 ["red 5","blue 5","17mm"],
 ["blue 1","red 2","17mm"],
 ["blue 1","red 4","17mm"],
 ["red 4","blue 1","17mm"],
 ["blue 4","red 2","17mm"],
 ["red 4","blue 5","17mm"],
 ["red 2","blue 2","42mm"],
 ["blue 4","red 2","17mm"],
 ["blue 1","red 5","17mm"],
 ["red 4","blue 3","17mm"],
 ["red 4","blue 5","17mm"],
 ["red 1","blue 2","17mm"],
 ["blue 5","red 4","17mm"],
 ["red 5","blue 2","17mm"],
 ["blue 2","red 4","42mm"],
 ["blue 2","red 3","17mm"],
 ["red 1","blue base","17mm"],
 ["blue 1","red 2","17mm"],
 ["red 4","blue 2","17mm"],
 ["blue 5","red 3","17mm"],
 ["blue 5","red base","17mm"],
 ["blue 1","red base","17mm"],
 ["blue 2","red 5","17mm"],
 ["blue 5","red 4","17mm"],
 ["red 1","blue 5","17mm"],
 ["blue 1","red 4","17mm"],
 ["red 2","blue 2","17mm"],
 ["blue 5","red 1","17mm"],
 ["blue 2","red base","17mm"],
 ["red 1","blue base","17mm"],
 ["red 1","blue 3","17mm"],
 ["blue 1","red 4","17mm"],
 ["red 1","blue base","17mm"],
 ["red 5","blue 5","17mm"],
 ["blue 1","red 2","17mm"],
 ["red 5","blue 5","17mm"],
 ["red 1","blue 1","17mm"],
 ["blue 4","red 2","17mm"],
 ["blue 4","red 5","17mm"],
 ["red 2","blue 3","42mm"],
 ["blue 1","red 3","17mm"],
 ["blue 2","red base","17mm"],
 ["red 1","blue 2","17mm"],
 ["red 2","blue base","42mm"],
 ["red 1","blue 3","17mm"],
 ["red 2","blue base","17mm"],
 ["blue 2","red 1","42mm"]
          ],
          out: "blue",
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