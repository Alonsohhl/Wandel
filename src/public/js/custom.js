$('body').restive({
    breakpoints: ['239', '319', '479', '767', '991', '1199', '1399', '1599', '1799', '10000'],
    classes: ['css-240', 'css-320', 'css-480', 'css-768', 'css-992', 'css-1200', 'css-1400', 'css-1600', 'css-1800 after-1600', 'css-end after-1600'],
    force_dip: true
});

jQuery(function ($) {



    function iOS() {

        var iDevices = [
          'iPad Simulator',
          'iPhone Simulator',
          'iPod Simulator',
          'iPad',
          'iPhone',
          'iPod'
        ];

        //for ios
        if (!!navigator.platform) {
            while (iDevices.length) {
                if (navigator.platform === iDevices.pop()) { return true; }
            }
        }

        //for mac
        if (navigator.platform.match('Mac') !== null) {
            return true;
        }

        return false;
    }

    if (iOS() == true) {
        $("body").addClass('ios-device');
    }


    // TODO Bill: add some comments about what is it...
    var $active = $('#faqaccordion .panel-collapse.in').prev().addClass('active');
    $active.find('a').append('<i class="fa fa-minus"></i>');
    $('#faqaccordion .panel-heading').not($active).find('a').append('<i class="fa fa-plus"></i>');
    $('#faqaccordion').on('show.bs.collapse', function (e) {
        $('#faqaccordion .panel-heading.active').removeClass('active').find('.fa').toggleClass('fa-plus fa-minus');
        $(e.target).prev().addClass('active').find('.fa').toggleClass('fa-plus fa-minus');
    });
    $('#faqaccordion').on('hide.bs.collapse', function (e) {
        $(e.target).prev().removeClass('active').find('.fa').addClass('fa-plus').removeClass("fa-minus");
    });

    var $active = $('#client-accordion .panel-collapse.in').prev().addClass('active');
    $active.find('a').append('<i class="fa fa-minus"></i>');
    $('#client-accordion .panel-heading').not($active).find('a').append('<i class="fa fa-plus"></i>');
    $('#client-accordion').on('show.bs.collapse', function (e) {
        $('#client-accordion .panel-heading.active').removeClass('active').find('.fa').toggleClass('fa-plus fa-minus');
        $(e.target).prev().addClass('active').find('.fa').toggleClass('fa-plus fa-minus');
    });
    $('#client-accordion').on('hide.bs.collapse', function (e) {
        $(e.target).prev().removeClass('active').find('.fa').addClass('fa-plus').removeClass("fa-minus");
    });

    function window_resize() {

        var w = $(window).width();
        var h = $(window).height();

        if (w < 991) {
            $('body').addClass('small-width').removeClass('large-width');
        } else {
            $('body').addClass('large-width').removeClass('small-width');
        }


        if ($('#training').length > 0) {
            var maxHeight = -1;

            $('#training .singletraining').each(function () {
                maxHeight = maxHeight > $(this).children('.content-wrapper').height() ? maxHeight : $(this).children('.content-wrapper').height();
            });

            $('#training .singletraining').height(maxHeight);

        }

    } //window_resize end.

    $(window).resize(function () {
        window_resize();
    });

    // set hover state for reveal buttons
    setButtonHoverSlider(".rev-btn");

    /* Testimonial */
    if ($("#testimonial").length) {
        $('#testimonial .testimonials').flexslider({
            controlNav: false,
            directionNav: true,
            animation: "fade",
            slideshow: true,
            touch: true,
            prevText: "<i class='fa fa-chevron-circle-left' aria-hidden='true'></i>",
            nextText: "<i class='fa fa-chevron-circle-right' aria-hidden='true'></i>"
        });
    }

    if ($('#course-sidebar').length) {
        $('#course-sidebar .header').on('click', function () {
            $('#course-sidebar ul').toggleClass('open');
        });
    }

    $(window).load(function () {
        window_resize();
    });

    //NEwsletter
    $(document).ready(function () {
        //<![cdata[
        var theForm = document.forms['previewForm'];
        if (!theForm) {
            theForm = document.previewForm;
        }
        function __doPostBack(eventTarget, eventArgument) {
            if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
                theForm.__EVENTTARGET.value = eventTarget;
                theForm.__EVENTARGUMENT.value = eventArgument;
                theForm.submit();
            }
        }
        //]]>


        //smooth scroll minerals page
        var $root = $('html, body');
        $('#scrollForMore').on('click', function (e) {
            e.preventDefault();
            var href = $.attr(this, 'href');
            $root.animate({
                scrollTop: $(href).offset().top
            }, 500, function () {
                window.location.hash = href;
            });
            return;
        });


        //flexslider
        //console.log('sss');
        //jQuery('.flexslider').flexslider({
        //    //animation: "fade",
        //    //easing: "easeOutQuint",
        //    slideshowSpeed: 10000,
        //    animationSpeed: 1000,
        //    slideshow: false,
        //    start: function (slider) {
        //        console.log(slider);
        //        $(".home-bxslider li[data-num='2']").addClass("is-next");
        //        $(".home-bxslider li[data-num='4']").addClass("is-prev");
        //    },
        //    before: function (slider) {
        //        totalSlides = slider.pagingCount;

        //        prevSlide = parseInt($(".home-bxslider .flex-active-slide").attr("data-num"));
        //        console.log(prevSlide);
        //        currentSlide = prevSlide + 1;
        //        if (currentSlide > totalSlides) {
        //            currentSlide = 1;
        //        }
        //        nextSlide = currentSlide + 1;
        //        if (nextSlide > totalSlides) {
        //            nextSlide = 1;
        //        }
        //        $(".home-bxslider li").removeClass("is-prev").removeClass('is-next');
        //        //add prev class
        //        console.log($(".home-bxslider li:nth-child(" + prevSlide + ")"));
        //        $(".home-bxslider li:nth-child(" + prevSlide + ")").addClass("is-prev");
        //        $(".home-bxslider li:nth-child(" + nextSlide + ")").addClass("is-next");

        //    },
        //    after: function (slider) {
        //        //console.log(slider);


        //    }
        //});

        document.addEventListener('scroll', function (event) {
            checkScrollSliderButtons(event);
        }, false);

        // Editor menu

        $(".top-edit-button").click(function (e) {
            moveTopEditMenuForward($(this));
            
		});

		$(".top-edit-button-permanent").click(function (e) {
			openTopEditMenuElements($(this));
		});

        $("#topEditBackButton").click(function (e) {
            moveTopEditMenuBackward();
        });

        //sustain page show content when grey box is clicked
        
   //     function bindEmployeeItems() {
   //         //show director content
			
			//$(".employ-item").click(function (e) {
			//	console.log("HI");
   //             e.preventDefault();
   //             $this = $(this);
   //             parentDiv = $this;
   //             //remove old active class
   //             $(".employ-item").removeClass("active");
   //             parentDiv.toggleClass("active");
   //             if (parentDiv.hasClass("active")) {
   //                 toggleEmployContent(parentDiv, true, $this);
   //             } else {
   //                 toggleEmployContent(parentDiv, false, $this);
   //             }
   //         });    
   //     }
        
   //     bindEmployeeItems();
        
        $(".mainSearchIconEl").click(function () {
            console.log("opened from mainSearchIconEl");
            var mainSearch = $(".main-search");
            mainSearch.toggleClass("open");
            if (mainSearch.hasClass("open")) {
            $("#searchHeaderForm input[name='q_input']").focus();
            }
        });

        $(".searchEl input").focusout(function () {
            var mainSearch = $(".main-search");
            mainSearch.removeClass("open");
        });
        $(".search-page-search input").focusin(function () {
            var mainSearch = $(".search-page-search");
            var parentEl = $(".search-form");
            mainSearch.addClass("open");
            parentEl.addClass("open");
        });

        $(".search-page-search input").focusout(function () {
            var mainSearch = $(".search-page-search");
            var parentEl = $(".search-form");
            mainSearch.removeClass("open");
            parentEl.removeClass("open");
        });

    });

	bindSustainItems();

    //counter function
    $('.count-animate').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 3000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
	});

	// slider on main page should only show 5 slides in english
	if ($(".english-only-slider")) {
		var currentLocale = getLocaleFromPath();

		if (currentLocale && (currentLocale.toLowerCase() != 'en')) {
			$(".english-only-slider").remove();
		}
	}


    //        FLEX SLIDER 
    if ($(".flexslider").length) {
        $('.flexslider').flexslider({
            animation: "fade",
            slideshowSpeed: 9000,
            animationSpeed: 400,
            slideshow: true,
            start: function (slider) {
                currentSlide = $(".flex-active-slide");
                contentDiv = currentSlide.find(".content");
                t1 = currentSlide.find(".content-items .t1");
                t2 = currentSlide.find(".content-items .t2");
                link = currentSlide.find(".content-items .link");
                expert = currentSlide.find(".content-items .the-expert");
                //t1.addClass("hide");
                //t2.addClass("hide");
                //link.addClass("hide");

                contentDiv.addClass('hide');
                contentDiv.removeClass("hide").addClass("fadeInLeft");
                t1.addClass("fadeInLeft").removeClass("hide");
                t2.addClass("fadeInLeft").removeClass("hide");
                link.addClass("fadeInLeft").removeClass("hide");
                expert.addClass("fadeInLeft").removeClass("hide");
                //setTimeout(function () {
                //    t1.addClass("fadeInLeft").removeClass("hide");
                //    t2.addClass("fadeInLeft").removeClass("hide");
                //    link.addClass("fadeInLeft").removeClass("hide");
                //}, 1000);

            },
            before: function (slider) {
                currentSlide = $(".flex-active-slide");
                t1 = $(".content-items .t1");
                t2 = $(".content-items .t2");
                link = $(".content-items .link");
                expert = $(".content-items .the-expert");
                contentDiv = currentSlide.find(".content");
                t1.removeClass("fadeInLeft").addClass("hide");
                t2.removeClass("fadeInLeft").addClass("hide");
                link.removeClass("fadeInLeft").addClass("hide");
                expert.removeClass("fadeInLeft").addClass("hide");
                contentDiv.removeClass("fadeInLeft").addClass("hide");
            },

            after: function (slider) {
                currentSlide = $(".flex-active-slide");
                contentDiv = currentSlide.find(".content");
                t1 = currentSlide.find(".content-items .t1");
                t2 = currentSlide.find(".content-items .t2");
                link = currentSlide.find(".content-items .link");
                expert = currentSlide.find(".content-items .the-expert");
                //t1.addClass("hide");
                //t2.addClass("hide");
                //link.addClass("hide");

                contentDiv.addClass('hide');
                contentDiv.removeClass("hide").addClass("fadeInLeft");
                t1.addClass("fadeInLeft").removeClass("hide");
                t2.addClass("fadeInLeft").removeClass("hide");
                link.addClass("fadeInLeft").removeClass("hide");
                expert.addClass("fadeInLeft").removeClass("hide");
                //setTimeout(function () {
                //    t1.addClass("fadeInLeft").removeClass("hide");
                //    t2.addClass("fadeInLeft").removeClass("hide");
                //    link.addClass("fadeInLeft").removeClass("hide");
                //}, 1000);
            }

        });

    }


    //TABS Careers Working at Ausenco
    if ($(".drop-tab").length) {
        $(".drop-tab").click(function (e) {
            //do something
            var num = $(this).attr("data-num");
            $('#tab-' + num).tab('show');
            $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
            $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
            e.preventDefault();
        });
    }
    

    
    window.initExpertsSlider = function () {
        //experts slider
        if ($(".experts-flexslider").length) {
            $('.experts-flexslider').flexslider({
                animation: "fade",
                slideshow: true,
                slideshowSpeed: 3000,
                pauseOnHover: true,
                controlNav: false,
                directionNav: false,
                smoothHeight: true
            });

            $(".prevIconEl").click(function(){
                $('.experts-flexslider').flexslider("prev") //Go to prev slide
            });
            $(".nextIconEl").click(function(){
                $('.experts-flexslider').flexslider("next") //Go to next slide
            });
        }
    };
    
    window.initExpertsSlider();
    
    //initialize popovers   
    $('#item-link-1').popover(
        {
            animation: false,
            trigger: "hover",
            container: '#item-link-1'
        }
        );
    $('#item-link-2').popover(
    {
        trigger: "hover",
        container: '#item-link-2'
    }
    );
    $('#item-link-3').popover(
    {
        trigger: "hover",
        container: '#item-link-3'
    }
    );


});


