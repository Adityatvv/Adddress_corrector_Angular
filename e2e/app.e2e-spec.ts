import { Angular2ProjectSamplePage } from './app.po';

describe('angular2-project-sample App', () => {
  let page: Angular2ProjectSamplePage;

  beforeEach(() => {
    page = new Angular2ProjectSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
