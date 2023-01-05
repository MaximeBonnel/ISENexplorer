# throw-error

Throws something if it’s an Error; otherwise returns it.

## Installation

Requires [Node.js](https://nodejs.org/) 6.0.0 or above.

```bash
npm i throw-error
```

## API

The module exports a single function.

### Parameter

`x` (any): A value which may or may not be an Error object.

### Return Value

Returns `x` only if it isn’t an Error.

## Example

```javascript
const throwError = require('throw-error')

throwError('not an error') // 'not an error'
throwError(new Error()) // Uncaught Error
```
