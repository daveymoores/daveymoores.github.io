var $ = require('jquery');

var widgets;

widgets = {
    'quiz' : require('./modules/quiz.js'),
    'tiebreak' : require('./modules/tiebreak.js')
}

$(document).ready(function(){
    var $binder = $('.quiz');
    $binder.each(function(){
        var e = $(this).attr('data-widget');
        new widgets[e](this);
    });
});
