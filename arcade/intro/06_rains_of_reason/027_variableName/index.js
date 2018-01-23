const variableName = name => {
  let acceptable_chars = [], unacceptable_starts = [];
  let codepoints = [{len:10,start:48}, {len:26,start:65}, {len:1,start:95}, {len:26,start:97}];
  codepoints.forEach((instruction, i) => {
    createChars(instruction.len, instruction.start).forEach(char => {
      acceptable_chars.push(char)
      if (i < 2) { unacceptable_starts.push(char) }
    });
  });

  return name.split('').every(char => acceptable_chars.includes(char)) && !unacceptable_starts.includes(name[0]);
}

const createChars = (len, start) => new Array(len).fill(start).map((item, idx) => String.fromCodePoint(item + idx));

module.exports = { variableName };
