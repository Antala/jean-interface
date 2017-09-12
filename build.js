({
    baseUrl: '.',
    out: 'dist/Interface.js',
    optimize: 'none',
    include: ["node_modules/almond/almond", "src/Interface"],
    wrap: {
        start: 
        "(function (root, factory) { \n" +
        " \t if (typeof define === 'function' && define.amd) { \n" +
        "\t \t define([], factory); \n" +
        "\t} else { \n" +
        "\t \troot.Interface = root.Interface || {}; \n" +
        "\t \troot.Interface = factory();\n" +
        "\t}\n" +
        "}(this, function() {",
        end:
        "\n \t return require('src/Interface'); \n" +
        "}));"
    },
    paths: {
        InterfaceError: "node_modules/jean-core-type/src/error/InterfaceError",
        TypeCheck: "node_modules/jean-type-check/src/TypeCheck"
    }
})