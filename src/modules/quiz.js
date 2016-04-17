var $ = require('jquery');

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

    switch (value) {
        case 21:

        $.getJSON( "dist/build/ajax/characters.json", function( data ) {
            var items = [];

            $.each( data, function( key, val ) {
                items.push( "<li id='" + key + "'>" + val + "</li>" );
            });

            $( "<ul/>", {
            "class": "my-new-list",
            html: items.join( "" )
            }).appendTo( "body" );
        });

            break;
        default:

    }

}

var quizUtility = {

    answers : {},

    answeradd : function(id, value){
        quizUtility.answers[id] = value;

        console.log(quizUtility.answers);

        if(Object.keys(quizUtility.answers).length == 6) {
            return 21;
        }
    }

}

module.exports = Quiz;
