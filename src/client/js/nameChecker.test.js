import { inputLength } from './nameChecker';

// Demonstrate that input validation allows under 140 characters of input
test('Verify that form input validation is <= 140 characters', () => {
    let testPhrase = "";
    for(let index = 0; index < 140; index++) {
        testPhrase += "a";
        expect(inputLength(testPhrase)).toBe(true);
    }
    let phrase = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.";
    expect(inputLength(phrase)).toBe(true);
});

// Demonstrate that input validation rejects more than 140 characters of input
test('Verify that form input validation rejects > 140 characters', () => {
    // Start with a base 140-character phrase
    let testPhrase = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.";
    for (let index = 0; index < 100; index ++) {
        testPhrase += "abcdefghijklmnopqrstuvwxyz";
    }
    expect(inputLength(testPhrase)).toBe(false);
}); 