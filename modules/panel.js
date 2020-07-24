;var panel = (function panel() {
    var MAIN_CLASS_NAME = 'panel';
    var MAIN_STYLE_PATH = './styles/panel.css';
    
    var getListItemsByClass = function(className) {
        var htmlListItemsByClass = document.getElementsByClassName(className);
        return Array.prototype.slice.call(htmlListItemsByClass);
    }
    
    var setHandler = function(elm, callback) {
        elm.addEventListener('click', callback);
    } 

    function Panel() {
        utils.loadStyle(MAIN_STYLE_PATH, document.head);
        this.defaultStyle = 'normal';
    }

    Panel.prototype.setPanelStyle = function(className, resultText) {
        var state = resultText || 'normal';

        var listItemsByClass = getListItemsByClass(className);
        
        for(var i = 0; i < listItemsByClass.length; i++) {
            if (state === 'success') {
                listItemsByClass[i].classList.add('panel-succeed');
            } else if (state === 'error') {
                listItemsByClass[i].classList.add('panel-error');
            }
        }
    }
    
    Panel.prototype.getHeaderTemplate = function(text) {
        return `
            <div class='panel__header'>${text}</div>
        `;
    }

    Panel.prototype.init = function(initialElm) {
        var listItemsByClass = getListItemsByClass(initialElm);

        for(var i = 0; i < listItemsByClass.length; i++) {
            setHandler(listItemsByClass[i], utilTests.startAllTests);
        }
    }

    var panel = new Panel();
    panel.init(MAIN_CLASS_NAME);

    return panel;
})();