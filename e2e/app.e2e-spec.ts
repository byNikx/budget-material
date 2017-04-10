import { BudgetMaterialPage } from './app.po';

describe('budget-material App', () => {
  let page: BudgetMaterialPage;

  beforeEach(() => {
    page = new BudgetMaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
