# Contributing to TickVit

Currently, TickVit is in the development stage, and is only accepting contributions from organization members.

## Roles

There are 2 roles for frontend development, reviewers and contributors. Everyone must work on their own branches. Contributors will have to create pull requests, and get it approved by Reviewers to merge their commits back into main.

## Project Structure

This project was created with nextjs 12. Here is the basic overview.

### components

All components must have its own folder, in which both a component.tsx and a component.module.scss file must be present.

### pages

Nextjs comes with its own [router](https://nextjs.org/docs/routing/introduction), which means file and folder structure in the pages directory, determine what component shows up in each route. So styling for each page must be in the /styles directory.

### styles

This folder should contain styling for each page. The [_colors.scss](https://github.com/TickVIT/tickvit-next/blob/main/styles/_colors.scss) file contains all colors for the project, which can be accessed globally using the @use "./path"; command. 
>import with `@use  './colors';`
use with `background: colors.$button-gradient;`

Every scss file must be modules (named with filename.module.scss) to prevent clashing of css classes, and must be imported like 
```jsx
import  classes  from  '../styles/Home.module.scss'
```
and used like 
```jsx
<button  className={classes.loginButton}>Login</button>
```
.loginButton is a classname used in Home.module.scss

## Environment Config

### yarn

We prefer using only yarn instead of npm, to increase speed, and prevent lock file conflicts. [yarn cheat sheet](https://shift.infinite.red/npm-vs-yarn-cheat-sheet-8755b092e5cc)
 > To install yarn
```bash
npm i -g yarn
```

### prettier

We're using prettier as our formatter. Setting this up is optional as there is a github action, which will format your code automatically. But, you might face merge conflicts if you skip this.
> To install prettier in vscode, install this [extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).
> 
`Ctrl`  + `Shift` + `P` to open your command palette, then type  `Open settings (JSON)` and hit enter. Paste these lines, save and restart vscode.
```json
"editor.formatOnSave":  true,
"prettier.tabWidth":  4,

"[javascript]": {
"editor.defaultFormatter":  "esbenp.prettier-vscode"
},
"[typescript]": {
"editor.defaultFormatter":  "esbenp.prettier-vscode"
},
"[typescriptreact]": {
"editor.defaultFormatter":  "esbenp.prettier-vscode"
},
"[json]": {
"editor.defaultFormatter":  "esbenp.prettier-vscode"
},
```
Now your code should automatically format on save.

## Getting Started
Clone this repo
```bash
git clone https://github.com/TickVIT/tickvit-next.git
```
Install packages
```bash
cd tickvit-next
yarn
```
Start development server
```bash
yarn dev
```
Create and switch to your own branch. (branch name can be the feature/page/component you're working on)
```bash
git checkout -b <branch_name>
```
After committing your work, push the branch to the repo.
```bash
git push origin <branch_name>
```
Go to the github repo and create a pull request, and wait for your reviewer`s feedback/approval.


