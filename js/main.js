
$(document).ready(function() {
 	var modal = $('.content-forms'),
 					overlay = $('.overlay'),
 					link = $('button[data-content-forms="true"]'),
 					close = $('.close-btn');
 	link.on('click', function () {
 		overlay.show();
 		modal.show();
 	});
 	close.click(function() {
 		overlay.hide();
 		modal.hide();
 	});
 });


















