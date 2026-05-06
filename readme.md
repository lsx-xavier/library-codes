# Library Codes

Welcome to the **Library Codes**! This repository provides reusable configurations and utilities to maintain consistent standards across projects.

## Packages

- [`@library-codes/eslint-config`](./configs/eslint): Customizable ESLint configuration for JavaScript/TypeScript, React, and Next.js projects.
- [`@library-codes/prettier-config`](./configs/prettier): Consistent Prettier formatting rules for codebases.
- [`@library-codes/tsconfig-config`](./configs/tsconfig/): Shared TypeScript configurations.

The example `codes/` subproject demonstrates how to consume these configs and have some components.

---

## Getting Started

> **Note**: Use Node.js v18+ and PNPM or Yarn workspaces for best compatibility.

### 1. Install dependencies

From the repository root:

```sh
pnpm install
# or
yarn install
```

### 2. Usage in your projects

#### ESLint

Install config (included if using this monorepo):

```sh
pnpm add -D @library-codes/eslint-config
# or
yarn add -D @library-codes/eslint-config
```

Create an ESLint config (`eslint.config.js`):

```js
import eslintConfig from "@library-codes/eslint-config/react"; // or 'base' | 'next'

export default eslintConfig;
```

#### Prettier

Install config (included if using this monorepo):

```sh
pnpm add -D @library-codes/prettier-config prettier
```

In your `package.json`:

```json
"prettier": "@library-codes/prettier-config"
```

#### TypeScript

Install config:

```sh
pnpm add -D @library-codes/tsconfig-config typescript
```

In your `tsconfig.json`:

```json
{
  "extends": "@library-codes/tsconfig-config/next", // or 'base' | 'react'
  "include": ["src/**/*.ts", "src/**/*.tsx"],
  "exclude": ["node_modules"]
}
```

---

## Linting, Formatting, and Scripts

From within a subproject (e.g. `codes/`):

| Command             | Description                       |
| ------------------- | --------------------------------- |
| `pnpm lint`         | Runs ESLint                       |
| `pnpm lint:fix`     | Automatically fixes ESLint issues |
| `pnpm format`       | Formats code with Prettier        |
| `pnpm format:check` | Checks formatting                 |

> These scripts are recommended for your own projects too.

---

## Contributing

1. Fork this repo, make changes in a branch.
2. Run `pnpm format` and `pnpm lint` before submitting a pull request.
3. Ensure all config changes are documented and tested.

---

## License

MIT © [Lucas Xavier](https://github.com/lsx-xavier)

---
