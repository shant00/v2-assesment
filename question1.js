function romanToInt(s) {
    let roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (i > 0 && roman[s[i]] > roman[s[i - 1]]) {
            result += roman[s[i]] - 2 * roman[s[i - 1]];
        } else {
            result += roman[s[i]];
        }
    }
    return result;
}
