import { isString } from '../src/is-string';

test('a short string is a string', () => {
  expect(isString('s')).toBe(true);
});

test('a long string is a string', () => {
  expect(isString('s asdfasd sdfijas df sadfijasdfsadf asdfasdf')).toBe(true);
});

test('an object is not a string', () => {
  expect(isString({test: 'dsfd'})).toBe(false);
});

test('a number is not a string', () => {
  expect(isString(2)).toBe(false);
});
