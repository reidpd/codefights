const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // groupingDishes()
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [
            [
              ["Salad","Tomato","Cucumber","Salad","Sauce"],
              ["Pizza","Tomato","Sausage","Sauce","Dough"],
              ["Quesadilla","Chicken","Cheese","Sauce"],
              ["Sandwich","Salad","Bread","Tomato","Cheese"]
            ]
          ],
          out: [
            ["Cheese","Quesadilla","Sandwich"],
            ["Salad","Salad","Sandwich"],
            ["Sauce","Pizza","Quesadilla","Salad"],
            ["Tomato","Pizza","Salad","Sandwich"]
          ],
        },{
          cxt: 'simple test',
          in: [
            [
              ["Pasta","Tomato Sauce","Onions","Garlic"],
              ["Chicken Curry","Chicken","Curry Sauce"],
              ["Fried Rice","Rice","Onions","Nuts"],
              ["Salad","Spinach","Nuts"],
              ["Sandwich","Cheese","Bread"],
              ["Quesadilla","Chicken","Cheese"]
            ]
          ],
          out: [
            ["Cheese","Quesadilla","Sandwich"],
            ["Chicken","Chicken Curry","Quesadilla"],
            ["Nuts","Fried Rice","Salad"],
            ["Onions","Fried Rice","Pasta"]
          ],
        },{
          cxt: 'simple test',
          in: [
            [
              ["Pasta","Tomato Sauce","Onions","Garlic"],
              ["Chicken Curry","Chicken","Curry Sauce"],
              ["Fried Rice","Rice","Onion","Nuts"],
              ["Salad","Spinach","Nut"],
              ["Sandwich","Cheese","Bread"],
              ["Quesadilla","Chickens","Cheeseeee"]
            ]
          ],
          out: [],
        },{
          cxt: 'simple test',
          in: [
            [
              ["First","a","b","c","d","e","f","g","h","i"],
              ["Second","i","h","g","f","e","x","c","b","a"]
            ]
          ],
          out: [
            ["a","First","Second"],
            ["b","First","Second"],
            ["c","First","Second"],
            ["e","First","Second"],
            ["f","First","Second"],
            ["g","First","Second"],
            ["h","First","Second"],
            ["i","First","Second"]
          ],
        },{
          cxt: 'complicated test',
          in: [
            [
              ["dSaLKJGbxlxcBBv kMNOmzdojCluYeCb","zjxwKcRmpQTPSPRUKLfAhkIXxfzniZjsDfaKOJOcVDaxAnCF"],
              ["R GBgXIv","fPhNHIdOTeKPnqaIPAYXScGrDyGWwlqktYtyOzondayKp","xJ hfufIWL","YduFVZrZEeqVmvACdSTdQd uMswBcadvet","WHYOLUzwSHKUuCNry"],
              ["kvHxWutzASOCBHV","wpzmQKLROsw ","sxgFkhrwFKB","reRqP TFlpmiQa GoZTuErWVB","LA","BGQgMdEGXutmmE InKtapSHbwZlPHrvPwbSmRWclamnTW","QgBClPTxsIpAl","SWbXtEIFeVqoUgtSfXKcVmnwDrijLYsPeXfUauFVbBkbEmGDa"],
              ["Hgpu","fvORUPNvHmBtpKpbTRbmdXzicYOZotLmfoLmQIqBInPnbCFN","WHYOLUzwSHKUuCNry"],
              ["gZxWYomyYO","fvORUPNvHmBtpKpbTRbmdXzicYOZotLmfoLmQIqBInPnbCFN","YduFVZrZEeqVmvACdSTdQd uMswBcadvet","XxRAIFwrGmaarKfz","yJffViKwbqCATxHcQFDLgMX","poEnqRtrANh","QgBClPTxsIpAl","dyqdvHDdflvzxVAGRyxWPMBtIDJhv paNyJbWab"],
              ["rMSYkYkFKlcdBTrUpCTdFgEIdgdTOcEucJdPqiLUWUZNjcoL","YduFVZrZEeqVmvACdSTdQd uMswBcadvet","QgBClPTxsIpAl","fPhNHIdOTeKPnqaIPAYXScGrDyGWwlqktYtyOzondayKp","udzzsbLVValZOWpRLhUKumkROw","dyqdvHDdflvzxVAGRyxWPMBtIDJhv paNyJbWab","WHYOLUzwSHKUuCNry","LA","fvORUPNvHmBtpKpbTRbmdXzicYOZotLmfoLmQIqBInPnbCFN"],
              ["GrWh ROg zHXhYguurdcGjNAv","dyqdvHDdflvzxVAGRyxWPMBtIDJhv paNyJbWab","YduFVZrZEeqVmvACdSTdQd uMswBcadvet","AQglifKDgZIivthzfoWRklaKs","UcIBqQckdEJgLeWMlaRPlqfkhVRXjtZHAYDVRhPsFqPOuEVN","LA","MWhqbkFrSTnOuWKexjPewdd AOISBnSCilJ","QgBClPTxsIpAl"],
              ["dLuvsltPzUjfXkynBCMgxBUTXhVCd","udzzsbLVValZOWpRLhUKumkROw","BGQgMdEGXutmmE InKtapSHbwZlPHrvPwbSmRWclamnTW","BjRRCVKznaySRzyAuNxAbkSYTmcUGlvOND","wpzmQKLROsw ","qLKOIfeBowxWwxPJWrWjtVXMkG NXOLxYxvCKoAagSHYRxVgK","WdfleYASWwVMQKoBINhwpjDbVBEaOOogkKMZ","AQglifKDgZIivthzfoWRklaKs","qRUsCllaFzNWuXIMvbOsNtTTAlbR"],
              ["jOubIROdYWOKxwbZTLDueBiln","fTUBneoUSWxFERZjwPMrAQq","NPuomEOeOXBiozrNZXlXcKKB","ibogPWJoEbermlJfuizYaE","zpNFvjef mpEbEqy rdudPTGpzo n FwxTA"],
              ["BiNYUHMFrRoSICZ","ufYAxvBidQjinsDCurHyjlzRHrOQ MbIVKGLwAq","nvHaaRJdHgRIgXXQteAchX MKldBbM","TdBMoUrYiEcJPlERejkAQdxYMTatLYXX","qLKOIfeBowxWwxPJWrWjtVXMkG NXOLxYxvCKoAagSHYRxVgK"]]
          ],
          out: [
            ["AQglifKDgZIivthzfoWRklaKs","GrWh ROg zHXhYguurdcGjNAv","dLuvsltPzUjfXkynBCMgxBUTXhVCd"],
            ["BGQgMdEGXutmmE InKtapSHbwZlPHrvPwbSmRWclamnTW","dLuvsltPzUjfXkynBCMgxBUTXhVCd","kvHxWutzASOCBHV"],
            ["LA","GrWh ROg zHXhYguurdcGjNAv","kvHxWutzASOCBHV","rMSYkYkFKlcdBTrUpCTdFgEIdgdTOcEucJdPqiLUWUZNjcoL"],
            ["QgBClPTxsIpAl","GrWh ROg zHXhYguurdcGjNAv","gZxWYomyYO","kvHxWutzASOCBHV","rMSYkYkFKlcdBTrUpCTdFgEIdgdTOcEucJdPqiLUWUZNjcoL"],
            ["WHYOLUzwSHKUuCNry","Hgpu","R GBgXIv","rMSYkYkFKlcdBTrUpCTdFgEIdgdTOcEucJdPqiLUWUZNjcoL"],
            ["YduFVZrZEeqVmvACdSTdQd uMswBcadvet","GrWh ROg zHXhYguurdcGjNAv","R GBgXIv","gZxWYomyYO","rMSYkYkFKlcdBTrUpCTdFgEIdgdTOcEucJdPqiLUWUZNjcoL"],
            ["dyqdvHDdflvzxVAGRyxWPMBtIDJhv paNyJbWab","GrWh ROg zHXhYguurdcGjNAv","gZxWYomyYO","rMSYkYkFKlcdBTrUpCTdFgEIdgdTOcEucJdPqiLUWUZNjcoL"],
            ["fPhNHIdOTeKPnqaIPAYXScGrDyGWwlqktYtyOzondayKp","R GBgXIv","rMSYkYkFKlcdBTrUpCTdFgEIdgdTOcEucJdPqiLUWUZNjcoL"],
            ["fvORUPNvHmBtpKpbTRbmdXzicYOZotLmfoLmQIqBInPnbCFN","Hgpu","gZxWYomyYO","rMSYkYkFKlcdBTrUpCTdFgEIdgdTOcEucJdPqiLUWUZNjcoL"],
            ["qLKOIfeBowxWwxPJWrWjtVXMkG NXOLxYxvCKoAagSHYRxVgK","BiNYUHMFrRoSICZ","dLuvsltPzUjfXkynBCMgxBUTXhVCd"],
            ["udzzsbLVValZOWpRLhUKumkROw","dLuvsltPzUjfXkynBCMgxBUTXhVCd","rMSYkYkFKlcdBTrUpCTdFgEIdgdTOcEucJdPqiLUWUZNjcoL"],
            ["wpzmQKLROsw ","dLuvsltPzUjfXkynBCMgxBUTXhVCd","kvHxWutzASOCBHV"]
          ],
        }
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
