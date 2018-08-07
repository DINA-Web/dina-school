#!/bin/sh
# nodemon todos.js
/home/ingimar/repos/inkimar-github/dina-school/js/5-todo-api/my-todo
- package.json innehåller de script du vill köra.
>  yarn start:debug ( läser från package.json, samma som 'npm install' )
-- den startar index.js , och  index.js startar todos.js ( require('./src/todos.js') )


IDE = Visual Studio (Version: 1.26.0-insider)
- extenstions ( left column, 5th element)
- - prettier
- - eslint
- - Babel Es6/Es7

updated user settings

{
  "workbench.colorTheme": "Oceanic Next Italic",
  "workbench.editor.closeEmptyGroups": false,
  "debug.toolBarLocation": "floating",
  "editor.fontFamily": "Operator Mono, Menlo, Monaco, 'Courier New', monospace",
  "editor.fontSize": 14,
  "editor.tabSize": 2,
  "editor.rulers": [
    80,
    100
  ],
  "workbench.colorCustomizations": {
    "statusBar.background": "#1A1A1A",
    "statusBar.noFolderBackground": "#212121",
    "statusBar.debuggingBackground": "#263238"
  },
  "files.exclude": {
    ".happypack": true,
    "build/**": true,
    "dist/**": true,
    "es5/**": true,
    "**/.js.html": true,
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true
  },
  "files.watcherExclude": {
    "build/**": true,
    "dist/**": true,
    "es5/**": true,
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/node_modules/**": true
  },
  "window.openFoldersInNewWindow": "on",
  "window.title": "${activeEditorMedium}${separator}${rootName}",
  "window.newWindowDimensions": "maximized",
  "editor.scrollBeyondLastLine": false,
  "editor.minimap.enabled": false,
  "window.zoomLevel": 0,
  "editor.formatOnSave": false,
  "prettier.eslintIntegration": true,
  "prettier.trailingComma": "es5",
  "prettier.semi": false,
  "prettier.singleQuote": true,
  "javascript.implicitProjectConfig.checkJs": false,
  "editor.multiCursorModifier": "ctrlCmd",
  "editor.snippetSuggestions": "top",
  "extensions.ignoreRecommendations": false,
  "files.associations": {
    "*.overrides": "less",
    "*.variables": "less"
  },
  "javascript.updateImportsOnFileMove.enabled": "always"
}

those are the general settings, 
then for each workspace I define `"editor.formatOnSave": true,` if I want to use `prettier`



