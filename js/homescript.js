//homescript
$(document).ready(function() {

   var $fone = $('#jsPhoneHook'),
       $text = $('#jsTextHook'),
       $body = $('#body'),
       $circle = $('#jsCircleHook'),
       $footer = $('#jsHomeFooter'),
       easingQuadOut = [ 0.250, 0.460, 0.450, 0.940 ],
       easingQuadIn = [ 0.250, 0.460, 0.450, 0.940 ];

   function colorChange(i) {
      switch (i) {
         case 1:
            $body.css('background-color', '#128ED8');
            $footer.css('background-color', '#107EC1');

            $circle.find('.current').removeClass('current');
            $circle.find('li').eq(0).addClass('current');
            break;
         case 2:
            $body.css('background-color', '#D12F4F');
            $footer.css('background-color', '#AF1235');

            $circle.find('.current').removeClass('current');
            $circle.find('li').eq(1).addClass('current');
            break;
         case 3:
            $body.css('background-color', '#4BABA0');
            $footer.css('background-color', '#348A7E');

            $circle.find('.current').removeClass('current');
            $circle.find('li').eq(2).addClass('current');
            break;
         case 4:
            $body.css('background-color', '#1E4C80');
            $footer.css('background-color', '#143361');

            $circle.find('.current').removeClass('current');
            $circle.find('li').eq(3).addClass('current');
            break;
         case 5:
            $body.css('background-color', '#EC633A');
            $footer.css('background-color', '#CB4322');

            $circle.find('.current').removeClass('current');
            $circle.find('li').eq(4).addClass('current');
            break;
         case 6:
            $body.css('background-color', '#128ED8');
            $footer.css('background-color', '#107EC1');

            $circle.find('.current').removeClass('current');
            $circle.find('li').eq(5).addClass('current');
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

      $fone.find('.active').velocity("stop", true).velocity({
         bottom: '-455'
      }, 750, easingQuadIn, function(){
         $(this).prev().addClass('active');
      });

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

          $('#jsAppIconsFirst').velocity("stop", true).velocity({
             marginTop: '0px',
             opacity: '0'
          }, 450,  easingQuadOut);

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


          $('#jsAppIconsFirst').velocity("stop", true).velocity({
             marginTop: '0px',
             opacity: '1'
          }, 450,  easingQuadOut);
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
       delay: 980,
       complete: function(elements) {

          $('#jsResponsiveWrapperHook').hide();

       }});


   }


   function finalPanelHide() {

      $('#jsResponsiveWrapperHook').show();

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

               $('#jsAppIconsLast').velocity("stop", true).velocity({
                  marginTop: '200px',
                  opacity: '0'
               }, 450,  easingQuadOut);

               $('#jsAppIconsClose').velocity("stop", true).velocity({
                  marginTop: '90px',
                  opacity: '1'
               },
               {
               duration: 550,
               easing: easingQuadOut,
               delay: 0
               });

               $('#chevron-down').addClass('rotate');
               //$('#full-chevron-down').addClass('rotate');
               $('#full-chevron-down').velocity({
                  opacity: 0
               }, 250);


            } else if(k=='up') {

               ScreenSwipeDown();

            }

         } else if(i==6) {

            foneIntoView();
            finalPanelHide();

            $('#jsAppIconsLast').velocity("stop", true).velocity({
               marginTop: '220px',
               opacity: '1'
            },
            {
             duration: 550,
             easing: easingQuadOut,
             delay: 200
             });

             $('#jsAppIconsClose').velocity("stop", true).velocity({
                marginTop: '80px',
                opacity: '0'
             },
             {
             duration: 350,
             easing: easingQuadOut,
             delay: 0
             });

             $('#chevron-down').removeClass('rotate');
             //$('#full-chevron-down').removeClass('rotate');
             $('#full-chevron-down').velocity({
                opacity: 1
             }, 250);


         } else {

            if(k=='down') {

               ScreenSwipeUp(i);

            } else if (k=='up'){

               if(i!==2) {

                  ScreenSwipeDown();

               } else {

                  foneOutOfView();

                  $('#jsAppIconsLast').velocity("stop", true).velocity({
                     marginTop: '260px',
                     opacity: '0'
                  }, 450,  easingQuadOut);


               }

            }

         }

      } else {

         foneIntoView();

         if (/Mobi/.test(navigator.userAgent)) {

            $('#chevron-down').velocity("stop", true).velocity({
               opacity: '0'
            });

         }


         $('#jsAppIconsLast').velocity("stop", true).velocity({
            marginTop: '220px',
            opacity: '1'
         },
         {
          duration: 550,
          easing: easingQuadOut,
          delay: 400
          });

      }

   }



   //-----pressing down arrow on mobile plus throttle
   var allowTap = true;

   $("#full-chevron-down").swipe( {
    tap:function(event, target) {
      if (!allowTap)
          return false;
      allowTap = false;
      setTimeout(function() { allowTap = true; }, 1400);
      $.fn.fullpage.moveSectionDown();
    },
    threshold:50
   });




   //-----throttle key press to prevent breaking animation....
   var allowKeyPress = true;

   $(document).keyup(function(e){
   if (e.keyCode == 40) {
       if (!allowKeyPress)
           return false;
       allowKeyPress = false;
       setTimeout(function() { allowKeyPress = true; }, 1400);

       $.fn.fullpage.moveSectionDown();
       return false;
    } else if(e.keyCode == 38) {
      if (!allowKeyPress)
          return false;
      allowKeyPress = false;
      setTimeout(function() { allowKeyPress = true; }, 1400);

      $.fn.fullpage.moveSectionUp();
      return false;
    }
     e.preventDefault();
   });





   //------conditional for touch screens...
   if (/Mobi/.test(navigator.userAgent)) {

      $(function() {
       //Enable swiping...
       $("#mobTouch").swipe( {
         //Generic swipe handler for all directions
         swipe:function(event, direction, distance, duration, fingerCount, fingerData) {

            if(!$(this).hasClass('active')){

               if(direction == 'down') {
                  $.fn.fullpage.moveSectionUp();
               } else if(direction == 'up') {
                  $.fn.fullpage.moveSectionDown();
               }

               if($(this).attr('data-page') == 5) {
                  if(direction == 'left') {
                     $('.quoteboxes').slick('slickNext');
                  } else if(direction == 'right') {
                     $('.quoteboxes').slick('slickPrev');
                  }
               }

            }

         },
         //Default is 75px, set to 0 for demo so any distance triggers swipe
           threshold: 0
       });
      });


      $('#jsWipesHook').fullpage({
        menu: '#menu',
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        lockAnchors: false,
        scrollingSpeed: 1400,
        fitToSection: true,
        fixedElements: '#jsResponsiveWrapperHook',
        onLeave: function(index, nextIndex, direction){

           var $this = $(this),
                title =  $(this).next().attr('data-title');

           colorChange(nextIndex);                     //change background colour
           screenSwipe(index, nextIndex, direction);   //change screen
           animateTextUp(index, direction);            //animate copy transitions
           animateShards($this, index, direction);     //animate corner shards
           cornerElement(index, direction)             //animate coloured corner element

           $("#mobTouch").addClass('active').attr('data-page', index);  //active prevemts double swipe
        },
        afterRender: function(){

           $('#body').addClass('imageActive');

        },
        afterLoad: function(anchorLink, index){

           $("#mobTouch").removeClass('active');

        }
     });


   } else {

      $('#mobTouch').hide();

      $('#jsWipesHook').fullpage({
        menu: '#menu',
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        lockAnchors: false,
        scrollingSpeed: 1400,
        fitToSection: true,
        fixedElements: '#jsResponsiveWrapperHook',
        onLeave: function(index, nextIndex, direction){

           var $this = $(this),
               title =  $(this).next().attr('data-title'),
               prevTitle =  $(this).prev().attr('data-title');

           colorChange(nextIndex);                     //change background colour
           screenSwipe(index, nextIndex, direction);   //change screen
           animateTextUp(index, direction);            //animate copy transitions
           animateShards($this, index, direction);     //animate corner shards
           cornerElement(index, direction)             //animate coloured corner element

        },
        afterRender: function(){

           $('#body').addClass('imageActive');

        }
     });

     $.fn.fullpage.setKeyboardScrolling(false);

   }




   $('.quoteboxes').slick({
     slidesToShow: 3,
     infinite: false,
     cssEase: 'swing',
     responsive: [
       {
         breakpoint: 600,
         settings: {
           arrows: false,
           centerMode: true,
           centerPadding: '60px',
           slidesToShow: 1
        }
     },
     {
        breakpoint: 500,
        settings: {
           arrows: false,
           centerMode: true,
           centerPadding: '40px',
           slidesToShow: 1
        }
     },
     {
        breakpoint: 400,
        settings: {
           arrows: false,
           centerMode: true,
           centerPadding: '25px',
           slidesToShow: 1
        }
     }
     ]
   });



    $('.quoteboxes').slick('setPosition');


});
