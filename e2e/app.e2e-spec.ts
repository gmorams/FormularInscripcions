import { FormulariPage } from './app.po';

describe('formulari App', () => {
  let page: FormulariPage;

  beforeEach(() => {
    page = new FormulariPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
