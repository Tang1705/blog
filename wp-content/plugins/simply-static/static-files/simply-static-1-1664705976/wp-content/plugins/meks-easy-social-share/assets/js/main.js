(function($) {

    "use strict";

    $(document).ready(function() {

        $('body').on('click', '.meks_ess-item:not(".prevent-share-popup")', function(e) {
            e.preventDefault();
            meks_ess_popup($(this).attr('data-url'));
        });

    });

    function meks_ess_popup(data) {
        window.open(data, "Share", 'height=500,width=760,top=' + ($(window).height() / 2 - 250) + ', left=' + ($(window).width() / 2 - 380) + 'resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0');
    }

})(jQuery);