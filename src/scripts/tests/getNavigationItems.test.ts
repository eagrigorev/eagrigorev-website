import { journalNavItems } from '../getNavigationItems';

describe('GetNavigationItems', () => {
  it('should return the right amount of navigation items', () => {
    expect(journalNavItems.length).toBe(3);
  });
});
