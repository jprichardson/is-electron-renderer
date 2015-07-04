is-electron-renderer
====================

Check if code is running in Electron `renderer` process.

Why?
----

Electron code can run in either the `main` process or
the `renderer` process. This is the same as asking if
the code is running in a web page with access to the
DOM or not. Read more here: https://github.com/atom/electron/blob/master/docs/tutorial/quick-start.md

Use cases:

- Creating a single module that acts differently whether it's running in `main` or `renderer`.
- Logging utility. One process (`main`) would be responsible for writing to log files, while
renderers would send log data to the `main`. Would allow your code to have one `log` method.
- Testing. Your test code may behave differently if the DOM is available.
- Normalize `console.log` behavior. `console.log` behavior is weird in `renderer`, this can easily be fixed.


Install
-------

    npm i --save is-electron-renderer


Usage
-----

```js
var isRenderer = require('is-electron-renderer')

console.log(isRenderer)
// => true
```

License
-------

MIT
