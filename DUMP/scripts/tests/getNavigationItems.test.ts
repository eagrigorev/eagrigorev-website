import { navigationItems } from '../getNavigationItems';

describe('GetNavigationItems', () => {
  it('should return the right amount of navigation items', () => {
    expect(navigationItems.journal.length).toBe(3);
  });
});
