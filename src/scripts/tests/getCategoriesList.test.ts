/* Utils */
import { categoriesList } from '../../../TEMPORARY_FOLDER/getCategoriesList';

describe('CategoriesList', () => {
  it('should get the right amount of categories', () => {
    expect(categoriesList.length).toBe(7);
  });
});
