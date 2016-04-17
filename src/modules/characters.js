//var $ = require('jquery');

function displayCharacters(value){

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

module.exports = displayCharacters;
