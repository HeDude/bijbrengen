jQuery(document).ready(function () {
    // Functie om de slider te vullen met gegevens uit de JSON-file
    function loadSliderData() {
        return jQuery.getJSON('../data/entreprenasium_silder.json'); // Zorg dat het pad naar het JSON-bestand correct is.
    }

    // Functie om HTML te genereren voor elke slide
    function generateSlidesHtml(data) {
        var slidesHtml = '';
        jQuery.each(data, function (index, item) {
            slidesHtml += '<div class="c-slide" style="background-image: url(\'image/' + item.image + '\')" onclick="makeSlideActive(this)">';
            slidesHtml += '    <div class="c-slide-content">';
            slidesHtml += '        <div class="c-wrap c-wrap--line">';
            slidesHtml += '            <h2 class="c-slide__title">' + item.title;
            slidesHtml += '                <span class="c-slide__title--medium">' + item.large_title + '</span>';
            slidesHtml += '            </h2>';
            slidesHtml += '        </div>';
            slidesHtml += '        <div class="c-wrap c-wrap--small">';
            slidesHtml += '            <div class="c-slide__info">';
            slidesHtml += '                <h3 class="c-slide__subtitle">' + item.subtitle + '</h3>';
            slidesHtml += '                <p class="c-slide__body">' + item.text + '</p>';
            slidesHtml += '            </div>';
            slidesHtml += '        </div>';
            slidesHtml += '    </div>';
            slidesHtml += '</div>';
        });
        return slidesHtml;
    }

    // Laad de slider gegevens en initialiseer de slider
    loadSliderData().done(function (data) {
        var slidesHtml = generateSlidesHtml(data);
        jQuery(".c-slider-init").html(slidesHtml);

        // Bestaande code om de slider te initialiseren
        jQuery(".c-slider-init").slick({
            dots: false,
            nav: false,
            arrows: false,
            infinite: true,
            speed: 1200,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            adaptiveHeight: true,
            autoplay: true,
            draggable: false,
            pauseOnFocus: false,
            pauseOnHover: false
        });

        // Bestaande code voor animaties en overgangen
        jQuery(".slick-current").addClass("initialAnimation");
        let transitionSetup = {
            target: ".slick-list",
            enterClass: "u-scale-out",
            doTransition: function () {
                var slideContainer = document.querySelector(this.target);
                slideContainer.classList.add(this.enterClass);
                jQuery(".slick-current").removeClass("animateIn");
            },
            exitTransition: function () {
                var slideContainer = document.querySelector(this.target);
                setTimeout(() => {
                    slideContainer.classList.remove(this.enterClass);
                    jQuery(".slick-current").addClass("animateIn");
                }, 2000);
            }
        };

        var i = 0;
        // On before slide change
        jQuery(".c-slider-init").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
            if (i == 0) {
                event.preventDefault();
                transitionSetup.doTransition();
                i++;
            } else {
                i = 0;
                transitionSetup.exitTransition();
            }

            jQuery(".c-slider-init").slick("slickNext");
            jQuery(".slick-current").removeClass("initialAnimation");
        });
    });
});

// Function to make a slide active when clicked
function makeSlideActive(clickedElement) {
    // Remove the 'active' class from all slides
    jQuery('.c-slide').removeClass('active');
    // Add the 'active' class to the clicked slide
    jQuery(clickedElement).addClass('active');

    // Any additional logic to handle animations or text changes for the active slide
    // would go here. For example, you might want to trigger a repositioning of the
    // slider to bring the active slide into view, or start animations associated with
    // the newly active slide.
}
