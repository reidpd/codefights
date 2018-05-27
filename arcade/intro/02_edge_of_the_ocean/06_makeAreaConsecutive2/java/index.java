int makeArrayConsecutive2(int[] statues) {
  int min = 20;
  int max = 0;
  int missing = 0;
  for (int statue : statues) {
    if (min > statue) { min = statue; }
    if (max < statue) { max = statue; }
  }
  for (int val = min + 1; val < max; val++) {
    boolean searching = true;
    for (int idx = 0; idx < statues.length; idx++) {
      if (statues[idx] == val) { searching = false; }
      if (!searching) { break; }
    }
    if (searching) { missing++; }
  }
  return missing;
}
