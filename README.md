# CircleCI Monorepo Experiment
This project will contain two apps that are tested, built and deployed via CircleCI.

Each app will be very simple NodeJS websites built with ExpressJS. They will have the following quality checks:
- Linting (eslint)
- Unit test (jest)
- End-to-end tests (puppeeter)
- Status route

There will also be a package that does not deploy, but is used by both apps. The intention behind including this to explore isolating some pipeline jobs based on which parts of the projects were directly affected by changes.

Here is the likely project structure:
```
- packages/
  - app-x/
  - app-y/
  - shared-utils/
```
