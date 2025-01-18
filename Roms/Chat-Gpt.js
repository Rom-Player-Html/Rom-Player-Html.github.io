(function (modules) {
    var moduleCache = {};

    // Custom require function
    function require(moduleId) {
        // Check if the module is already loaded
        if (moduleCache[moduleId]) {
            return moduleCache[moduleId].exports;
        }

        // Create a new module if it's not loaded
        var module = moduleCache[moduleId] = { exports: {}, loaded: false };
        modules[moduleId](module, module.exports, require);
        module.loaded = true;

        return module.exports;
    }

    // Add methods to the require function to handle various functionalities
    require.m = modules;
    require.c = moduleCache;

    // Define property on object with getter for compatibility with ES Modules
    require.d = function (exports, name, getter) {
        if (!exports.hasOwnProperty(name)) {
            Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
        }
    };

    // Mark a module as an ES module
    require.r = function (exports) {
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        }
        Object.defineProperty(exports, 'exports', { enumerable: true });
    };

    // Handle module exports and ES module imports
    require.t = function (value, flags) {
        if (flags & 1) value = require(value); // Import module
        if (flags & 8) return value;
        if (flags & 4 && typeof value === 'object' && value && value.__esModule) return value;
        var result = Object.create(null);
        require.r(result);
        Object.defineProperty(result, 'default', { enumerable: true, value: value });

        if (flags & 2 && typeof value !== 'string') {
            for (var key in value) {
                require.d(result, key, function (key) {
                    return value[key];
                });
            }
        }
        return result;
    };

    // Get the default export of a module
    require.n = function (module) {
        var getter = module && module.__esModule
            ? function () { return module.default; }
            : function () { return module; };
        require.d(getter, 'a', getter);
        return getter;
    };

    // Check if a property exists on an object
    require.o = function (obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
    };

    // Placeholder for public path configuration
    require.p = '';

    // Start the application by loading the initial module (0xb)
    require(require.s = 0xb);

})(function (modules) {
    return {
        // Module 0xb (Game loader or main module)
        '0xb': function (module, exports, require) {
            // Initialize game-related variables and URLs
            var ejs_gameUrl = "https://example.com/game";
            var ejs_loader_url = "https://example.com/loader";

            // Simulate loading the game with provided URLs
            console.log("Loading game from:", ejs_gameUrl);
            console.log("Loading game loader from:", ejs_loader_url);

            // Example game start logic (this can be replaced with actual game loading logic)
            function startGame() {
                console.log("Starting the game...");
            }

            // Start the game when the module is loaded
            startGame();
        },

        // Module 0x3 (Could be an additional utility or helper module)
        '0x3': function (module, exports) {
            exports.a = "Some utility value or function";
            console.log("Module 0x3 loaded:", exports.a);
        },

        // Module 0x5 (Another module that deals with scripts)
        '0x5': function (module, exports) {
            exports.script = "Some script content";
            exports.scriptLegacy = "Some legacy script content";
            
            console.log("Module 0x5 loaded with scripts:", exports.script);
        }
    };
});
