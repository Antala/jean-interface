define(["NotImplementedError", "TypeCheck"], function (NotImplementedError, TypeCheck) {
    return {
        /**
         * Checks if the <functionList>, is implemented in prototype of <instance>
         * @public
         * @memberof Util
         * @throws {NotImplementedError} - If method is not implemented
         * @param {String[]} functionList - Contains all function names
         * @param {Object} instance - Object which should be checked
         * @returns {Boolean} - True, if interface is implemented, false otherwise
         */
        isImplemented: function (functionList, instance) {
            if (!instance) {
                return false;
            }
            if (functionList.length === 0 || !TypeCheck.isArrayTypeOf(functionList, "string")) {
                return false;
            }
            var prototype = Object.getPrototypeOf(instance);
            for (var i = 0; i < functionList.length; i++) {
                if (!prototype.hasOwnProperty(functionList[i])) {
                    throw new NotImplementedError("Method " + functionList[i] + " must be implemented in Class");
                }
            }
            return true;
        }
    }; 
}); 