function bindSustainItems() {
	$(".sustainShowContent").click(function (e) {
		if (sustainContentAnimating) {
			return;
		} else {
			sustainContentAnimating = true;
		}

		e.preventDefault();

		if ($(this).closest(".webilize-sliding-boxes").hasClass("active")) {
			// if the same item is clicked again, close it.
			closeSustainContent();
			setTimeout(function () {
				sustainContentAnimating = false;
			}, 400);
		} else {

			var parentDiv = $(this).closest(".webilize-sliding-boxes");
			//remove old active class
			$(".webilize-sliding-boxes").removeClass("active");
			parentDiv.toggleClass("active");
			toggleSustainContent(parentDiv);
		}

	});

}

var sustainContentAnimating = false;


function toggleSustainContent(parentDiv) {
    var contentWrapClass = "forwardSustainContent";
	var closeButtonHtml = $(".close-button-container").html();
    //get the corresponding content
    var itemNumber = $(parentDiv).attr("data-num");
    var sustainContent = $(".grey-boxes-content > div[data-num = '" + itemNumber + "'] ").html();

    if (sustainContent) {
		// if this is not an engineering class, we can split by row
		if (parentDiv.parents(".engineering-wrapper").length == 0 && ($("body").hasClass("after-1600") || $("body").hasClass("large-width") || $("body").hasClass("after-1200") || $("body").hasClass("css-992"))) {
			// environment page is a 'special case'
			if (parentDiv.parents(".fractious-boxes").length > 0) {
				if ($("body").hasClass("after-1600")) {
					parentDiv = $(parentDiv).closest(".row-height");
				}
			}
			else if (parentDiv.parents(".black-boxes-wrap").length == 0 || $("body").hasClass("after-1600")) {
				if (parentDiv.hasClass("item-wrap")) {
					parentDiv = $(parentDiv).closest(".row-height");
				} else {
					console.log("no item wrap");
					parentDiv = $(parentDiv).closest(".row");
				}
			}			
		}
		
		// otherwise, we have to find the last div in the row
		else if ($("body").hasClass("after-1600")) {
			// five divs in row - don't need to change target for the last one
			parentDiv = getParentDivForRow(5, itemNumber, parentDiv);

		} else if ($("body").hasClass("large-width")) {
			// four divs in row - don't need to change target for the last one
			parentDiv = getParentDivForRow(4, itemNumber, parentDiv);

		} else if ($("body").hasClass("css-992") && (itemNumber % 2 != 0)) {
			//two divs etc
			parentDiv = getParentDivForRow(2, itemNumber, parentDiv);

		}
        var currentContent = $("." + contentWrapClass);
        if (!isSameSustainRow(parentDiv)) {   // opening from a closed state or from different row

            if (currentContent.length > 0) {        // different row, close current open one
                $(".contentHolder").slideUp(400, function () {
                    $(this).remove();
                });
            }
            var contentDivs = '<div class="contentHolder mb40">' +
                '<div id="backgroundSustainContent" class="backgroundSustainContent sustainContent"></div>' +
                '<div class="' + contentWrapClass + ' sustainContent">' + closeButtonHtml + sustainContent + '</div>';
            $(parentDiv).after(contentDivs);
            
            $(".contentHolder").slideDown(400, function () {
				setUpSustainCloseButton();
				slideToScreenStart();
                sustainContentAnimating = false;
            });
                
		} else {
            var backgroundContent = $("#backgroundSustainContent");
            backgroundContent.append(closeButtonHtml + sustainContent);
            currentContent.animate({
                opacity: 0
            }, 500, function () {
                currentContent.css("height", currentContent.outerHeight());
                currentContent.css("height", backgroundContent.outerHeight());
                backgroundContent.animate({
                    opacity: 1
                }, 500, function () {
                    currentContent.empty();
                    currentContent.append(closeButtonHtml + sustainContent);
                    currentContent.css("opacity", 1);
                    backgroundContent.empty();
                    backgroundContent.css("opacity", 0);
					setUpSustainCloseButton();
					slideToScreenStart();
                    sustainContentAnimating = false;
                });
                
            });
        }           
    } else {
        sustainContentAnimating = false;
    }
}

