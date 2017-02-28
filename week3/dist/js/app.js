'use strict';

/*jshint esversion: 6 */
(function () {
	'use strict';

	window.addEventListener('hashchange', function () {
		var body = document.querySelector('body');
		body.classList.remove('hashChanged');
		setTimeout(function () {
			body.classList.add('hashChanged');
		}, 1);
	});

	var $link = document.querySelector('[href="/products"]');
	var $children = document.querySelectorAll('[href="/products"]+ ul li');

	$link.addEventListener('focusin', function () {
		$link.classList.add('active');
	});

	$children[$children.length - 1].addEventListener('focusout', function () {
		$link.classList.remove('active');
	});
})();