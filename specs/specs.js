describe('pigLatin', function() {
    it('adds ay to a word that starts with a vowel a', function() {
        expect(pigLatin('america')).to.equal('americaay');
    });
    it('adds ay to a word that starts with a vowel e ', function() {
        expect(pigLatin('easter')).to.equal('easteray');
    });
    it('adds ay to a word that starts with a vowel o ', function() {
        expect(pigLatin('oprah')).to.equal('oprahay');
    });
    it('adds ay to a word that starts with a vowel i ', function() {
        expect(pigLatin('incoming')).to.equal('incomingay');
    });
    it('adds ay to a word that starts with a vowel u ', function() {
        expect(pigLatin('united')).to.equal('uniteday');
    });
});