function slideToScreenStart() {
	var target = $(window);
	var targetElement = $(".contentHolder");
	var targetPosition = targetElement.offset().top;
	$('html, body').animate({ scrollTop: targetPosition - 100 }, 500);
}

function getParentDivForRow(rowLength, itemNumber, parentDiv) {
	var remainder = itemNumber % rowLength;
	if (remainder != 0) {

		var siblings = $(parentDiv).nextAll(".sustainShowContent");
		var index = Math.min((rowLength - 1) - remainder, siblings.length - 1)	// if there are not enough divs to complete a row, select the last one.
		if (index > -1) {
			return siblings.eq(index);
		}
		return parentDiv;
	}
	return parentDiv;		// keep current div
}

function isSameSustainRow(parentDiv) {
    if (parentDiv.next().hasClass("contentHolder")) {
        return true;
    } 
    return false;
}


function setUpSustainCloseButton() {
    $(".close-button").click(function () {
		closeSustainContent();
    });
}

function closeSustainContent() {
	//delete all sustain contents
	$(".contentHolder").slideUp(400, function () {
		$(this).remove();
	});

	//deactivate all the active grey boxes
	$(".webilize-sliding-boxes").removeClass("active");
	
}


function toggleEmployContent(parentDiv, show, anchor) {

    contentWrapClass = "directorContent";
    //closeButtonHtml = '<div class="close-button"><span>CLOSE </span><i>X</i></div>';
    closeButtonHtml = '';
    //get the corresponding content
    itemNumber = parseInt($(parentDiv).attr("data-num"));
    sustainContent = $(".employees-content > div[data-num = '" + itemNumber + "'] ").html();
    //console.log(sustainContent);
    if (sustainContent) {
        $("." + contentWrapClass).slideUp(200);
        setTimeout(function () {
            $("." + contentWrapClass).remove();
            //add new sustain content
            //position is different above 1599

            if ($("body").hasClass("css-992")) {
                if (isOdd(itemNumber)) {
                    nextSibling = parentDiv.next();
                    if ($(nextSibling).length == 0) {
                        parentDiv = $(parentDiv).closest(".row");
                    } else {
                        parentDiv = nextSibling;
                    }
                }
            }
            if ($("body").hasClass("css-1200") || $("body").hasClass("css-1400") || $("body").hasClass("css-1600") || $("body").hasClass("after-1600")) {
                parentDiv = $(parentDiv).closest(".row");
            }
            //console.log(sustainContent);
            $(parentDiv).after('<div class="' + contentWrapClass + '">' + sustainContent + '</div>');

            $("." + contentWrapClass).slideDown(500, function () {
                //
                //$root = $('html, body');
                //var href = $(anchor).attr('href');
                //$root.stop().animate({
                //    scrollTop: $(href).offset().top - 80 //80 is height of fixed navbar
                //}, 500, function () {
                //    window.location.hash = href;
                //});
                //return false;
            });
            //$(".sustainContent").addClass("animate");
            //delete old sustain content
            //$(".sustainContent").slideUp();

        }, 400);




    }
}


