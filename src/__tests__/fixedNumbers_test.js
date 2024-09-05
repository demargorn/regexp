import { fixedNumber } from '../fixedNumbers';

test('test fixedNumber fn with %s number with first digit 8', () => {
   expect(fixedNumber('8 960 000 00 00')).toBe('+79600000000');
});

test('test fixedNumber fn with %s number with first digit +8', () => {
   expect(fixedNumber('+86 960 000 00 00')).toBe('+869600000000');
});

test('test fixedNumber fn with %s number with first digit 7', () => {
   expect(fixedNumber('7 960 000 00 00')).toBe('+79600000000');
});
