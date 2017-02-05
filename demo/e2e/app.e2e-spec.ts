import { AngularDatatablesDemoPage } from './app.po';

describe('angular-datatables-demo App', function() {
  let page: AngularDatatablesDemoPage;

  beforeEach(() => {
    page = new AngularDatatablesDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
