# Yarn React Workspace

A monorepo for multiple React applications and a shared component package. The setup includes:

-   [Yarn workspace](https://yarnpkg.com/lang/en/docs/workspaces/) for three React applications and a shared package dependency
-   Repo-wide linting with [ESLint](https://eslint.org/), [Typescript ESLint](https://github.com/typescript-eslint/typescript-eslint) and [Prettier](https://prettier.io/)
-   Enabled [Enzyme](https://airbnb.io/enzyme/) testing for every application and package
-   Enabled [Storybook](https://storybook.js.org/) for the shared component package
-   CICD pipeline set up with [Circle CI](https://circleci.com/) and [Firebase](https://firebase.google.com/docs/hosting) hosting (In-Progress)

## Installation

```bash
yarn install
```

## Commands

You can run any npm script for each application separately as follows:

```bash
yarn components run <script>
yarn facebook run <script>
yarn messenger run <script>
yarn workplace run <script>
```

For a command to execute on every application and package, you can do:

```bash
yarn workspaces run <script>
```

See Yarn documentations below for more examples:

-   [Yarn Workspace](https://yarnpkg.com/lang/en/docs/cli/workspace/)
-   [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/cli/workspaces/)
