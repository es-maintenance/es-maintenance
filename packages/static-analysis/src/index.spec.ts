import hello from './index';

it('should say hello', () => {
  expect(hello('lewis')).toBe('Hello, lewis');
});
