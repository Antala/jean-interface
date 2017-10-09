
## Description

Provides functionality to check, if an  class implements functions which are defined interface-like in an base class.

## Support
Supports both CommonJS and AMD eco system. If there is no loader, Interface is registered as a browser variable.

## Code Example
- Use it as browser variable
```js
var BaseClass = (function (){
    var BaseClass = function(){
        // If inherited class does not implement "add" & "remove"
        // a error is fired
        Interface.isImplemented(["add", "remove"], this); 
    };
    return BaseClass;
})();

var ChildClass = (function(){
    var ChildClass = function(){
        BaseClass.call(this);
    };
    // Interface method
    ChildClass.prototype.add = function () {};
    // Interface method
    ChildClass.prototype.remove = function(){};
    return ChildClass;
})();   
```
- Use it with require.js
```javascript
require(["path/to/Interface"], function(Interface){
    // Work with Interface
});
```
- Use it with node.js
```js
var Interface = require("jean-interface");
```

## Installation

`npm install jean-interface --save --legacy-bundling`

## API Reference

### isImplemented(functionList, instance) 

Checks if the `functionList`, is implemented in prototype of `instance`

**Parameters**
- **functionList**: `String[]` - Contains all function names
- **instance**: `Object` - Object which should be checked

**Returns**: 
- `Boolean` - True, if interface is implemented, false otherwise

## Tests

Open spec/spec-runner.html in browser to see the test cases.

## License

MIT