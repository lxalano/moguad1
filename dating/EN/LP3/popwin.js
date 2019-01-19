var Popwin = {
    width: 450,
    height: 500,
    links: {
        terms: { selector: '#pluginRegTermsLink, .legal__agb', url: null },
        privacy: { selector: '#pluginRegPrivacyLink, .legal__privacy', url: null },
        imprint: { selector: '.imprintLink, .legal__imprint', url: null },
        entertainment: { selector: '.entertainmentPolicy, .legal__entertainment', url: null }
    },
    initialize: function(){
        var that = this;
        for(var key in that.links){
            if(that.links[key].url != null) {
                $(that.links[key].selector).attr("data-popwin", that.links[key].url).addClass('popwin').css('cursor','pointer');
            }
        }
        $('.popwin').on('click', function() {
            agbwindow = window.open($(this).data("popwin"), "AGB", "location=0, status=0, scrollbars=1, resizable=1, width="+ that.width +", height="+ that.height );
            var position = that.alignWindow(that.width, that.height);
            // agbwindow.moveTo(position[0], position[1]);
            return false;
        });
    },
    alignWindow: function(w, h){
        return [(screen.width/2)-(w/2),(screen.height/2)-(h/2)];
    }
};