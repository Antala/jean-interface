define([
    "Interface",
    "CoreType"
], function (Interface, CoreType) {
    describe('Interface.spec.js', function () {
        describe("Interface", function () {
            it("TODO: Check if all methods are available | EXPECTATION: Interface has all necessary methods", function () {
                var numberOfMethods = 1;
                expect(Object.keys(Interface).length).toEqual(numberOfMethods);
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
            it("TODO: Pass interface list and instance | EXPECTATION: Interface is correctly implemented", function () {
                expect(Interface.isImplemented([methodNameOne, methodNameTwo], test)).toBe(true);
            });
            it("TODO: Pass interface list which have more parameters than implemented in class | EXPECTATION: Thrown exception have type <InterfaceError>", function () {
                try {
                    Interface.isImplemented([methodNameOne, methodNameTwo, methodNameThree], test);
                } catch (e) {
                    expect(e instanceof CoreType.NotImplementedError).toBe(true);
                }
            });
            it("TODO: Pass interface list which have false type | EXPECTATION: Return false", function () {
                expect(Interface.isImplemented([1, 2, 3], test)).toBe(false);
            });
            it("TODO: Pass no instance which should be checked if the methods are implemented | EXPECTATION: Return false", function () {
                expect(Interface.isImplemented([methodNameOne, methodNameTwo])).toBe(false);
            });
        });
    });
});

