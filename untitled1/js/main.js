

    // var hiddenNavStatus = false;
    //
    // var hideNav = function () {
    //     var getHideNav = document.querySelector('.hiddenNav');
    //     var getHideNavLinks = document.querySelectorAll('.hiddenNav > ul > a');
    //     var getSite = document.querySelector('#site');
    //     // var arrayLenght = getHideNavLinks.length;
    //
    //     if (hiddenNavStatus === false) {
    //         getHideNav.style.visibility = 'visible';
    //         getSite.style.opacity = "0";
    //
    //         // for ( arrayLenght < arrayLenght; arrayLenght++;) {
    //         //     // getHideNavLinks[arrayLenght].style.opacity = '1';
    //         //     getHideNav.style.opacity = '0.5';
    //         //     getSite.style.opacity = '1';
    //         // }
    //
    //         hiddenNavStatus = true;
    //
    //     } else if (hiddenNavStatus === true) {
    //         getHideNav.style.visibility = 'hidden';
    //         getSite.style.opacity = "1";
    //         // for (arrayLenght < arrayLenght; arrayLenght++;){
    //         //     // getHideNavLinks[arrayLenght].style.opacity = '1';
    //         //     getHideNav.style.opacity = '0.5';
    //         //     getSite.style.opacity = '1';
    //         // }
    //         hiddenNavStatus = false;
    //     }
    //     window.addEventListener("resize", function () {
    //         if (window.matchMedia("(min-width:1000px)").matches) {
    //             getHideNav.style.visibility = 'hidden';
    //             getHideNav.style.opacity = '0.5';
    //             getSite.style.opacity = '1';
    //         }
    //     });
    // };
        function showNav () {
            var getHiddenNav = document.querySelector(".hiddenNav");
            // getHiddenNav.className = "showHiddenNav";
            getHiddenNav.setAttribute("");
        }
        function hideNav() {
        }

    window.onscroll =  function scrollFunction() {

        var getHeader = document.querySelector(".backgroundHeader");

        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            // document.querySelector(".backgroundHeader").style.height = "60px";
            // document.querySelector(".mainLogo>h1").style.fontSize =  "4.5em";
            // document.querySelector(".mainMenu").style.marginTop = "1%";
                getHeader.classList.add("headerChange");


        } else {
            // document.querySelector(".backgroundHeader").style.height = "85px";
            // document.querySelector(".mainLogo>h1").style.fontSize =  "6em";
            // document.querySelector(".mainMenu").style.marginTop = "1.9%";
            getHeader.classList.remove("headerChange");

        }
    };


    var getMenuRent = document.querySelector(".containerDropMenu");

    function showDropMenu() {
            getMenuRent.classList.add("showDropMenuRent");

    }
    function hideDropMenu() {
        getMenuRent.classList.remove("showDropMenuRent");
    }




    $(document).ready(function(){


        var sliderWeAre = new IdealImageSlider.Slider({
            selector: '#sliderWeAre',
            height: 400, // Required but can be set by CSS
            interval: 6000,
            transitionDuration : 2000
        });
        sliderWeAre.start();

    });



