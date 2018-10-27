# Multi-Domain Driven Design

See goals section for goals of this project

See tools section to get started

## Tools

View tasks available to run with `./run --help`

Use `./start` to keep your task running until you hit ctrl+c.

Gulpfile is located here `./tool/gulpfile.js` use `./start <yourtask>` when editing it to rerun the task with each  change to the gulpfile.

Place commonly used tasks in package.json for easy running, use `./start` for dev tasks, `./run` for prod/deploy/side-effect-producing tasks.

# Goals

- domain, server, client, as separate apps with separate tests
- every gherkin step maps to a single domain command only
- every domain command/query/etc. takes (domain, metadata, params, external dependencies), the domain takes (store, cache)
- domain views return { somechild: { somechild: { somechild: etc. } } } where each branch will map to a react view and leaves are actual data
- render react views where the render method is inherited (the instance method is called view()), which renders the view, tests for errors, checks that all child views were rendered
- use typescript
- use convention over configuration
- create an imperative shell for each app (domain, client, server)
- create a functional root for each app (functin createDomain(someargs) { ... })
- build gpa-app using this approach

# Next

1. Switch to mocha for a test runner
2. Continue using custom assertions
3. Build a unified domain language, mocha tests import this domain language, or the domain tests are translated to mocha tests
4. Switch to react for rendering the client
5. Fix tool watch mode to be faster
6. Fix tool watch mode to fully clean up after child processes
7. 