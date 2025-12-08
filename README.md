# twd-solid-example

A showcase SolidJS + Vite application demonstrating end-to-end testing with [TWD (Test Web Dev)](https://brikev.github.io/twd/). This project includes a complete todo list application with comprehensive test coverage using TWD.

## About TWD

[Test Web Dev (TWD)](https://brikev.github.io/twd/) is a powerful testing framework for web applications. It provides seamless mocking, DOM interactions, and visual regression testing capabilities. This project showcases how easily TWD integrates with SolidJS applications.

## Features

- **SolidJS + TypeScript**: Reactive, performant UI with full type safety
- **Tailwind CSS**: Utility-first styling for responsive design
- **Todo Application**: Full-featured todo list with create, read, and delete operations
- **TWD Testing**: End-to-end tests demonstrating TWD capabilities with SolidJS
- **Mock API Server**: JSON Server for local API mocking
- **SolidJS Router**: Client-side routing with multiple pages

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Solid Language Support](https://marketplace.visualstudio.com/items?itemName=solid-js.solid-devtools-language-support)

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Solid Devtools](https://chromewebstore.google.com/detail/solid-devtools/kmcfjchnmmaeeagadbhoofajiopoceel)
- Firefox:
  - [Solid Devtools](https://addons.mozilla.org/en-US/firefox/addon/solid-devtools/)

Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Project Structure

```
src/
├── pages/           # Page components (HelloWorld, Todos, NotFound)
├── api/            # API client functions
└── twd-tests/      # TWD end-to-end tests
    ├── helloWorld.twd.test.ts
    └── todoList.twd.test.ts
    └── mocks/
        └── todoList.json
```

## Testing with TWD

This project includes TWD tests for:
- **Hello World Page**: Counter button functionality and page rendering
- **Todo List**: CRUD operations (Create, Read, Delete) with mock API requests

Run tests by executing TWD in your testing environment. Refer to the [TWD documentation](https://brikev.github.io/twd/) for detailed testing instructions.

## Project Setup

```sh
npm install # or pnpm install or yarn install
```

Those template dependencies are maintained via [pnpm](https://pnpm.io) via `pnpm up -Lri`. This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work.

### Compile and Hot-Reload for Development

```sh
npm run serve:dev
```

This command runs both the development server and the mock API server in parallel. The app will be available at `http://localhost:5173` and the API at `http://localhost:3001`.

### Run Tests with TWD

```sh
npm run dev
```

TWD is automatically initialized in development mode and will be available in the browser.

### Compile and Minify for Production

```sh
npm run build
```

Builds the app for production to the `dist` folder. It correctly bundles Solid in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

## Available Scripts

- **`npm run dev`** or **`npm start`**: Run the Vite dev server only at http://localhost:5173
- **`npm run build`**: Build for production
- **`npm run serve`**: Run the mock API server only at http://localhost:3001
- **`npm run serve:dev`**: Run both dev server and API server in parallel

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)

## This project was created with the [Solid CLI](https://github.com/solidjs-community/solid-cli)
