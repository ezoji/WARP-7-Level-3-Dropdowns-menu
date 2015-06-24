// warp7 level3 menu
jQuery(function($) {
function stuffForResizeAndReady(){

    if($(window).width() >= 960){

      $( "li.uk-parent ul.uk-nav-sub" ).addClass( "uk-dropdown uk-dropdown-navbar level3" );
      $( "li.uk-parent" ).hover(
       function() {
         var $lev3 = $('.uk-open .uk-dropdown li.uk-parent').width();
         if ($("body").css("direction").toLowerCase() == "rtl") {
           $( "li.uk-parent ul.uk-nav-sub" ).css( 'right',$lev3 );
         }else{
           $( "li.uk-parent ul.uk-nav-sub" ).css( 'left',$lev3 );
         }

      }
     );

     $( "ul.uk-nav li.uk-parent" ).hover(
       function() {
        $( this ).addClass( "uk-open" );
       }
       ,
       function() {
        $( this ).removeClass( "uk-open" );
       }
     );

   };

   if($(window).width() <= 959){
     $( "ul.uk-nav li.uk-parent" ).removeClass( "uk-open" );
     $( "li.uk-parent ul.uk-nav-sub" ).removeClass( "uk-dropdown uk-dropdown-navbar level3" );
   }

}
    $(window).on("resize", stuffForResizeAndReady);
    $(document).on("ready", stuffForResizeAndReady);
});
// warp7 level3 menu
