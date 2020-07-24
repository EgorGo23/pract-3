var superPanel = (function superPanel(panel) {
    var MAIN_STYLE_PATH = './styles/superPanel.css';
    var MODULE_PATH = './modules/superPanel.js';

    function SuperPanel() {
        utils.loadStyle(MAIN_STYLE_PATH, document.head);

        this.defaultStyle = 'success';
        this.getHeaderTemplate = function(text) {
            return `
                <div class='panel__header super-header'>${text}</div>
            `;
        }   
    }
    
    SuperPanel.prototype = panel;
    
    return new SuperPanel();
})(window.windowpanel);