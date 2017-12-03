# bpm4test

[bpm4test](https://github.com/lorenzokerbrat/bpm4test) implements a simplified version of [bpmn-js](https://github.com/bpmn-io/bpmn-js)'s modeler to make BPMN 2.0 process diagrams for model-based testing purposes.


## List of changes from bpmn-js

Elements have been removed from the modeler for simplicity. Only the following elements are still present in bpm4test:
- Start node
- Task
- Service Task (sub process)
- Exclusive and Parallel Gateway
- Connector
- End node
- Annotation
- Pool
- Lane


## Building

You need a [NodeJS](http://nodejs.org) development stack with [npm](https://npmjs.org) and [grunt](http://gruntjs.com) installed to build the project.

To install all project dependencies execute

```
npm install
```

Build the application (including [bpmn-js](https://github.com/bpmn-io/bpmn-js)) using [browserify](http://browserify.org) via

```
grunt
```

You may also spawn a development setup by executing

```
grunt auto-build
```

Both tasks generate the distribution ready client-side modeler application into the `dist` folder.

Serve the application locally or via a web server (nginx, apache, embedded).


## License

MIT
