boolean checkPalindrome(String inputString) {
    String reverse = new String();
    for (int idx = inputString.length()-1; idx > -1; idx--) {
        char lastChar = inputString.charAt(idx);
        String s = Character.toString(lastChar);
        reverse = reverse.concat(s);
    }
    return inputString.equals(reverse);
}
