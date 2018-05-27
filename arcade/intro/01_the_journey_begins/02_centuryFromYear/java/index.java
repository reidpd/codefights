int centuryFromYear(int year) {
    int remainder = year % 100;
    int base = year - remainder;
    int multiple = base / 100;
    return remainder == 0 ? multiple : multiple + 1;
}
