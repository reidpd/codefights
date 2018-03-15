const arrayReplace = (inputArray, elemToReplace, substitutionElem) => inputArray.map(el => el === elemToReplace ? substitutionElem : el);

module.exports = { fns: [ arrayReplace ] };
