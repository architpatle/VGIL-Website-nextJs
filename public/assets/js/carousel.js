window.runCarouselJS = function() {
    $(".tf-swiper").each(function (index, element) {
        var $this = $(element);
        
        if ($this[0].swiper) {
            $this[0].swiper.destroy(true, true);
        }

        var laptop = $this.data("laptop") || 1;
        var preview = $this.data("preview") || 1;
        var tablet = $this.data("tablet") || 1;
        var mobile = $this.data("mobile") || 1;
        var mobileSm = $this.data("mobile-sm") !== undefined ? $this.data("mobile-sm") : mobile;

        // Spacing
        var spacing = $this.data("space");
        var spacingMd = $this.data("space-md");
        var spacingLg = $this.data("space-lg");
        var spacingXxl = $this.data("space-xxl");

        if (spacing !== undefined && spacingMd === undefined && spacingLg === undefined) {
            spacingMd = spacing;
            spacingLg = spacing;
        } else if (spacing === undefined && spacingMd !== undefined && spacingLg === undefined) {
            spacing = 0;
            spacingLg = spacingMd;
        }
        spacing = spacing || 0;
        spacingMd = spacingMd || 0;
        spacingLg = spacingLg || 0;
        spacingXxl = spacingXxl || 1;

        var perGroup = $this.data("pagination") || 1;
        var perGroupSm = $this.data("pagination-sm") || 1;
        var perGroupMd = $this.data("pagination-md") || 1;
        var perGroupLg = $this.data("pagination-lg") || 1;
        var gridRows = $this.data("grid") || 1;
        var cursorType = $this.data("cursor") ?? false;
        var loop = $this.data("loop") ?? false;
        var effect = $this.data("effect") || "slide";
        var atPlay = $this.data("auto"); // True || False
        var speed = $this.data("speed") || 800;
        var delay = $this.data("delay") || 1000;
        var direction = $this.data("direction") || "horizontal";
        var centered = $this.data("center") ?? false;
        var init = $this.data("init") || 0;
        var clickSlide = $this.data("click-slide") ?? false;

        var swiperT = new Swiper($this[0], {
            direction: direction,
            speed: speed,
            centeredSlides: centered,
            slidesPerView: mobile,
            spaceBetween: spacing,
            slidesPerGroup: perGroup,
            grabCursor: cursorType,
            loop: loop,
            effect: effect,
            initialSlide: init,
            slideToClickedSlide: clickSlide,
            autoplay: atPlay
                ? {
                      delay: delay,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                  }
                : false,
            grid: {
                rows: gridRows,
                fill: "row",
            },
            pagination: {
                el: [$this.find(".tf-sw-pagination")[0], $this.closest(".tf-pag-swiper").find(".tf-sw-pagination")[0]],
                clickable: true,
            },
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: [
                    $this.closest(".tf-btn-swiper-main").find(".nav-next-swiper")[0],
                    $this.closest(".container").find(".group-btn-slider .nav-next-swiper")[0],
                    $this.closest(".tf-btn-swiper-main").find(".nav-next-swiper-2")[0],
                ],
                prevEl: [
                    $this.closest(".tf-btn-swiper-main").find(".nav-prev-swiper")[0],
                    $this.closest(".container").find(".group-btn-slider .nav-prev-swiper")[0],
                    $this.closest(".tf-btn-swiper-main").find(".nav-prev-swiper-2")[0],
                ],
            },
            breakpoints: {
                575: {
                    slidesPerView: mobileSm,
                    spaceBetween: spacing,
                    slidesPerGroup: perGroupSm,
                    grid: {
                        rows: gridRows,
                        fill: "row",
                    },
                },
                768: {
                    slidesPerView: tablet,
                    spaceBetween: spacingMd,
                    slidesPerGroup: perGroupMd,
                    grid: {
                        rows: gridRows,
                        fill: "row",
                    },
                },
                1200: {
                    slidesPerView: preview,
                    spaceBetween: spacingLg,
                    slidesPerGroup: perGroupLg,
                    grid: {
                        rows: gridRows,
                        fill: "row",
                    },
                },
                1600: {
                    slidesPerView: laptop === 1 ? preview : laptop,
                    spaceBetween: spacingXxl === 1 ? spacingLg : spacingXxl,
                    slidesPerGroup: perGroupLg,
                    grid: {
                        rows: gridRows,
                        fill: "row",
                    },
                },
            },
        });
        
        $(".swiper-button").off("mouseenter mouseleave click");
        $(".swiper-button")
            .on("mouseenter", function () {
                var slideIndex = $(this).data("slide");
                swiperT.slideTo(slideIndex, 500, false);

                $(".tf-swiper .card_product--V01.style_2").removeClass("active");
                $(".tf-swiper .card_product--V01.style_2").eq(slideIndex).addClass("active");
            })
            .on("mouseleave", function () {
                $(".tf-swiper .card_product--V01.style_2").removeClass("active");
            })
            .on("click", function () {
                var slideIndex = $(this).data("slide");
                $(".tf-swiper .card_product--V01.style_2").eq(slideIndex).toggleClass("clicked");
            });
    });

    if ($(".section-testimonials").length > 0) {
        if ($(".sw-main-image")[0] && $(".sw-main-image")[0].swiper) {
            $(".sw-main-image")[0].swiper.destroy(true, true);
        }
        if ($(".swiper-testimonial")[0] && $(".swiper-testimonial")[0].swiper) {
            $(".swiper-testimonial")[0].swiper.destroy(true, true);
        }

        const thumbSwiper = new Swiper(".sw-main-image", {
            slidesPerView: 1,
            watchSlidesProgress: true,
            watchSlidesVisibility: true,
            spaceBetween: 10,
            centeredSlides: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            speed: 700,
        });

        const mainSwiper = new Swiper(".swiper-testimonial", {
            slidesPerView: 1,
            pagination: {
                el: ".testimonials-pagination",
                type: "fraction",
            },
            navigation: {
                nextEl: ".testimonials-next",
                prevEl: ".testimonials-prev",
            },
        });

        thumbSwiper.controller.control = mainSwiper;
        mainSwiper.controller.control = thumbSwiper;
    }


};

$(window).on("load", window.runCarouselJS);