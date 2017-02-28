/*jshint esversion: 6 */
(() => {
	'use strict';

	window.addEventListener('hashchange', () => {
		const body = document.querySelector('body');
		const hash = window.location.hash;
		console.log(hash);
		if (hash !== '' && hash !== '#chat') {
			body.classList.remove('hashChanged');
			setTimeout(() => {
				body.classList.add('hashChanged');
			}, 1);
		}
	});

	const $link = document.querySelector('[href="/products"]');
	const $children = document.querySelectorAll('[href="/products"]+ ul li');

	$link.addEventListener('focusin', () => {
		$link.classList.add('active');
	});

	$children[$children.length - 1].addEventListener('focusout', () => {
		$link.classList.remove('active');
	});

})();
