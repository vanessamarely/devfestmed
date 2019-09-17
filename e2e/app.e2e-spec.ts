import { EventoLfdevPage } from './app.po';

describe('evento-lfdev App', () => {
  let page: EventoLfdevPage;

  beforeEach(() => {
    page = new EventoLfdevPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
