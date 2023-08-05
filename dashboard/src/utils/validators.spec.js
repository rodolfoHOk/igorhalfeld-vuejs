import { validateEmptyAndEmail, validateEmptyAndLength3 } from './validators';

describe('Validators utils', () => {
  it('should give an error when call validateEmptyAndLength3 with empty payload', () => {
    expect(validateEmptyAndLength3()).toBe('* Este campo é obrigatório');
  });

  it('should give an error when call validateEmptyAndLength3 with less then 3 caracteres in payload', () => {
    expect(validateEmptyAndLength3('ab')).toBe(
      '* Este campo deve ter no mínimo 3 caracteres'
    );
  });

  it('should return true when call validateEmptyAndLength3 with more then 3 caracteres in payload', () => {
    expect(validateEmptyAndLength3('abc')).toBe(true);
  });

  it('should give an error when call validateEmptyAndEmail with empty payload', () => {
    expect(validateEmptyAndEmail()).toBe('* Este campo é obrigatório');
  });

  it('should give an error when call validateEmptyAndEmail with a invalid email', () => {
    expect(validateEmptyAndEmail('abc@abc')).toBe(
      '* Este campo deve ser um e-mail'
    );
  });

  it('should return true when call validateEmptyAndEmail with a valid email', () => {
    expect(validateEmptyAndEmail('john.doe@email.com')).toBe(true);
  });
});
