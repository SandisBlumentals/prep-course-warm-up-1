export {};

const count = (checkString:string, checkWord:string) => {
    var checkStr = checkString.toLowerCase().split(' ');
    var countSum = 0;

    for (var i = 0; i < checkStr.length; i++){
        if (checkStr[i] === checkWord) countSum++;
    }
    return countSum;
};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
