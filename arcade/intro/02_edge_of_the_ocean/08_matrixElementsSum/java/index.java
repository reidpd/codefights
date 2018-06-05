int matrixElementsSum(int[][] matrix) {
  int total = 0;
  boolean[] spookyColumns = new boolean[matrix[0].length];
  for (int idx = 0; idx < spookyColumns.length; idx++) { spookyColumns[idx] = false; }
  for (int y = 0; y < matrix.length; y++) {
    for (int x = 0; x < matrix[y].length; x++) {
      int rentForRoom = matrix[y][x];
      if (matrix[y][x] == 0) { spookyColumns[x] = true; }
      boolean spooky = spookyColumns[x];
      if (!spooky) { total += rentForRoom; }
    }
  }
  return total;
}
