/* Utils */
import { generateCardOptions } from '../generateCardOptions';
import { postMeta } from '@/mocks/postMeta';
import { postCard } from '@/mocks/postCard';

describe('GenerateCardOptions', () => {
  it('should generate the proper card object', () => {
    expect(generateCardOptions(postMeta)).toStrictEqual(postCard);
  });
});
