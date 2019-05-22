$( document ).ready(function() {

	$('.js-search-submit').click(function(){


		$('.js-search').toggleClass('dn');
        if($('.js-search').hasClass('dn'))
        {
            $('.js-search-submit').css('position','relative');
        }
        else
        {
            $('.js-search-submit').css('position','absolute');
        }
	});

    $('.js-recall').click(function(){
        $('.callOrder').toggle();
    });
    $('.callOrder #phone').mask('+7(000)000-00-00');
    
});