/*jshint esversion: 6 */
'use strict';

(function () {
    window.addEventListener('hashchange', function () {
        var body = document.querySelector('body');
        body.classList.remove('hashChanged');
        setTimeout(function () {
            body.classList.add('hashChanged');
        }, 1);
    });
})();