# ReAware

<img width="752" height="614" src="assets/screenshot.png" alt="ReAware app, with header Good evening, David, and with two buttons: Review Today's Cards and Journal New Thought" />

ReAware is an app designed to help improve your mental wellbeing, through a combination of [CBT-based techniques](https://en.wikipedia.org/wiki/Cognitive_behavioral_therapy) and [spaced repetition](https://en.wikipedia.org/wiki/Spaced_repetition).

ReAware is built with [React](https://reactjs.org/) and [NW.js](https://nwjs.io/).

## Development

Before starting development, make sure you've already installed [Node.js](https://nodejs.org/en/download/) and [PNPM](https://pnpm.js.org/en/installation).

### Install dependencies

Run the following command in a terminal:

```sh
NWJS_BUILD_TYPE=sdk pnpm install
```

Remove `NWJS_BUILD_TYPE=sdk` to install the normal version of NW.js, which doesn't include Chrome DevTools.

### Building the app

**To build the app in development mode**, run the following command:

```sh
pnpm run watch
```

Leave the process running to enable automatic rebuilds when any source files are modified.

**To build the app in production mode**, run the following command:

```sh
pnpm run build
```

This differs from the `watch` command in that NPM packages are included in the bundle, rather than being required at runtime. Additionally, `process.env.NODE_ENV` is set to `production`, enabling performance optimizations in some packages.

### Running the app

**To run the app in development mode**, run the following command:

```sh
pnpm run dev
```

This launches Chrome DevTools and [React DevTools](https://www.npmjs.com/package/react-devtools) alongside the app itself, regardless of whether the app was built in development or production mode.

Sometimes, the app may start before React DevTools are ready. If this occurs, right-click in the app window and select "Reload app". After reloading, React DevTools will connect.

**To run the app in production mode**, run the following command:

```sh
pnpm start
```

In this mode, Chrome DevTools and React DevTools are not automatically opened.

## License

Licensed under the Open Software License version 3.0
