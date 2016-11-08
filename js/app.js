$(document).ready(function() {
	"use strict"

	var hash = location.hash,
		links = $('.js-tabs-link'),
		allContent = $('.js-content-item'),
		filtered = hash === filterElements(hash).link.attr('href') ?  filterElements(hash) : filterElements();

	function filterElements(hash) {
		var link, content;

		if(hash) {
			link = links.filter('[href="' + hash + '"]');
			content = allContent.filter('[data-content="' + hash.slice(1) + '"]');
		} else {
			link = links.eq(0);
			content = allContent.eq(0);
		}
		return {
			link: link,
			content: content
		};
	}

	function addClassElement(currentLink, currentContent) {
		links.add(allContent).removeClass('is-active');
		currentLink.add(currentContent).addClass('is-active');
	}

	addClassElement(filtered.link, filtered.content);

	$(window).on( 'hashchange', function(e) {
		hash = location.hash;
		filtered = hash === filterElements(hash).link.attr('href') ?  filterElements(hash) : filterElements();

		addClassElement(filtered.link, filtered.content);
	});
});