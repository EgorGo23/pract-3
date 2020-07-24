;var modal = (function modal() {
    var MAIN_CLASS_NAME = 'panel__btn';
    var modalTextOpen = 'Test started';
    var modalTextClose = 'Test finished';

    getListItemsByClass = function(className) {
        var htmlListItemsByClass = document.getElementsByClassName(className);
        return Array.prototype.slice.call(htmlListItemsByClass);
    }

    open = function() {
        alert(modalTextOpen);
    }

    setHandler = function(elm, callback) {
        elm.addEventListener('click', callback);
    }

    function Modal() {}

    Modal.prototype.close = function() {
        alert(modalTextClose);
    }

    Modal.prototype.init = function() {
        var listItemsByClass = getListItemsByClass(MAIN_CLASS_NAME);

        for(var i = 0; i < listItemsByClass.length; i++) {
            setHandler(listItemsByClass[i], open);
        }
    }

    Modal.prototype.setModalOpenText = function(text) {
        modalTextOpen = text;
    }

    Modal.prototype.setModalCloseText = function(text) {
        modalTextClose = text;
    }


    var modal = new Modal();
    modal.init();

    return modal;
})();