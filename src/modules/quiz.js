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
        var id = $(elem.target).parent().attr('data-q');
        var value = $(elem.target).attr('value');
        var _quizValue = quizUtility.answeradd(id, value);

        //if a return value is found, quiz is complete
        if(_quizValue != undefined) {
            this.answerDisplay(_quizValue);
        }
    }
}

//display result
Quiz.prototype.answerDisplay = function(value){

    var showResult = new displayChars(value);

}

var quizUtility = {

    answers : {},

    answeradd : function(id, value){
        quizUtility.answers[id] = value;

        if(Object.keys(quizUtility.answers).length == 6) {
            return 21;
        }
    }

}

module.exports = Quiz;
