$(document).ready(function() {
	$('.page-header img').on('click', imgClickHandler);
});

function imgClickHandler() {
	$(this).velocity({ opacity: 0.4, scale: 1.25, translateY: 50, boxShadowBlur: 35 } ).velocity({ opacity: 1, scale: 1, translateY: 0, boxShadowBlur: 0 } );
}