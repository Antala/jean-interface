
## Description

Provides functionality to check, if an  class implements functions which are defined
interface-like in an base class.

## Code Example

```javascript
// Define class with functions
define(["path/to/Interface"], function(Interface){
     var BaseClass = function(){
         // If not implemented, exception will be thrown
         Interface.isImplemented(["add", "remove"], this); 
     };
     return Test;
});

define(["path/to/BaseClass"], function(BaseClass){
    var ChildClass = function(){
        BaseClass.call(this);
    };

    ChildClass.prototype.add = function () {};
    ChildClass.prototype.remove = function(){};

    return ChildClass;
});
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