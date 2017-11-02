define([
    "Interface",
    "NotImplementedError"
], function (Interface, NotImplementedError) {
    describe('Interface.spec.js', function () {
        describe("Interface", function () {
            it("All necessary methods are available", function () {
                var numberOfMethods = 1;
                expect(Object.keys(Interface).length).toEqual(numberOfMethods);
                expect(Interface.isImplemented).not.toBeUndefined();
            });
        });
        describe("Interface.isImplemented", function () {
            var methodNameOne = "methodOne",
                methodNameTwo = "methodTwo",
                methodNameThree = "methodThree";
            var Test = function () { }; // jscs:ignore
            Test.prototype[methodNameOne] = function () { }; // jscs:ignore
            Test.prototype[methodNameTwo] = function () { }; // jscs:ignore
            var test = new Test();
            it("Responds with true, if interface is correctly implemented", function () {
                expect(Interface.isImplemented([methodNameOne, methodNameTwo], test)).toBe(true);
            });
            it("Responds with false, if the interface list elements arent strings", function () {
                expect(Interface.isImplemented([1, 2, 3], test)).toBe(false);
            });
            it("Responds with false, if no class instance is passed", function () {
                expect(Interface.isImplemented([methodNameOne, methodNameTwo])).toBe(false);
            });
            it("Throws NotImplementedError, if a method is not implemented", function () {
                try {
                    Interface.isImplemented([methodNameOne, methodNameTwo, methodNameThree], test);
                } catch (e) {
                    expect(e instanceof NotImplementedError).toBe(true);
                }
            });

        });
        describe("NotImplementedError", function () {
            var ie = {};
            beforeEach(function () {
                ie = new NotImplementedError();
            });
            it("Has all necessary members", function () {
                var numberOfMembers = 2;
                expect(Object.keys(ie).length).toEqual(numberOfMembers);
            });
        });
    });
});