// TOP EDIT MENU

var currentTopEditMenuLevel = 0;
var elementMenuOpen = false;

function openTopEditMenuElements(selectedElement) {
	elementMenuOpen = true;
	$("#level" + currentTopEditMenuLevel).addClass("top-edit-level-right");
	if (currentTopEditMenuLevel == 0) {
		$("#topEditBackButton").removeClass("hide");
		$("#topEditW").addClass("hide");
	}
	$("#permanent-level1").removeClass("top-edit-level-left");
}

function closeElementMenu() {
	if (currentTopEditMenuLevel == 0) {
		$("#topEditBackButton").addClass("hide");
		$("#topEditW").removeClass("hide");
	}
	$("#permanent-level1").addClass("top-edit-level-left");
	$("#level" + currentTopEditMenuLevel).removeClass("top-edit-level-right");
	elementMenuOpen = false;
}

function moveTopEditMenuForward(selectedElement) {
    
    $("#level" + currentTopEditMenuLevel).addClass("top-edit-level-right");
    if (currentTopEditMenuLevel == 0) {
        $("#topEditBackButton").removeClass("hide");
        $("#topEditW").addClass("hide");
    }
    currentTopEditMenuLevel += 1;
    
	var desiredElement = getDesiredElement(selectedElement);
    desiredElement.removeClass("hide");
    $("#level" + currentTopEditMenuLevel).removeClass("top-edit-level-left");
}

