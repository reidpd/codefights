const hasPathWithGivenSum = (t, s) => {
  const allPaths = findPaths(t, []);
  return true;
};

const findPaths = (tree, path) => {
  if (tree === null) { return [0] }

}

module.exports = { fns: [ hasPathWithGivenSum, findPaths ] };
