import { BusinessContactsFirebasePage } from './app.po';

describe('business-contacts-firebase App', function() {
  let page: BusinessContactsFirebasePage;

  beforeEach(() => {
    page = new BusinessContactsFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
