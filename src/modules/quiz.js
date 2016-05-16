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

    var $parentDiv = $(elem.target).parents('.quiz__item');//.closest('div:has(*[data-q])');

    if($parentDiv.find('.active').length) {
        var oldvalue = $parentDiv.find('.active').children().attr('data-char');
        quizUtility.answerremove(oldvalue);

        $parentDiv.find('.active').removeClass('active');
    }

    //when checked, add to array
    if(elem.target.checked) {

        var value = $(elem.target).attr('data-char');
        quizUtility.answeradd(value);
        $(elem.target).parent().addClass('active');

        console.log(quizUtility.answers);

        var summed = 0; //keep track of number of answered questions
        for (var key in quizUtility.answers) {
            summed += quizUtility.answers[key];
        }

        if(summed == 10) {  //if all answered make button active
            this.$submit.removeClass('disabled').prop('disabled', false);
        }
    }

    //disable other radios
    // $(elem.target).parent().parent().find('.radio__container').each(function(){
    //     if($(this).hasClass('active') != true) {
    //         $(this).addClass('disable').children().attr('disabled', 'disabled');
    //     }
    // });
}

Quiz.prototype.submitAnswers = function(btn){

    var arr = Object.keys( quizUtility.answers ).map(function ( key ) { return quizUtility.answers[key]; });

    var max = Math.max.apply( null, arr );
    var value = arr.indexOf(max);

    var checkArray = [];
    for(var i=0; i < arr.length; i++) { //cycle through array checking for max value
        if(arr[i] == max) {
            checkArray.push(arr[i]);
        } else {
            checkArray.push(0); //give it zero value if not max
        }
    }

    var answerArray = [];
    for(var i=0; i < checkArray.length; i++) { //cycle through array looking for values
        if(checkArray[i] !== 0) {
            answerArray.push(i); // add the snwer index values
        }
    }

    console.log(answerArray);

    if(answerArray.length >= 2) {   //if there are two or more values the same, show tie-break...
        //remove answers from tie-break
        $('#tiebreak').find('.radio__container').each(function(){
            for(var k=0; k<answerArray.length; k++) {
                if($(this).attr('data-tie') == answerArray[k]) {
                    $(this).addClass('keep');
                }
            }
        });

        $('#tiebreak').find('.radio__container').each(function(){
            if($(this).hasClass('keep') !== true) {
                $(this).remove();
            }
        });

        $('#tiebreak').show().animate({
            opacity: 1
        }, 300);
        this.$submit.addClass('disabled').prop('disabled', true).attr('data-tiebreak', 'true');

    } else {
        this.answerDisplay(value);
    }
}

//display result
Quiz.prototype.answerDisplay = function(value){

    var showResult = new displayChars(value);

}

var quizUtility = {

    answers : { a: 0, b: 0, c: 0, d: 0 },

    answeradd : function(value){
        quizUtility.answers[value]++;
    },

    answerremove : function(value){
        quizUtility.answers[value]--;
    }

}

module.exports = Quiz;
