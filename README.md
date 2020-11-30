# Next.js template

This is a template I put together after working through numerous online tutorials trying to bootstrap a Next.js project with several plugins to get started. While working through most of the tutorials I always seemed to find one or two sections which were out of date and no longer worked with the latest package versions. 

I'm without a doubt creating yet another useless template which will quickly go out of date... This is meant mainly for my own learning so use at your own risk 😬

# Steps I followed

Based on the [official Next.js documentation](https://nextjs.org/docs) and a bunch of nice tutorials, here's the steps I followed:

### Install Next.js
`npx create-next-app`

### Change to app directory
`cd name_of_app`

### Init tsconfig
```
touch tsconfig.json`
yarn run dev
```

### Add Typescript
`yarn add --dev typescript @types/react @types/node`

### Install ESLint
`yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react`

### Install Prettier
`yarn add -D prettier eslint-config-prettier eslint-plugin-prettier`

### Install simple sort plugin
`yarn add -D eslint-plugin-simple-import-sort`

### Init ESLint configuration files
`touch .eslintrc.json .eslintignore`

### Populate ESLint run commands
```
{
  "parser": "@typescript-eslint/parser",
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier/react",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  "env": {
    "es6": true,
    "browser": true,
    "jest": true,
    "node": true
  },
  "plugins": [
    "@typescript-eslint",
    "react",
    "simple-import-sort",
    "prettier"
  ],
  "rules": {
    "prettier/prettier": ["error", {}, { "usePrettierrc": true }],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "globals": {
    "React": "writable"
  }
}
```

### Populate ESLint ignores
```
**/node_modules/*
**/out/*
**/.next/*
```

### Init Prettier configuration files
`touch .prettierrc .prettierignore`

### Populate Prettier run commands
```
{
	"semi": true,
	"singleQuote": true
}
```

### Populate Prettier ignores
```
node_modules
.next
yarn.lock
package-lock.json
public
```

### Install testing packages
`yarn add -D jest @testing-library/react @types/jest babel-jest @testing-library/jest-dom @testing-library/user-event @testing-library/dom`

### Init test configurations
`touch .babelrc jest.config.js jest.setup.ts`

### Populate .babelrc
```
{
  "presets": [
    "next/babel"
  ]
}
```

## Populate jest.config.js
```
module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
};
```

## Populate jest.setup.ts
`import '@testing-library/jest-dom';`

## Install Theme UI with components & presets
`yarn add theme-ui @theme-ui/components @theme-ui/presets`

## Install Storybook
`npx sb init`

## Populate Storybook preview.js
```
import { ThemeProvider } from 'theme-ui';
import theme from '../styles/theme';

export const decorators = [(Story) => <ThemeProvider theme={theme}><Story/></ThemeProvider>];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
```

# Inspriation

- https://medium.com/swlh/2020-complete-setup-for-storybook-nextjs-typescript-scss-and-jest-1c9ce41e6481
- https://dev.to/maciekgrzybek/testing-ui-next-js-typescript-jest-and-react-testing-library-4dkl
- https://medium.com/better-programming/how-to-use-eslint-and-prettier-in-your-next-js-application-with-typescript-8ffc9ac5b672