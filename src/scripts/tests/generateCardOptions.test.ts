/* Utils */
import { generateCardOptions } from '../../../TEMPORARY_FOLDER/generateCardOptions';
import { postMeta } from '../../../TEMPORARY_FOLDER/mocks/postMeta';
import { postCard } from '../../../TEMPORARY_FOLDER/mocks/postCard';

describe('GenerateCardOptions', () => {
  it('should generate the proper card object', () => {
    expect(generateCardOptions(postMeta)).toStrictEqual(postCard);
  });
});
