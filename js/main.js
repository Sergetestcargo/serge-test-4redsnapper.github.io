$(document).ready(function(){
		$('i#plus').click(function () {
			$('div#follow-links').slideDown(600);
			$(this).hide();
			$('i#minus').show();
		})//end click 'plus'
		$('i#minus').click(function () {
			$('div#follow-links').slideUp(600);
			$(this).hide();
			$('i#plus').show();
		})//end click 'minus'
});// end ready