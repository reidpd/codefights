const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // areFollowingPatterns()
      ins_and_outs: [
        {
          cxt: 'returns true if strings match pattern',
          in: [
            // strings
            ['cat', 'dog', 'dog'],
            // patterns
            ['a', 'b', 'b']
          ],
          out: true,
        },{
          cxt: 'returns false if one strings dont match pattern',
          in: [
            // strings
            ['cat', 'dog', 'doggy'],
            // patterns
            ['a', 'b', 'b']
          ],
          out: false,
        },{
          cxt: 'returns false if pattern doesnt match strings',
          in: [
            // strings
            ['cat', 'dog', 'dog'],
            // patterns
            ['a', 'b', 'c']
          ],
          out: false,
        },{
          cxt: 'returns true if pattern === string in strings',
          in: [
            // strings
            ['aaa'],
            // patterns
            ['aaa']
          ],
          out: true,
        },{
          cxt: 'returns false if pattern doesnt match strings',
          in: [
            // strings
            ['aaa', 'aaa', 'aaa'],
            // patterns
            ['aaa', 'bbb', 'aaa']
          ],
          out: false,
        },{
          cxt: 'returns false if a single character in a single string differs from the patterns prescribed',
          in: [
            // strings
            ['aaa', 'aab', 'aaa'],
            // patterns
            ['aaa', 'aaa', 'aaa']
          ],
          out: false,
        },{
          cxt: 'simple test',
          in: [
            // strings
            [
              "re",
              "jjinh",
              "rnz",
              "frok",
              "frok",
              "hxytef",
              "hxytef",
              "frok"
            ],
            // patterns
            [
              "kzfzmjwe",
              "fgbugiomo",
              "ocuijka",
              "gafdrts",
              "gafdrts",
              "ebdva",
              "ebdva",
              "gafdrts"
            ]
          ],
          out: true,
        },{
          cxt: 'simple test',
          in: [
            // strings
            [
              "kwtfpzm",
              "kwtfpzm",
              "kwtfpzm",
              "kwtfpzm",
              "kwtfpzm",
              "wfktjrdhu",
              "anx",
              "kwtfpzm"
            ],
            // patterns
            [
              "z",
              "z",
              "z",
              "hhwdphhnc",
              "zejhegjlha",
              "xgxpvhprdd",
              "e",
              "u"
            ]
          ],
          out: false,
        },{
          cxt: 'simple test',
          in: [
            // strings
            [
              "ato",
              "ato",
              "jflywws",
              "ato",
              "ato",
              "se",
              "se",
              "kiolm",
              "wizdkdqke"
            ],
            // patterns
            [
              "ofnmiqelt",
              "ofnmiqelt",
              "flqmwoje",
              "ofnmiqelt",
              "zdohw",
              "jyk",
              "ujddjtxt",
              "s",
              "kw"
            ]
          ],
          out: false,
        },{
          cxt: 'complicated test',
          in: [
            // strings
            [
              "syf",
              "syf",
              "oxerkx",
              "oxerkx",
              "syf",
              "xgwatff",
              "pmnfaw",
              "t",
              "ajyvgwd",
              "xmhb",
              "ajg",
              "syf",
              "syf",
              "wjddgkopae",
              "fgrpstxd",
              "t",
              "i",
              "psw",
              "wjddgkopae",
              "wjddgkopae",
              "oxerkx",
              "zf",
              "jvdtdxbefr",
              "rbmphtrmo",
              "syf",
              "yssdddhyn",
              "syf",
              "jvdtdxbefr",
              "funnd",
              "syf",
              "syf",
              "wd",
              "syf",
              "vnntavj",
              "wjddgkopae",
              "yssdddhyn",
              "wcvk",
              "wjddgkopae",
              "fh",
              "zf",
              "gpkdcwf",
              "qkbw",
              "zf",
              "teppnr",
              "jvdtdxbefr",
              "fmn",
              "i",
              "hzmihfrmq",
              "wjddgkopae",
              "syf",
              "vnntavj",
              "dung",
              "kn",
              "qkxo",
              "ajyvgwd",
              "fs",
              "kanixyaepl",
              "syf",
              "tl",
              "yzhaa",
              "dung",
              "wa",
              "syf",
              "jtucivim",
              "tl",
              "kanixyaepl",
              "oxerkx",
              "wjddgkopae",
              "ey",
              "ai",
              "zf",
              "di",
              "oxerkx",
              "dung",
              "i",
              "oxerkx",
              "wmtqpwzgh",
              "t",
              "beascd",
              "me",
              "akklwhtpi",
              "nxl",
              "cnq",
              "bighexy",
              "ddhditvzdu",
              "funnd",
              "wmt",
              "dgx",
              "fs",
              "xmhb",
              "qtcxvdcl",
              "thbmn",
              "pkrisgmr",
              "mkcfscyb",
              "x",
              "oxerkx",
              "funnd",
              "iesr",
              "funnd",
              "t"
            ],
            // patterns
            [
              "enrylabgky",
              "enrylabgky",
              "dqlqaihd",
              "dqlqaihd",
              "enrylabgky",
              "ramsnzhyr",
              "tkibsntkbr",
              "l",
              "bgtws",
              "xwuaep",
              "o",
              "enrylabgky",
              "enrylabgky",
              "e",
              "auljuhtj",
              "l",
              "d",
              "jfzokgt",
              "e",
              "e",
              "dqlqaihd",
              "fgglhiedk",
              "nj",
              "quhv",
              "enrylabgky",
              "oadats",
              "enrylabgky",
              "nj",
              "zwupro",
              "enrylabgky",
              "enrylabgky",
              "pyw",
              "enrylabgky",
              "bedpuycdp",
              "e",
              "oadats",
              "i",
              "e",
              "fobyfznrxm",
              "fgglhiedk",
              "irxtd",
              "oyvf",
              "fgglhiedk",
              "ebpp",
              "nj",
              "p",
              "d",
              "cufxylz",
              "e",
              "enrylabgky",
              "bedpuycdp",
              "mitzb",
              "shsnw",
              "papmvh",
              "bgtws",
              "chtp",
              "pze",
              "enrylabgky",
              "klp",
              "wpx",
              "mitzb",
              "fo",
              "enrylabgky",
              "bvcigrirhe",
              "klp",
              "pze",
              "dqlqaihd",
              "e",
              "iufunacwjo",
              "bubgww",
              "fgglhiedk",
              "og",
              "dqlqaihd",
              "mitzb",
              "d",
              "dqlqaihd",
              "mysidv",
              "l",
              "naj",
              "clftmrwl",
              "fjb",
              "zjjnrffb",
              "sh",
              "gcn",
              "ouispza",
              "zwupro",
              "c",
              "rdank",
              "chtp",
              "xwuaep",
              "jufhm",
              "iyntbgm",
              "sufs",
              "mkivpe",
              "bxdd",
              "dqlqaihd",
              "zwupro",
              "vzxbbculgv",
              "zwupro",
              "l"
            ]
          ],
          out: true,
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(...param.in)).to.deep.equal(param.out);
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
