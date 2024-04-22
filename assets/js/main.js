// This function will handle the "spotlight" feature of cards, making them bigger and smaller on click.
let quickViewButtons = $('.spotlight');
quickViewButtons.on('click', function() {
	// note whether the card is already expanded
	let thisCard = $(this).closest('div.card');
	var isAlreadyExpanded = thisCard.hasClass('full-width')
	// remove any already expanded cards
	let expandedCards = $('.card.full-width');
	expandedCards.toggleClass('full-width');
	// expand this card if it wasn't already
	if (!isAlreadyExpanded) {
		thisCard.toggleClass('full-width');
	}
});

// change the appearance and behaviour of the nav bar based on scroll point
$(document).on('scroll', function() {
	let navBar = $('.navbar');
	// check to see if the top of the window is below the about page
	if ($(this).scrollTop() >= $('#navBarSwap').position().top) {
		// add the "sticky-top" class to the nav bar
		if (!navBar.hasClass('bg-primary')) {
			//navBar.toggleClass('sticky-top'); // turn on sticky top
			navBar.toggleClass('bg-primary');
		}
	} else {
		// remove the "sticky-top" class to the nav bar
		if (navBar.hasClass('bg-primary')) {
			//navBar.toggleClass('sticky-top');
			navBar.toggleClass('bg-primary');
		}
	}
  });