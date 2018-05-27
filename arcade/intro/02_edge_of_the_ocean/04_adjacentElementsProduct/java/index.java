int adjacentElementsProduct(int[] inputArray) {
    int greatestProduct = -1000001;
    for (int idx = 0; idx < inputArray.length-1; idx++) {
        int first = inputArray[idx];
        int second = inputArray[idx+1];
        int product = first * second;
        if (product > greatestProduct) { greatestProduct = product; }
    }
    return greatestProduct;
}
