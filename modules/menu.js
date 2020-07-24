var menu = (function menu(utils) {
    var MAIN_STYLE_PATH = './styles/menu.css';
    var MAIN_CLASS_NAME = 'menu';

    function Menu() {
        utils.loadStyle(MAIN_STYLE_PATH, document.head);
    }

    Menu.prototype.getTemplateMenuHeader = function(text) {
        var text = text || '';
        
        return `
            <div class='menu__header header'>
                <span class='header__text'>${text}</span>
            </div>
        `;
    }
    
    return new Menu();
})(utils);