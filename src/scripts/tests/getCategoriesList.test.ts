/* Utils */
import { categoriesList } from '../getCategoriesList';

describe('CategoriesList', () => {
  it('should get the right amount of categories', () => {
    expect(categoriesList.length).toBe(6);
  });
});
