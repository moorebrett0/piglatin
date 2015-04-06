function pigLatin(word) {
    if ((word[0] === 'a') | (word[0] === 'e') | (word[0] === 'o') | (word[0] === 'i') | (word[0] === 'u')){
       word = word + "ay";
    }
    return (word);
};
