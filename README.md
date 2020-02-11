# ReAware

ReAware is an app designed to help improve your mental wellbeing, through a combination of [CBT-based techniques](https://en.wikipedia.org/wiki/Cognitive_behavioral_therapy) and [spaced repetition](https://en.wikipedia.org/wiki/Spaced_repetition).

ReAware is built with [React](https://reactjs.org/) and [NW.js](https://nwjs.io/).

## Development

Before starting development, make sure you've already installed [Node.js](https://nodejs.org/en/download/) and [PNPM](https://pnpm.js.org/en/installation).

### Install dependencies

Run the following command in a terminal:

```sh
NWJS_BUILD_TYPE=sdk pnpm install
```

Remove `NWJS_BUILD_TYPE=sdk` to install the normal version of NW.js, which doesn't include DevTools.

### Building the app

To build the app in development mode, run the following command:

```sh
pnpm run watch
```

Leave the process running to enable automatic rebuilds when any source files are modified.

To build the app in production mode, run the following command:

```sh
pnpm run build
```

This differs from the `watch` command in that NPM packages are included in the bundle, rather than being required at runtime. Additionally, `process.env.NODE_ENV` is set to `production`, enabling performance optimizations in some packages.

### Running the app

To run the app in development mode, run the following command:

```sh
pnpm run dev
```

This launches [React DevTools](https://www.npmjs.com/package/react-devtools) alongside the app itself.

**Note:** Your app must be built in development mode for React DevTools to function.

To run the app in production mode, run the following command:

```sh
pnpm start
```

This is the same as development mode, except React DevTools are not opened.

## License

Licensed under the Open Software License version 3.0
