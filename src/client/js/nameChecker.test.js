import { inputLength } from './nameChecker';

// Demonstrate that input validation allows under 140 characters of input
test('Verify that form input validation is <= 140 characters', () => {
    let testPhrase = "";
    for(let index = 0; index < 140; index++) {
        testPhrase += "a";
        expect(inputLength(testPhrase)).toBe(true);
    }
});