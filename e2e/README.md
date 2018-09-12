# Test Plan

## Introduction
This plan describes the strategy and scenarios to test the Budgeting app.

## Test Items
- Budgeting app

## Scope
- Budget creation
- Reporting
- UX

## Out of Scope
- Performance
- Security
- Responsiveness
- Multiplatform

## Approach
Manual black box testing, end to end tests.
Automated testing using codeceptJS.

## Tools
- Chrome
- Chrome dev Tools
- CodeceptJS
- Puppeteeer
- Chromium

## Deliverables
- TestPlan (this)
- Test Cases
- Automated Test Cases as Scripts
- Defects
- Test Execution Results

## Assumptions
- Exploratory testing is performed in qa environment managed by infra/devops (not locally)
- Performance testing is not performed
- SEO best practices are not enforced since app is not indexed
- Defects are tracked in JIRA (or similar)
- UAT is performed by PMs/Business Analysts
- Black box approach is used and QA has no access to DB
- Key elements have ID's and/or are easily identifiable in the DOM (for automation scripts)

## Defect Management
### Bug Logging
The following template should be used:
- Title
- Severity
- Feature
- Steps to reproduce
- Expected
- Actual
- Acceptance Criteria
- Browser/Device
- Screenshots/Recordings

### Bug Classification
- 0. Critical > App crashes, unusable
- 1. High > Main feature broken, no workaround
- 2. Mid > Feature broken, workaround is hard
- 3. Low > Feature broken, workaround is easy
- 4. Cosmetic > Minor cosmetic usage, doesnt affect user interaction

## Test Cases

- Create budget outflow item with description and with value
- Create budget outflow item without description and with value
- Create budget outflow item with description and without value
- Create budget inflow item with description and with value
- Create budget inflow item without description and with value
- Create budget inflow item with description and without value
- Create budget inflow with large value
- Create budget outflow with large value
- Create budget inflow with float value
- Create budget outflow with float value
- Create budget outflow with int value
- Create budget inflow with int value
- Navigate to Budget
- Navigate to Reports
- Load inflow vs outflow Report
- Load Spending by Category Report
- Star repo
- Fork repo

## Automation
The tool chosen to run the tests is CodeceptJS + Puppeteer.

### Setup
Run at root:
```
# setup
$ nvm install v8.9
$ nvm use 8.9
$ npm i -d
$ npm run build
$ sudo chmod +x cc

# run tests
$ npm run prod
$ ./cc run --reporter mochawesome
```
