const losslessDataCompression = (inputString, width) => {
  let result = "";
  for (let idx = 0; idx < inputString.length; idx++) {
    let winDow = conjureWindow(inputString, idx, width);
    if (winDow.indexOf(char) === -1) {
      result += char;
    } else {
      result += substringThing(inputString, idx, winDow);
    }
    // if (idx >= width) {
    //   winDow = inputString.slice(idx-width, idx-1);
    // } else { winDow += char }

  };
};

const substringThing = (str, idx, winDow) => {
  let compareStr = str.slice(idx);
  console.log('compareStr === ', compareStr);
  let pairs = [];
  for (let startIndex = 0; startIndex < str.length; startIndex++) {
    
    // for (let length = 1; length < str.length - startIndex; length++) {
    //   let slice = str.slice(startIndex, startIndex+length-1);
    //   if (slice === compareStr.slice(0,length-1)) {
    //     console.log('math is right!', slice, compareStr.slice(0,length-1));
    //   }
    //   if (winDow.indexOf(slice) > -1) { /* slice is present in the window */
    //     pairs.push("(" + idx + "," + length + ")")
    //   }
    //   else { break }
    // }
    // if (str.substring(startIndex, ))
  }
  console.log(pairs);
  return pairs;
};

const conjureWindow = (str, idx, width) => {
  let result = "";
  for (let i = idx <= width ? 0 : idx-width; i < idx; i++) {
    result += str[i]
  }
  return result;
}

module.exports = { fns: [ losslessDataCompression, conjureWindow, substringThing ] };
