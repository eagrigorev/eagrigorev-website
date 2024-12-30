/* Scripts */
import { generateSlug } from '../generateSlug';

describe('GenerateSlug', () => {
  it('generates the correct slug', () => {
    const notGeneratedSlug = 'Winds & Windows';
    expect(generateSlug(notGeneratedSlug)).toBe('winds-and-windows');
  });
});
