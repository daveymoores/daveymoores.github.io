var $ = require('jquery');

function displayCharacters(value){

    this.$img = $('#display').find('.' + this.CLASSES.quiz + '--img');
    this.$class = $('#display').find('.' + this.CLASSES.quiz + '--class');
    this.$desc = $('#display').find('.' + this.CLASSES.quiz + '--description');

    this.switch(value);

}

displayCharacters.prototype.switch = function(value){

    var $img = this.$img,
        $class = this.$class,
        $desc = this.$desc;


    switch (value) {
        case 21:

            $.getJSON( "dist/build/ajax/characters.json", function( data ) {

                var json = data.char_1;

                $img.attr('src', json.url);
                $class.text(json.class);
                $desc.text(json.description);

             }).done(function() {

                 $('#display').find('.animate').each(function(){
                     var $this = $(this);

                     if($this.hasClass('quiz__answerdisplay--img') == true) {
                         setTimeout(function(){
                             $this.addClass('active');
                         }, 300);
                     } else {
                         $this.addClass('active');
                     }
                 });

              });

            break;
        default:

    }

}

displayCharacters.prototype.CLASSES = {
    quiz : "quiz__answerdisplay"
}

module.exports = displayCharacters;
