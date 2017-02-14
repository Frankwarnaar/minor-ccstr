/*jshint esversion: 6 */
'use strict';
(function() {
    window.addEventListener('hashchange', () => {
        const body = document.querySelector('body');
        body.classList.remove('hashChanged');
        setTimeout(() => {
            body.classList.add('hashChanged');
        }, 1);
    });
}());
