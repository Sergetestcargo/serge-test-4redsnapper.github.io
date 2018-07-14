$(document).ready(function(){
	
		$('i#plus, #follow1').click(function () {
			$('div#follow-links').slideDown(600);
			$('i#plus, #follow1').hide();
			$('i#minus, #follow2').show();
		})//end click 'plus'
		$('i#minus, #follow2').click(function () {
			$('div#follow-links').slideUp(600);
			$('i#minus, #follow2').hide();
			$('i#plus, #follow1').show();
		})//end click 'minus'


});// end ready