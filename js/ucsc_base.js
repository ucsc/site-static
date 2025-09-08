$(document).ready(function() {
            
    /** 
    *   Add default text to the top search box
    */
    
    $('input.query').each( function(index){ $(this).defaultvalue( $(this).attr('value') ); } );

    /** 
    *   Fix for Quickstart menus dropdown
    */

    $("#mainNav li").hover(
        function() { $(this).addClass('hov').css('z-index','1000') }, 
        function() { $(this).removeClass('hov').css('z-index','0') }
    );
  	
  	/**
  	*   For pages with Lightbox image viewer block
  	*   @todo: Not sure why this was included on every page?
  	*/
  	
  	$('#theView a').lightBox({fixedNavigation:true});
  	
});

