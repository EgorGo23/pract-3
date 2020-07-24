;var table = (function table(utils) {
    var MAIN_STYLE_PATH = './styles/table.css';
    
    function Table() {
        utils.loadStyle(MAIN_STYLE_PATH, document.head);
    }

    Table.prototype.getListItemsByClass = function(className) {
        var htmlListItemsByClass = document.getElementsByClassName(className);
        return Array.prototype.slice.call(htmlListItemsByClass);
    }

    Table.prototype.setDisableState = function(tableClassName) {
        var listItemsByClass = getListItemsByClass(tableClassName);

        for(var i = 0; i < listItemsByClass.length; i++) {
            listItemsByClass[i].classList.contains('table_disabled')
                ? listItemsByClass[i].classList.remove('table_disabled')
                    : listItemsByClass[i].classList.add('table_disabled');
        }
    }

    Table.prototype.setTableDisplay = function(tableClassName, displayValue) {
        var listItemsByClass = getListItemsByClass(tableClassName);

        for(var i = 0; i < listItemsByClass.length; i++) {
            var tableDisplayClass = 'table_display_' + displayValue;
            listItemsByClass[i].classList.add(tableDisplayClass)
        }
    }

    return new Table();
})(utils);

