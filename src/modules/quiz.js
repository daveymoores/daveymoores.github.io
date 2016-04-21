var $ = require('jquery');
var displayChars = require('../modules/characters');

/******************
* THINGS TO DO...
*
* Create display function that updates text and img value based on json file
* Disable inputs  or possibly have a 'doesnt sound like you? Try again'
******************/


function Quiz(node){

    this.$node = $(node);
    this.$window = $(window);

    this.$window.on('load', $.proxy(this.quizLoad, this));
    $("input[type='radio']").change($.proxy(this.collectAnswers, this));

    this.$submit = $('#submit');
    this.$submit.on('click', $.proxy(this.submitAnswers, this));

}

Quiz.prototype.CLASSES = {
    quizInit: '__initialized',
    quizItem: '__item'
}

Quiz.prototype.quizLoad = function(){

    this.$node.addClass('quiz' + this.CLASSES.quizInit);

}

//form array
Quiz.prototype.collectAnswers = function(elem){

    //when checked, add to array
    if(elem.target.checked) {
        var value = $(elem.target).attr('data-char');
        quizUtility.answeradd(value);
        $(elem.target).parent().addClass('active');
    }

    $(elem.target).parent().parent().find('.radio__container').each(function(){
        if($(this).hasClass('active') != true) {
            $(this).addClass('disable').children().attr('disabled', 'disabled');
        }
    });
}

Quiz.prototype.submitAnswers = function(){

    var arr = Object.keys( quizUtility.answers ).map(function ( key ) { return quizUtility.answers[key]; });
    var max = Math.max.apply( null, arr );
    var value = arr.indexOf(max);

    this.answerDisplay(value);

}

//display result
Quiz.prototype.answerDisplay = function(value){

    var showResult = new displayChars(value);

}

var quizUtility = {

    answers : { a: 0, b: 0, c: 0, d: 0 },

    answeradd : function(value){
        quizUtility.answers[value]++;
    }

}

module.exports = Quiz;
