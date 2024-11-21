/* Utils */
import { generateCardOptions } from '../generateCardOptions';
import { postMeta } from '../../../DUMP/mocks/postMeta';
import { postCard } from '../../../DUMP/mocks/postCard';

describe('GenerateCardOptions', () => {
  it('should generate the proper card object', () => {
    expect(generateCardOptions(postMeta)).toStrictEqual(postCard);
  });
});
