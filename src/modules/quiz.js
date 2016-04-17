var $ = require('jquery');

/******************
* THINGS TO DO...
*
* Change quiz items to selects with 4 answers
* Update js for selects
* Return value from answeradd function for a display prototype function
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

Quiz.prototype.collectAnswers = function(elem){
    if(elem.target.checked) {
        var id = $(elem.target).parent().attr('data-q');
        var value = $(elem.target).attr('value');
        var _quizValue = quizUtility.answeradd(id, value);

        this.answerDisplay(_quizValue);
    }
}

Quiz.prototype.answerDisplay = function(vale){

}

var quizUtility = {

    answers : {},

    answeradd : function(id, value){
        quizUtility.answers[id] = value;

        console.log(quizUtility.answers);

        if(Object.keys(quizUtility.answers).length == 6) {
            return 21;
            $('.quiz__answerdisplay').show();
        }
    }

}

module.exports = Quiz;
