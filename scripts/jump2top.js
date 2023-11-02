/* By class */
jQuery( document ).ready
(
    function($)
    {
        $(".scroll a, .navbar-brand, .jump2top").click
        (
            function(event)
            {
                event.preventDefault();
                $('html,body').animate
                (
                    {
                        scrollTop:$(this.hash).offset().top
                    },
                    600,
                    'swing'
                );
                $(".scroll li").removeClass('active');
                $(this).parents('li').toggleClass('active');
            }
        );
    }
);

/* By identifier */
jQuery( "#jump2top" ).click
(
    function ()
    {
        jQuery( "body, html" ).animate
        (
            {
                scrollTop: 0
            }
            , 600
        );
    }
);

jQuery( window ).scroll
(
    function ()
    {
        if ( jQuery(window).scrollTop() > 150 )
        {
            jQuery( "#jump2top" ).addClass( "visible" );
        }
        else
        {
            jQuery( "#jump2top").removeClass( "visible" );
        }
    }
);

$('<form action="#"><select /></form>').appendTo("#mainav");$("<option />",{selected:"selected",value:"",text:"MENU"}).appendTo("#mainav select");$("#mainav a").each(function(){var e=$(this);if($(e).parents("ul ul ul").length>=1){$("<option />",{value:e.attr("href"),text:"- - - "+e.text()}).appendTo("#mainav select")}else if($(e).parents("ul ul").length>=1){$("<option />",{value:e.attr("href"),text:"- - "+e.text()}).appendTo("#mainav select")}else if($(e).parents("ul").length>=1){$("<option />",{value:e.attr("href"),text:""+e.text()}).appendTo("#mainav select")}else{$("<option />",{value:e.attr("href"),text:e.text()}).appendTo("#mainav select")}});$("#mainav select").change(function(){if($(this).find("option:selected").val()!=="#"){window.location=$(this).find("option:selected").val()}})
