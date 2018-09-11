
Feature('Budget');

Scenario('Create budget inflow with description and value', async (I, budgetPage) => {
  var assert = require('assert');
  I.amOnPage('/');
  let category = 'Income';
  let description = 'This is test ' + I.unique();
  let value = 2000;

  let inflow_before = await I.grabHTMLFrom(budgetPage.inflow);
  let outflow_before = await I.grabHTMLFrom(budgetPage.outflow);
  let total_before = await I.grabHTMLFrom(budgetPage.total);
  inflow_before = I.parseCurrency(inflow_before);
  outflow_before = I.parseCurrency(outflow_before);
  total_before = I.parseCurrency(total_before);

  budgetPage.createItem(category, description, value);

  let inflow_after = await I.grabHTMLFrom(budgetPage.inflow);
  let outflow_after = await I.grabHTMLFrom(budgetPage.outflow);
  let total_after = await I.grabHTMLFrom(budgetPage.total);
  inflow_after = I.parseCurrency(inflow_after);
  outflow_after = I.parseCurrency(outflow_after);
  total_after = I.parseCurrency(total_after);

  I.see(category, budgetPage.lastRow);
  I.see(description, budgetPage.lastRow);
  I.see('$2,000.00', budgetPage.lastRow);

  assert.equal(inflow_before + value, inflow_after);
  assert.equal(total_before + value, total_after);
  assert.equal(outflow_before, outflow_after);
});

Scenario('Create budget outflow with description and value', async (I, budgetPage) => {
  var assert = require('assert');

  I.amOnPage('/');
  let category = 'Car';
  let description = 'This is test ' + I.unique();
  let value = 200.35;

  let inflow_before = await I.grabHTMLFrom(budgetPage.inflow);
  let outflow_before = await I.grabHTMLFrom(budgetPage.outflow);
  let total_before = await I.grabHTMLFrom(budgetPage.total);
  inflow_before = I.parseCurrency(inflow_before);
  outflow_before = I.parseCurrency(outflow_before);
  total_before = I.parseCurrency(total_before);

  budgetPage.createItem(category, description, value);

  let inflow_after = await I.grabHTMLFrom(budgetPage.inflow);
  let outflow_after = await I.grabHTMLFrom(budgetPage.outflow);
  let total_after = await I.grabHTMLFrom(budgetPage.total);
  inflow_after = I.parseCurrency(inflow_after);
  outflow_after = I.parseCurrency(outflow_after);
  total_after = I.parseCurrency(total_after);

  I.see(category, budgetPage.lastRow);
  I.see(description, budgetPage.lastRow);
  I.see('$200.35', budgetPage.lastRow);

  assert.equal(inflow_before, inflow_after);
  assert.equal(total_before - value, total_after);
  assert.equal(outflow_before + value, outflow_after);
});

Scenario('Create budget outflow without description and value', async (I, budgetPage) => {
  var assert = require('assert');

  I.amOnPage('/');
  let category = 'Home';
  let description = '';
  let value = 1000.35;

  let inflow_before = await I.grabHTMLFrom(budgetPage.inflow);
  let outflow_before = await I.grabHTMLFrom(budgetPage.outflow);
  let total_before = await I.grabHTMLFrom(budgetPage.total);
  inflow_before = I.parseCurrency(inflow_before);
  outflow_before = I.parseCurrency(outflow_before);
  total_before = I.parseCurrency(total_before);

  budgetPage.createItem(category, description, value);

  let inflow_after = await I.grabHTMLFrom(budgetPage.inflow);
  let outflow_after = await I.grabHTMLFrom(budgetPage.outflow);
  let total_after = await I.grabHTMLFrom(budgetPage.total);
  inflow_after = I.parseCurrency(inflow_after);
  outflow_after = I.parseCurrency(outflow_after);
  total_after = I.parseCurrency(total_after);

  I.see(category, budgetPage.lastRow);
  I.see(description, budgetPage.lastRow);
  I.see('$1,000.35', budgetPage.lastRow);

  assert.equal(inflow_before, inflow_after);
  assert.equal(total_before - value, total_after);
  assert.equal(outflow_before + value, outflow_after);
});
