# Ugrade API

This is the API of Ugrade, an open-source system to deal with distance learning.

## Prerequisites

1. Make sure you have all linting extensions installed in your VSCode, they are:

- Prettier
- ESLint
- EditorConfig

2. Node version above 10.18 (you can verify it by running `node --version` on your terminal)
3. A properly set up MongoDB database (it's highly recommended to run a Docker container)

## How to run

1. Install project dependencies by running `npm i`
2. Copy the **.env.example** file and rename it to **.env.development** and fill in all the fields with all your development workspace information
3. Run in development mode with the command `npm run dev`

## Commit hooks

Some Husky hooks that may prevent you from committing, they are:

- ESLint: ensures that there are no code inconsistencies in your changes
- Commitlint: ensures that your commit is following [some conventions](https://github.com/conventional-changelog/commitlint/#what-is-commitlint).

To see what went wrong while committing your changes, you can either execute git commands via Terminal or go to the **Output** tab in your VSCode.

## Testing

**Under construction**

## Deploying

**Under construction**
