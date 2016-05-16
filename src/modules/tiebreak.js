var $ = require('jquery');
var displayChars = require('../modules/characters');


function Tiebreak(node){

    this.$node = $(node);
    this.$submit = $('#submit');
    this.$node.find("input[type='radio']").change($.proxy(this.collectAnswers, this));

}

Tiebreak.prototype.collectAnswers = function(elem){

    // var $parentDiv = $(elem.target).parents('.quiz__item');
    //
    // console.log($parentDiv);

    // if($parentDiv.find('.active').length) {
    //     $parentDiv.find('.active').removeClass('active');
    // }

    if(elem.target.checked) {
        var value = $(elem.target).attr('data-char');
        this.$submit.removeClass('disabled').prop('disabled', false);
    }


    //disable other radios
    $(elem.target).parent().parent().find('.radio__container').each(function(){
        if($(this).hasClass('active') !== true) {
            $(this).addClass('disable').children().attr('disabled', 'disabled');
        }
    });

}


module.exports = Tiebreak;