function moveTopEditMenuBackward() {
	if (elementMenuOpen) {
		closeElementMenu();
	} else {
		$("#level" + currentTopEditMenuLevel).addClass("top-edit-level-left");
		currentTopEditMenuLevel -= 1;
		if (currentTopEditMenuLevel == 0) {
			$("#topEditBackButton").addClass("hide");
			$("#topEditW").removeClass("hide");
		}
		$("#level" + currentTopEditMenuLevel).removeClass("top-edit-level-right");
		var levelToSet = currentTopEditMenuLevel + 1;
		setTimeout(function () {
			$("#level" + levelToSet + " .top-edit-button-container").addClass("hide");
		}, 500);
	}   
}


function getDesiredElement(selectedElement) {
	var selector = "#level" + currentTopEditMenuLevel;
	var buttonValue = selectedElement.attr("value");
	for (var i = 1; i < currentTopEditMenuLevel; i++) {
		selectedElement = selectedElement.parent()
		value = selectedElement.attr("value");
		selector += " div[value='" + value + "']";
	}
	selector += " > .top-edit-button-container[value='" + buttonValue + "']";
	return $(selector);
}


// END EDIT MENU


function createMenuNode(jsonElement, parent, value, level) {
    // Create tree/node object to keep track of open menu

    var node = { title: jsonElement.Heading, parent: parent, numberElements: jsonElement.ChildCount, value: value, menuName: "menu" + level };
    node.panelLevel = level;
    if (jsonElement.ChildCount > 0) {
        node.finalElement = false;

        node.children = [];
        for (var i = 0; i < node.numberElements; i++) {
            var childNode = createMenuNode(jsonElement.Children[i], node, i, level + 1);
            node.children.push(childNode);
        }
    } else {
        node.finalElement = true;
        node.link = jsonElement.Link;
        if (jsonElement.Target) {
            node.target = jsonElement.Target;
        } else {
            node.target = "";
        }
    }
    return node;
}

