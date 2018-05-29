boolean almostIncreasingSequence(int[] sequence) {
  boolean isPossible = false;
  for (int idx = 0; idx < sequence.length; idx++) {
    int[] arrayToCopy = new int[sequence.length-1];
    boolean removalIdxIgnored = false;
    for (int sequenceIdx = 0; sequenceIdx < sequence.length; sequenceIdx++) {
      if (sequenceIdx != idx) {
        if (removalIdxIgnored) {
          arrayToCopy[sequenceIdx-1] = sequence[sequenceIdx];
        } else {
          arrayToCopy[sequenceIdx] = sequence[sequenceIdx];
        }
      } else { removalIdxIgnored = true; }
    }

    boolean strictlyIncreasing = true;
    for (int i = 0; i < arrayToCopy.length-1; i++) {
      if (arrayToCopy[i] >= arrayToCopy[i+1]) {
        strictlyIncreasing = false;
      }
    }
    if (strictlyIncreasing) {
      isPossible = true;
      break;
    }
  }
  return isPossible;
}
