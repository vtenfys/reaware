# ReAware

<img width="752" height="614" src="assets/screenshot.png" alt="ReAware app, with header Good morning, David, and with two buttons: Review Today's Cards and Journal New Thought" />

ReAware is an app designed to help improve your mental wellbeing, through a combination of [CBT-based techniques](https://en.wikipedia.org/wiki/Cognitive_behavioral_therapy) and [spaced repetition](https://en.wikipedia.org/wiki/Spaced_repetition).

ReAware is built with [NW.js](https://nwjs.io/), [webpack](https://webpack.js.org/), [React](https://reactjs.org/), [JSS](https://cssinjs.org/react-jss) and [PouchDB](https://pouchdb.com/), and is strongly inspired by [Anki](https://apps.ankiweb.net/).

## Development

Before starting development, make sure you've already installed [Node.js](https://nodejs.org/en/download/) and [pnpm](https://pnpm.js.org/en/installation).

### Install dependencies

Before developing ReAware, you will need to install its dependencies. Run the following command to do so:

```sh
pnpm install
```

### Building the app

#### Development mode

To build the app in development mode, run the following command:

```sh
pnpm run watch
```

In development mode, the build process stays running and watches for changes, rebuilding when a change is detected.

#### Production mode

To build the app in production mode, run the following command:

```sh
pnpm run build
```

In production mode, additional optimizations are enabled, and the build process does _not_ stay running.

### Running the app

If building in **development mode**, you should first open a new terminal window to allow the build process to continue.

Then, run the following command to start the app:

```sh
pnpm start
```

Chrome DevTools and React DevTools are available, and can be accessed using the keyboard shortcut F12.

## License

Licensed under the Open Software License version 3.0
