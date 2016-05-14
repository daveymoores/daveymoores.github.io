var $ = require('jquery');

function displayCharacters(value){

    this.$img = $('#display').find('.' + this.CLASSES.quiz + '--img');
    this.$class = $('#display').find('.' + this.CLASSES.quiz + '--class');
    this.$desc = $('#display').find('.' + this.CLASSES.quiz + '--description');
    this.$questions = $('#submittext');

    this.switch(value);

}

displayCharacters.prototype.switch = function(value){

    var $img = this.$img,
        $class = this.$class,
        $desc = this.$desc,
        $qs = this.$questions;

    $.getJSON( "https://daveymoores.github.io/dist/build/ajax/characters.json", function( data ) {

        var json;

        switch (value) {
        case 0:
            json = data.char_0;
            break;
        case 1:
            json = data.char_1;
            break;
        case 2:
            json = data.char_2;
            break;
        case 3:
            json = data.char_3;
            break;
        }

        // $('#classimage').load(function() {
        //
        //     $class.text(json.class);
        //     $desc.text(json.description);
        //
        // }).attr('src', json.url);

        $img.attr('src', json.url);
        $class.text(json.class);
        $desc.text(json.description);
     }).done(function() {

         $qs.hide();
         $('#display').css('height', 'auto');
         $('#display').find('.quiz__answerdisplay--text').show();

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


}

displayCharacters.prototype.CLASSES = {
    quiz : "quiz__answerdisplay"
}

module.exports = displayCharacters;
