/*global console, $*/

$(document).ready(function () {
    
    var nav = document.getElementById('navToggle'),
        popup = document.getElementById('myPopup'),
        close = document.getElementById('hittoclose'),
        fixedNav = document.getElementById('fixed');
    
    // Loading
    setInterval(function () {
        
        'use strict';
        
        $('.loader-bg').fadeOut();
        
    }, 18000);
    
    

    // Toggle The Navbar
    
    nav.onclick = function () {
        'use strict';
        popup.classList.toggle("show");
        //popup.style.visibility = "visible";
    };

    close.onclick = function () {
        'use strict';
        popup.classList.remove("show");
        //popup.style.visibility = "hidden";
    };
    
    // Testmonial Carousal 
    $('.carousal .client_js_2 ,.client_js_3').hide();
    var x = 1;
    setInterval(function () {
       
        x += 1;
        $('.carousal .client_js_' + x).siblings().fadeOut(500, function () {
            
            $('.carousal .client_js_' + x).delay(500).fadeIn(500);
            
        });
        
        if (x === 3) {x = 0; }
    }, 4500);


    // Click  Button To Go Top
    $('.top').click(function () {
            
        $('html, body').animate({scrollTop : 0}, 1000);
        
        return false;
    });
     
    window.onscroll = function () {
        'use strict';
        var wScroll = $(this).scrollTop();

        // Fixed Navbar
        if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {

            fixedNav.classList.add("fixednavbar");

        } else {

            fixedNav.classList.remove("fixednavbar");
        }
        
        
        // Fixed Navbar
        if (document.body.scrollTop >= 700 || document.documentElement.scrollTop >= 700) {

            $('.top').css({'transform': 'translateX(0px)', 'opacity': '1'});

        } else {
            $('.top').css({'transform': 'translateX(200px)', 'opacity': '0', 'transition': 'all .5s ease-in-out'});
        }

        // About Us Section
        // Animate About-Us Heading
        if (wScroll > $('.about-us').offset().top - ($(window).height() / 1.1)) {

            $('.about-us .aboutus-heading').each(function () {

                setTimeout(function () {

                    $('.about-us .aboutus-heading').addClass('fadeUp');

                }, 150);

            });
        }
        // Animation Section About-us Box
        if (wScroll > $('.about-us').offset().top - ($(window).height() / 1.8)) {

            $('.about-us .about-box').each(function (i) {

                setTimeout(function () {

                    $('.about-us .about-box').eq(i).addClass('fadeUp');

                }, 150 * (i + 1));
            });
        }


        // Practis Section
        // Animation Section Practis
        if (wScroll > $('.practis-area').offset().top - ($(window).height() / 1.8)) {

            $('.practis-area .service').each(function (i) {

                setTimeout(function () {

                    $('.practis-area .service').eq(i).addClass('fadeUp');

                }, 150 * (i + 1));
            });
        }
        // Animate Practis-area Heading
        if (wScroll > $('.practis-area').offset().top - ($(window).height() / 1.3)) {

            $('.practis-area .practis-heading').each(function () {

                setTimeout(function () {

                    $('.practis-area .practis-heading').addClass('fadeUp');

                }, 150);

            });
        }


        // Our Team Section
        // Animate OurTeam Heading
        if (wScroll > $('.our-team').offset().top - ($(window).height() / 1.1)) {

            $('.our-team .our-team-heading').each(function () {

                setTimeout(function () {

                    $('.our-team .our-team-heading').addClass('fadeUp');

                }, 150);

            });
        }
        // Animation Section OurTeam
        if (wScroll > $('.our-team').offset().top - ($(window).height() / 1.8)) {

            $('.our-team .our-team-gallary').each(function (i) {

                setTimeout(function () {

                    $('.our-team .our-team-gallary').eq(i).addClass('fadeUp');

                }, 150 * (i + 1));
            });
        }


        // Testemonial Section
        // Animate Testemonial Heading
        if (wScroll > $('.testemonial').offset().top - ($(window).height() / 1.1)) {

            $('.testemonial .testemonial-heading').each(function () {

                setTimeout(function () {

                    $('.testemonial .testemonial-heading').addClass('fadeUp');

                }, 150);

            });
        }
        // Animation Section Testemonial
        if (wScroll > $('.testemonial').offset().top - ($(window).height() / 1.8)) {

            $('.testemonial .carousal').each(function (i) {

                setTimeout(function () {

                    $('.testemonial .carousal').addClass('fadeUp');

                }, 150 * (i + 1));
            });
        }


        // Testemonial Section
        // Animate publication Heading
        if (wScroll > $('.publication').offset().top - ($(window).height() / 1.1)) {

            $('.publication .publication-heading').each(function () {

                setTimeout(function () {

                    $('.publication .publication-heading').addClass('fadeUp');

                }, 150);

            });
        }
        // FLoating Publication Section
        if (wScroll > $('.publication').offset().top - ($(window).height() / 1.4)) {

            var offset = Math.min(0, wScroll - $('.publication').offset().top + (($(window).height()) - 550) / 1.2);

            $('.publication .publication-tite1').css({'transform': 'translate(' + offset + 'px,' + Math.abs(offset * 0.4) + 'px)'});

            $('.publication .publication-tite3').css({'transform': 'translate(' + Math.abs(offset) + 'px,' + Math.abs(offset * 0.4) + 'px)'});

        }


            // Ask Question Section
        // Animate Ask Question Heading
        if (wScroll > $('.asked-question').offset().top - ($(window).height() / 1.1)) {

            $('.asked-question .asked-question-heading').each(function () {

                setTimeout(function () {

                    $('.asked-question .asked-question-heading').addClass('fadeUp');

                }, 150);

            });
        }
        // Animation Section Ask Question
        if (wScroll > $('.asked-question').offset().top - ($(window).height() / 1.8)) {

            $('.asked-question .asked-box').each(function (i) {

                setTimeout(function () {

                    $('.asked-question .asked-box').eq(i).addClass('fadeUp');

                }, 150 * (i + 1));
            });
        }


            // ContactUs Section
        // Animate ContactUs Heading
        if (wScroll > $('.contact-us').offset().top - ($(window).height() / 1.1)) {

            $('.contact-us .contact-us-heading').each(function () {

                setTimeout(function () {

                    $('.contact-us .contact-us-heading').addClass('fadeUp');

                }, 150);

            });
        }
        // Animation Section ContactUs
        if (wScroll > $('.contact-us').offset().top - ($(window).height() / 1.8)) {

            $('.contact-us .contact-box').each(function (i) {

                setTimeout(function () {

                    $('.contact-us .contact-box').eq(i).addClass('fadeUp');

                }, 150 * (i + 1));
            });
        }

    };
    

    
});

