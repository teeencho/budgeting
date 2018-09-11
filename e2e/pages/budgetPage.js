
const I = actor();

module.exports = {

  fields: {
    category: 'select[name="categoryId"]',
    description: 'input[name="description"]',
    value: 'input[name="value"]',
  },
  submitButton: {css: 'button[type=submit]'},
  tableBody: {css: '.opmhI tbody'},
  lastRow: {css: 'tbody tr:last-child'},
  inflow: {xpath: '//*[@id="root"]/main/section/div/div/div[1]/div/div[1]'},
  outflow: {css: '.sG1fB._15b6X'},
  total: {xpath: '//*[@id="root"]/main/section/div/div/div[5]/div/div[1]'},

  // introducing methods
  createItem(category, description, value) {
    I.selectOption(this.fields.category, category);
    I.fillField(this.fields.description, description);
    I.fillField(this.fields.value, value.toString());
    I.click(this.submitButton);
  }
}
