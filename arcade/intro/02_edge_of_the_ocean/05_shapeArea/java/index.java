int shapeArea(int n) {
    if (n == 1) { return 1; }
    int blocks = 1;
    for (int i = 0; i < n; i++) {
        blocks += 4;
        blocks += (i-1) * 4;
    }
    return blocks;
}
