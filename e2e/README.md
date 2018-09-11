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

## Approach
Manual black box testing, end to end tests.
Automated testing using codeceptJS.

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
