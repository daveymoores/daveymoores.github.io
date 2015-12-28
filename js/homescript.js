//homescript
$(document).ready(function() {

   var $fone = $('#jsPhoneHook'),
       $text = $('#jsTextHook'),
       $body = $('#body'),
       easingQuadOut = [ 0.250, 0.460, 0.450, 0.940 ],
       easingQuadIn = [ 0.250, 0.460, 0.450, 0.940 ];

   function colorChange(i) {
      switch (i) {
         case 1:
            $body.css('background-color', '#128ED8');
            break;
         case 2:
            $body.css('background-color', '#D12F4F');
            break;
         case 3:
            $body.css('background-color', '#4BABA0');
            break;
         case 4:
            $body.css('background-color', '#1E4C80');
            break;
         case 5:
            $body.css('background-color', '#EC633A');
            break;
         case 6:
            $body.css('background-color', '#128ED8');
            break;
         default:
            $body.css('background-color', '#128ED8');
      }
   }

   function foneIntoView() {

      $fone.velocity("stop", true).velocity({
         marginTop: '0px',
         opacity: '1'
      },
      {
      duration: 500,
      delay: 500,
      easing: easingQuadOut,
      complete: function(elements) {}});

   }


   function foneOutOfView() {

      $fone.velocity("stop", true).velocity({
         marginTop: '20px',
         opacity: '0'
      }, 350, easingQuadIn);

   }


   function ScreenSwipeDown() {

      //setTimeout(function(){
         $fone.find('.active').velocity("stop", true).velocity({
            bottom: '-455'
         }, 750, easingQuadIn, function(){
            $(this).prev().addClass('active');
         });
      //}, 200);

   }

   function ScreenSwipeUp(i) {

      setTimeout(function(){
         $fone.find('.active').removeClass('active');
         $fone.find('.phone__img').eq(i-1).addClass('active').velocity("stop", true).velocity({
            bottom: '0'
         }, 750, easingQuadOut);
      }, 600);

   }

   function animateShards($el, n, m){

      if(m == 'down') {

            $el.find('.shard').each(function(){

               if($(this).hasClass('top')) {

                  $(this).velocity("stop", true).velocity({
                     opacity: 0,
                     top: '30px',
                     right: '0'
                  },
                  {
                  duration: 300,
                  easing: easingQuadIn,
                  complete: function(elements) {

                     $(this).css('top', '-100px').css('right', '-50px');

                  }});

               } else if($(this).hasClass('bottom')) {

                  $(this).velocity("stop", true).velocity({
                     opacity: 0,
                     bottom: '-200px',
                     left: '0'
                  },
                  {
                  duration: 150,
                  easing: easingQuadOut,
                  complete: function(elements) {

                     $(this).css('bottom', '-100px').css('left', '-50px');

                  }});

               }

            });

            $el.next().find('.shard').each(function(){

               if($(this).hasClass('top')) {

                  $(this).velocity("stop", true).velocity({
                     opacity: 1,
                     top: '0px'
                  },
                  {
                  duration: 500,
                  delay: 900,
                  easing: easingQuadIn,
                  complete: function(elements) {}});

               } else if($(this).hasClass('bottom')) {

                  $(this).velocity("stop", true).velocity({
                     opacity: 1,
                     bottom: '-50px'
                  },
                  {
                  duration: 500,
                  delay: 900,
                  easing: easingQuadIn,
                  complete: function(elements) {}});

               }

            });

      } else {


            $el.find('.shard').each(function(){

               if($(this).hasClass('top')) {

                  $(this).velocity("stop", true).velocity({
                     opacity: 0,
                     top: '-150px',
                     right: '0'
                  },
                  {
                  duration: 150,
                  easing: easingQuadOut,
                  complete: function(elements) {}});

               } else if($(this).hasClass('bottom')) {

                  $(this).velocity("stop", true).velocity({
                     opacity: 0,
                     bottom: '-150px',
                     left: '0'
                  },
                  {
                  duration: 300,
                  easing: easingQuadIn,
                  complete: function(elements) {}});

               }

            });

            $el.prev().find('.shard').each(function(){

               if($(this).hasClass('top')) {

                  $(this).velocity("stop", true).velocity({
                     opacity: 1,
                     top: '0px'
                  },
                  {
                  duration: 500,
                  delay: 900,
                  easing: easingQuadIn,
                  complete: function(elements) {}});

               } else if($(this).hasClass('bottom')) {

                  $(this).velocity("stop", true).velocity({
                     opacity: 1,
                     bottom: '-50px'
                  },
                  {
                  duration: 500,
                  delay: 900,
                  easing: easingQuadIn,
                  complete: function(elements) {}});

               }

            });


      }


   }

   function animateTextUp(x, y) {

      if(y == 'down') { //if going down...

         if($text.find('.viewable').length) {   //if viewable is in dom

            var $el = $text.find('.viewable').next();

            $text.find('.viewable').find('h2').velocity("stop", true).velocity({
               marginTop: '-30px',
               opacity: '0'
            },
            {
            duration: 550,
            easing: easingQuadIn,
            complete: function(elements) {}});

            $text.find('.viewable').find('p').velocity("stop", true).velocity({
               marginTop: '-30px',
               opacity: '0'
            },
            {
             duration: 550,
             easing: easingQuadIn,
             delay: 80,
             complete: function(elements) {

                if($el.length) { //if last element remove viewable class

                    $el.addClass('viewable').find('h2').velocity("stop", true).velocity({
                       marginTop: '0px',
                       opacity: '1'
                    }, 550,  easingQuadOut);

                    $el.find('p').velocity("stop", true).velocity({
                       marginTop: '0px',
                       opacity: '1'
                    },
                    {
                     duration: 550,
                     easing: easingQuadOut,
                     delay: 80,
                     complete: function(elements) {

                        $el.prev().removeClass('viewable');

                     }});

                  } else {

                     $text.find('.viewable').removeClass('viewable');

                  }

             }});


         } else { //and if not viewable in DOM.....

            $text.find('.text__section').eq(x-1).addClass('viewable').find('h2').velocity("stop", true).velocity({
               marginTop: '0px',
               opacity: '1'
            }, 550,  easingQuadOut);

            $text.find('.viewable').find('p').velocity("stop", true).velocity({
               marginTop: '0px',
               opacity: '1'
            },
            {
             duration: 550,
             easing: easingQuadOut,
             delay: 80
             });

          }

       } else { //if going up...


          if($text.find('.viewable').length) {   //if viewable is in dom

             var $el = $text.find('.viewable').prev();

             $text.find('.viewable').find('p').velocity("stop", true).velocity({
                marginTop: '30px',
                opacity: '0'
             },
             {
             duration: 550,
             easing: easingQuadIn,
             complete: function(elements) {

                $(this).css('margin-top', '30px');

             }});

             $text.find('.viewable').find('h2').velocity("stop", true).velocity({
                marginTop: '30px',
                opacity: '0'
             },
             {
              duration: 550,
              easing: easingQuadIn,
              delay: 80,
              complete: function(elements) {

                 $(this).css('margin-top', '30px');

                 if($el.length) { //if last element remove viewable class

                     $el.addClass('viewable').find('p').velocity("stop", true).velocity({
                        marginTop: '0',
                        opacity: '1'
                     }, 550,  easingQuadOut);

                     $el.find('h2').velocity("stop", true).velocity({
                        marginTop: '0',
                        opacity: '1'
                     },
                     {
                      duration: 550,
                      easing: easingQuadOut,
                      delay: 80,
                      complete: function(elements) {

                         $el.next().removeClass('viewable');

                      }});

                   } else {

                      $text.find('.viewable').removeClass('viewable');

                   }

              }});


          } else {

             $text.find('.text__section').eq(x-3).addClass('viewable').find('h2').velocity("stop", true).velocity({
                marginTop: '0px',
                opacity: '1'
             }, 550,  easingQuadOut);

             $text.find('.viewable').find('p').velocity("stop", true).velocity({
                marginTop: '0px',
                opacity: '1'
             },
             {
              duration: 550,
              easing: easingQuadOut,
              delay: 80
              });

           }


       }

   }


   function cornerElement(x, y) {


      if(x == 1 && y == 'down') {

         $('#jsCornerElementHook').velocity("stop", true).velocity({
            right: 0
         },
         {
          duration: 1000,
          easing: easingQuadIn
          });


           $('#jsRoosterHook').addClass('rotate');


          $('#jsZeroCopyHook').find('h1').velocity("stop", true).velocity({
             marginTop: '-15px',
             opacity: '0'
          }, 450,  easingQuadOut);

          $('#jsZeroCopyHook').find('p').velocity("stop", true).velocity({
             marginTop: '-15px',
             opacity: '0'
          },
          {
          duration: 450,
          easing: easingQuadOut,
          delay: 40
          });
      }

      if(x == 2 && y == 'up') {

         $('#jsCornerElementHook').velocity("stop", true).velocity({
           right: -90
         },
         {
         duration: 1000,
         easing: easingQuadOut
         });


          $('#jsRoosterHook').removeClass('rotate');


          $('#jsZeroCopyHook').find('h1').velocity("stop", true).velocity({
           marginTop: '0px',
           opacity: '1'
          }, 550,  easingQuadOut);

          $('#jsZeroCopyHook').find('p').velocity("stop", true).velocity({
           marginTop: '0px',
           opacity: '1'
          },
          {
          duration: 550,
          easing: easingQuadOut,
          delay: 80
          });
      }

   }


   function finalPanelShow() {

      $('#sectionTitle').next().addClass('rotate');

      $('#jsFinalSlideHook').find('.text__section').addClass('viewable').find('h2').velocity("stop", true).velocity({
         marginTop: '0px',
         opacity: '1'
      },
      {
       duration: 550,
       easing: easingQuadOut,
       delay: 900
       });

      $('#jsFinalSlideHook').find('.viewable').find('p').velocity("stop", true).velocity({
         marginTop: '0px',
         opacity: '1'
      },
      {
       duration: 550,
       easing: easingQuadOut,
       delay: 980
       });

   }


   function finalPanelHide() {

      $('#sectionTitle').next().removeClass('rotate');

      $('#jsFinalSlideHook').find('.text__section').addClass('viewable').find('h2').velocity("stop", true).velocity({
         marginTop: '20px',
         opacity: '0'
      },
      {
      duration: 550,
      easing: easingQuadOut
      });

      $('#jsFinalSlideHook').find('.viewable').find('p').velocity("stop", true).velocity({
         marginTop: '20px',
         opacity: '0'
      },
      {
      duration: 550,
      easing: easingQuadOut
      });

   }



   function screenSwipe(i, j, k) {

      if(i>=2) {

         if(i==5) {

            if(k=='down') {

               foneOutOfView();
               finalPanelShow();

            } else if(k=='up') {

               ScreenSwipeDown();

            }

         } else if(i==6) {

            foneIntoView();
            finalPanelHide();

         } else {

            if(k=='down') {

               ScreenSwipeUp(i);

            } else if (k=='up'){

               if(i!==2) {

                  ScreenSwipeDown();

               } else {

                  foneOutOfView();

               }

            }

         }

      } else {

         foneIntoView();

      }

   }




   //  window.addEventListener("keydown", function(e) {
   //       // space and arrow keys
   //       if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
   //          alert('>>>>>');
   //           e.preventDefault();
   //       }
   //   }, false);






   if (/Mobi/.test(navigator.userAgent)) {

      $('#jsWipesHook').fullpage({
        menu: '#menu',
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        lockAnchors: false,
        scrollingSpeed: 1400,
        fitToSection: true,
        //scrollBar: true,
        fixedElements: '#jsResponsiveWrapperHook',
        //anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage'],
        onLeave: function(index, nextIndex, direction){

           var $this = $(this),
                title =  $(this).next().attr('data-title');

           colorChange(nextIndex);                     //change background colour
           screenSwipe(index, nextIndex, direction);   //change screen
           animateTextUp(index, direction);            //animate copy transitions
           animateShards($this, index, direction);     //animate corner shards
           cornerElement(index, direction)             //animate coloured corner element


        },
        afterRender: function(){

           $('#body').addClass('imageActive');

           slideTimeout = setInterval(function () {
               $.fn.fullpage.moveSectionDown();
           }, 3000);

        },
        afterLoad: function(anchorLink, index){


        }
     });


   } else {

      $('.mobTouch').hide();

      $('#jsWipesHook').fullpage({
        menu: '#menu',
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        lockAnchors: false,
        scrollingSpeed: 1400,
        fitToSection: true,
        fixedElements: '#jsResponsiveWrapperHook',
        //anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage'],
        onLeave: function(index, nextIndex, direction){

           var $this = $(this),
               title =  $(this).next().attr('data-title'),
               prevTitle =  $(this).prev().attr('data-title');

           colorChange(nextIndex);                     //change background colour
           screenSwipe(index, nextIndex, direction);   //change screen
           animateTextUp(index, direction);            //animate copy transitions
           animateShards($this, index, direction);     //animate corner shards
           cornerElement(index, direction)             //animate coloured corner element



           $('#sectionTitle').velocity({
               marginTop: '10px',
               opacity: 0
           }, 300, function(){

             if(direction == 'down') {
               $(this).text(title).css('margin-top', '0px').velocity("stop", true).velocity({
                 opacity: 1
                 }, 300);
             } else {
               $(this).text(prevTitle).css('margin-top', '0px').velocity("stop", true).velocity({
                 opacity: 1
                 }, 300);
             }


           });

        },
        afterRender: function(){

           $('#body').addClass('imageActive');

        },
        afterLoad: function(anchorLink, index){


        }
     });

   }




});
