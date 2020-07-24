var app = (function app(utils) {
    var ID = 'app';
    var MAIN_STYLE_PATH = './styles/styles.css';
    var MODULE_PATHS = ['./test/utils.test.js', './modules/menu.js', './modules/modal.js', './modules/panel.js', './modules/superPanel.js', './modules/table.js'];

    function App() {
        utils.loadStyle(MAIN_STYLE_PATH, document.head);
    }

    App.prototype.loadModuleCollection = function(modulesCollection) {
        var modulesCollection = modulesCollection || [];

        modulesCollection.forEach(modulePath => {
            utils.loadModule(modulePath, document.body);
        });
    }

    var app = new App();
    app.loadModuleCollection(MODULE_PATHS);

    return new App();
})(window.utils);