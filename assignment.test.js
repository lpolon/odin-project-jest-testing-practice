import { capitalize, reverseString } from './assignment';

describe('capitalize', () => {
  it('returns the first character capitalized', () => {
    const inputString = 'leo';
    const expected = 'Leo';

    const current = capitalize(inputString);

    expect(current).toBe(expected);
  });
});

describe('reverseString', () => {
  it('returns a string reversed', () => {
    const inputString = 'abcde';
    const expected = 'edcba';

    const current = reverseString(inputString);

    expect(current).toBe(expected);
  });
});
