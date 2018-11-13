$(document).ready(function() {
	$('select').formSelect();
	$('.sidenav').sidenav();
	$('.parallax').parallax();
	$('.collapsible').collapsible();
	$('.materialboxed').materialbox({
		onOpenStart: function() {
			$("#materialboxed").removeClass('offset-s6');
		},
		onCloseStart: function() {
			$("#materialboxed").addClass('offset-s6');
		}
	});
});
