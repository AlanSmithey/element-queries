(function() {
    'use strict';
    // set container element queries
    var cols = document.querySelectorAll('.col'),
        colsLen = cols.length,
        storage = [];

    function setQuery() {

        for (var i = 0; i < colsLen; i++) {

            var size = cols[i].offsetWidth,
                type;

            switch (true) {
                case (size < 600):
                    type = 'mob';
                    break;
                case (size >= 600 && size < 900):
                    type = 'pad';
                    break;
                case (size >= 900 && size < 1200):
                    type = 'dsc';
                    break;
                default:
                    type = 'dscx';
            }

            if (type != storage[i]) {
                cols[i].setAttribute('data-mq', type);
                storage[i] = type;
            }
        }
    }

    setQuery();

    window.addEventListener('resize', setQuery);
})();
