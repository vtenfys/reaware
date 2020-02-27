# ReAware

<img width="752" height="614" src="assets/screenshot.png" alt="ReAware app, with header Good morning, David, and with two buttons: Review Today's Cards and Journal New Thought" />

ReAware is an app designed to help improve your mental wellbeing, through a combination of [CBT-based techniques](https://en.wikipedia.org/wiki/Cognitive_behavioral_therapy) and [spaced repetition](https://en.wikipedia.org/wiki/Spaced_repetition).

ReAware is built with [NW.js](https://nwjs.io/), [webpack](https://webpack.js.org/), [React](https://reactjs.org/), [JSS](https://cssinjs.org/react-jss) and [PouchDB](https://pouchdb.com/), and is strongly inspired by [Anki](https://apps.ankiweb.net/).

## Development

Before starting development, make sure you've already installed [Node.js](https://nodejs.org/en/download/) and [pnpm](https://pnpm.js.org/en/installation).

### Install dependencies

Run the following command in a terminal:

```sh
NWJS_BUILD_TYPE=sdk pnpm install
```

Remove `NWJS_BUILD_TYPE=sdk` to install the normal version of NW.js, which doesn't include Chrome DevTools.

### Building the app

**To build the app in development mode**, run the following command:

```sh
pnpm run build:dev
```

Leave the process running to enable automatic rebuilds when any source files are modified.

**To build the app in production mode**, run the following command:

```sh
pnpm run build
```

This sets `process.env.NODE_ENV` to `production`, enabling performance optimizations in some packages such as React, and doesn't watch for changes after the build is complete.

### Running the app

**To run the app in development mode**, run the following command:

```sh
pnpm run start:dev
```

This launches Chrome DevTools and [React DevTools](https://www.npmjs.com/package/react-devtools) alongside the app itself, regardless of whether the app was built in development or production mode.

**To run the app in production mode**, run the following command:

```sh
pnpm run start
```

In this mode, Chrome DevTools and React DevTools are not automatically opened.

## License

Licensed under the Open Software License version 3.0
