/* Utils */
import { categoriesList } from './getCategoriesList';

test('Should get the right amount of categories', () => {
  expect(categoriesList.length).toBe(6);
});