function getLinkFromPageUrl() {

    var locations = ['en', 'fr', 'es', 'pt', 'home'];

	var url = window.location.href;
	var urlParts = url.split("/");
	var cleansed = [];
	
	urlParts.forEach(function (part) {
	    var hashIndex = part.indexOf("#");
        if (hashIndex != -1){
           part = part.substring(0, hashIndex);
           console.log(part);
       }
       
       cleansed.push(part);
    });
	
	urlParts = cleansed;
	
	var linkArray = null;
	var matchedLocation = null;
    locations.some(function (location) {
        if (urlParts.indexOf(location) != -1) {
            var index = urlParts.indexOf(location);
            linkArray = urlParts.splice(index + 1, urlParts.length);
            matchedLocation = location;
        }
	});

	if (linkArray == null) {
		linkArray = urlParts.splice(3, urlParts.length);
        
	}
	var link = linkArray.join("/");
    return {
		link: decodeURIComponent(link),
        locale: matchedLocation
    };
}

function isOdd(num) { return num % 2; }


function revealButton(element) {

    element.stop();
    element.animate({
        left: "0"
    }, {
        step: function (now, fx) {
            stepScrollRight($(this), now);
        }, duration: 400
    })
}

function resetButton(element) {

    element.stop();
    var time = 400;

    element.animate({
        left: "-120%"
    }, {
        step: function (now, fx) {
            stepScrollLeft($(this), now);
        }, duration: time
    })
}

