import { Validator } from '../nicknames';
const validator = new Validator();

test('test validateUsername fn with %s name to be true', () => {
   expect(validator.validateUsername('abc-123_def')).toBe(true);
});

test('test validateUsername fn with %s name to be false', () => {
   expect(validator.validateUsername('abc-123')).toBe(false);
});

test('test validateUsername fn with %n number-name', () => {
   expect(validator.validateUsername(12211332)).toBe(false);
});

test('test validateUsername fn with %s invalid name', () => {
   expect(validator.validateUsername('!nsh_12qgw')).toBe(false);
});

test('test validateUsername fn with %s more then four digit in name', () => {
   expect(validator.validateUsername('nsh_112qgw')).toBe(true);
});
