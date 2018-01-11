define(["NotImplementedError", "TypeCheck", "Failure"], function (NotImplementedError, TypeCheck, Failure) {
    return {
        /**
         * Checks if <memberList is implemented in constructor of <instance>
         * @public
         * @memberof Interface
         * @throws {TypeError} - If instance is undefined
         * @throws {TypeError} - If methodList is no a string array
         * @throws {NotImplementedError} - If method is not implemented
         * @param {String[]} memberList - Contains all method names
         * @param {Object} instance - Object which shall be checked
         * @returns {Boolean} - True, if members are implemented
         */
        areMembersImplemented: function (memberList, instance) {
            if (!TypeCheck.isObject(instance)) {
                Failure.throwTypeError("instance is not an object");
            }
            if (!TypeCheck.isArrayTypeOf(memberList, "string")) {
                Failure.throwTypeError("memberList is no a string array");
            }
            for (var i = 0; i < memberList.length; i++) {
                if (!instance.hasOwnProperty(memberList[i])) {
                    throw new TypeError("Member <" + memberList[i] + "> is not implemented");
                }
            }
            return true;
        },
        /**
         * Checks if <methodList>, is implemented in prototype of <instance>
         * @public
         * @memberof Interface
         * @throws {TypeError} - If instance is not an object
         * @throws {TypeError} - If methodList is no a string array
         * @throws {NotImplementedError} - If method is not implemented
         * @param {String[]} methodList - Contains all method names
         * @param {Object} instance - Object which shall be checked
         * @returns {Boolean} - True, if methods are implemented
         */
        areMethodsImplemented: function (methodList, instance) {
            if (!TypeCheck.isObject(instance)) {
                Failure.throwTypeError("instance is not an object");
            }
            if (!TypeCheck.isArrayTypeOf(methodList, "string")) {
                Failure.throwTypeError("methodList is no a string array");
            }
            var prototype = Object.getPrototypeOf(instance);
            for (var i = 0; i < methodList.length; i++) {
                if (!prototype.hasOwnProperty(methodList[i])) {
                    throw new NotImplementedError("Method " + methodList[i] + " is not implemented");
                }
            }
            return true;
        }
    };
}); 