function stepScrollRight(object, step) {
    step = step / 100;
    var quad = Math.pow(step, 3) / (Math.pow(step, 3) + Math.pow(1 - step, 3));
    var move = -100 + quad * 100;
    object.css({ left: move + "%" });

}

function stepScrollLeft(object, step) {
    step = step / 100;
    var quad = Math.pow(step, 3) / (Math.pow(step, 3) + Math.pow(1 - step, 3));
    var move = -quad * 100;
    object.css({ left: move + "%" });
}


function checkScrollSliderButtons(event) {
    
    var target = $(window);
    var docViewTop = target.scrollTop();
    var docViewBottom = docViewTop + target.height();
    $(".await-slide").each(function () {
        var targetElement = $(this)
        var elemTop = targetElement.offset().top;
        if (elemTop < 1.15 * docViewBottom) {
            animateUp(targetElement);
        }
    });

    //$(".rev-btn").each(function () {
    //    var targetElement = $(this)
    //    var elemTop = targetElement.offset().top;
    //    if (elemTop < 0.98 * docViewBottom) {
    //        targetElement.addClass('active');
    //    } else if (elemTop < docViewTop || elemTop > docViewBottom) {
    //        targetElement.removeClass('active');
    //    }
    //})
}

function scrollStageView(docViewBottom, objNames, stage) {
    if (objNames.length > 0) {

        var targetElement = $(objNames[0]);
        var elemTop = targetElement.offset().top;
        if (elemTop < 1.15 * docViewBottom) {
            var i;
            for (i = 0; i < objNames.length; i++) {
                animateUp(objNames[i]);
            }
            return stage + 1
        }
        return stage;
    }
}

function animateUp(objectName) {
    $(objectName).addClass("slide-fade-in");
    $(objectName).removeClass("slide-fade-in-start");
}

function setButtonHoverSlider(element) {
    $(element).hover(function () {
        var element = $(this).children().last();
        revealButton(element);
    }, function () {
        if (!$(this).is(":focus")) {
            var element = $(this).children().last();
            resetButton(element);
        }
    });

    $(element).focusin(function () {
        var element = $(this).children().last();
        revealButton(element);
    });
    $(element).focusout(function () {
        var element = $(this).children().last();
        resetButton(element);
    });
}

function isDesktop() {
    //var width = $(window).width();
    var body = $("body");
    if (body.hasClass("css-1200") || body.hasClass("css-1400") || body.hasClass("css-1600") || body.hasClass("after-1600")) {
        //if (width < 991) {
        return true
    } else {
        return false;
    }
}


function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

window.validateEmail = validateEmail;
