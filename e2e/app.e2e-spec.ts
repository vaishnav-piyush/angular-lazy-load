import { AngularLazyLoadPage } from './app.po';

describe('angular-lazy-load App', () => {
  let page: AngularLazyLoadPage;

  beforeEach(() => {
    page = new AngularLazyLoadPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
