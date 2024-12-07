jQuery(document).ready(function($) {
    jQuery('#calendlyList').on('change', function() {
        var selectedLabel = $(this).find('option:selected').text();
        var cleanedText = selectedLabel.split(' - ')[0];
        jQuery('#industry_label').val(cleanedText)
    })
});
jQuery(document).ready(function($) {
    "use strict";
    $("#customers-testimonials").owlCarousel({
        loop: !0,
        center: !0,
        items: 3,
        margin: 30,
        autoplay: !0,
        dots: !0,
        nav: !0,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        navText: ['<i class="fa fa-long-arrow-left arrow_design"></i>', '<i class="fa fa-long-arrow-right arrow_design"></i>', ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1170: {
                items: 3,
            },
        },
    })
});
jQuery(document).ready(function($) {
    "use strict";
    $(".navbar-light .dmenu").hover(function() {
        $(this).find(".sm-menu").first().stop(!0, !0).slideDown(150)
    }, function() {
        $(this).find(".sm-menu").first().stop(!0, !0).slideUp(105)
    })
});
jQuery(document).ready(function($) {
    "use strict";
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 100) {
            $(".main_header").addClass("active-header")
        } else {
            $(".main_header").removeClass("active-header")
        }
    })
});
jQuery(document).ready(function($) {
    "use strict";
    $("#load-more-feature-posts").attr("data-page", 1);
    $("#load-more-feature-posts").on("click", function() {
        var button = $(this);
        var page = button.data("page");
        var nextPage = page + 1;
        $.ajax({
            url: feature_posts_params.ajaxurl,
            data: {
                action: "load_more_feature_posts",
                page: nextPage,
            },
            type: "POST",
            beforeSend: function() {
                button.text("Loading").addClass("loading-dots")
            },
            success: function(response) {
                if ($.trim(response)) {
                    $("#feature-posts-container").append(response);
                    button.data("page", nextPage);
                    button.text("See More").removeClass("loading-dots")
                } else {
                    button.text("No more Features").removeClass("loading-dots");
                    button.prop("disabled", !0)
                }
            },
        })
    })
});
jQuery(".dropdown").hover(function() {
    jQuery(this).find(".dropdown-menu").stop(!0, !0).delay(200).fadeIn(500)
}, function() {
    jQuery(this).find(".dropdown-menu").stop(!0, !0).delay(200).fadeOut(500)
});
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
    const itemToggle = this.getAttribute("aria-expanded");
    for (i = 0; i < items.length; i++) {
        items[i].setAttribute("aria-expanded", "false")
    }
    if (itemToggle == "false") {
        this.setAttribute("aria-expanded", "true")
    }
}
items.forEach((item) => item.addEventListener("click", toggleAccordion));
const AnimateOnScroll = function({
    offset
} = {
    offset: 10
}) {
    const windowTop = (offset * window.innerHeight) / 100;
    const windowBottom = window.innerHeight - windowTop;
    const windowLeft = 0;
    const windowRight = window.innerWidth;
    this.start = (element) => {
        window.requestAnimationFrame(() => {
            element.style.animationDelay = element.dataset.animationDelay;
            element.style.animationDuration = element.dataset.animationDuration;
            element.classList.add(element.dataset.animation);
            element.dataset.animated = "true"
        })
    };
    this.inViewport = (element) => {
        const elementRect = element.getBoundingClientRect();
        const elementTop = elementRect.top + parseInt(element.dataset.animationOffset) || elementRect.top;
        const elementBottom = elementRect.bottom - parseInt(element.dataset.animationOffset) || elementRect.bottom;
        const elementLeft = elementRect.left;
        const elementRight = elementRect.right;
        return (elementTop <= windowBottom && elementBottom >= windowTop && elementLeft <= windowRight && elementRight >= windowLeft)
    };
    this.verifyElementsInViewport = (els = elements) => {
        for (let i = 0, len = els.length; i < len; i++) {
            if (els[i].dataset.animated) continue;
            this.inViewport(els[i]) && this.start(els[i])
        }
    };
    this.getElements = () => document.querySelectorAll("[data-animation]:not([data-animated])");
    this.update = () => {
        elements = this.getElements();
        elements && this.verifyElementsInViewport(elements)
    };
    if ((elements = this.getElements())) {
        window.addEventListener("load", this.update, !1);
        window.addEventListener("scroll", () => this.verifyElementsInViewport(elements), {
            passive: !0
        });
        window.addEventListener("resize", () => this.verifyElementsInViewport(elements), {
            passive: !0
        })
    }
};
const options = {
    offset: 15
};
const animation = new AnimateOnScroll(options);
jQuery(document).ready(function($) {
    "use strict";
    if ($(window).scrollTop() > 100) {
        $("#navigation1").addClass("active-header")
    }
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 100) {
            $("#navigation1").addClass("active-header")
        } else {
            $("#navigation1").removeClass("active-header")
        }
    })
});
jQuery(document).ready(function($) {
    "use strict";
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 100) {
            $(".logo_image").addClass("active_logo_img");
            $("nav .navbar .links li .sub-menu").addClass("submenu-70");
            $(".nav-links").addClass("active_nav_links")
        } else {
            $(".logo_image").removeClass("active_logo_img");
            $("nav .navbar .links li .sub-menu").removeClass("submenu-70");
            $(".nav-links").removeClass("active_nav_links")
        }
    })
});
jQuery(document).ready(function($) {
    "use strict";
    $(".owl-carousel.testimonial-carousel").owlCarousel({
        nav: !0,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>', ],
        dots: !1,
        responsive: {
            0: {
                items: 1,
            },
            750: {
                items: 2,
            },
        },
    })
});
jQuery(document).ready(function($) {
    "use strict";
    $(document).on("scroll", function() {
        var pageTop = $(document).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var tags = $(".fadein");
        for (var i = 0; i < tags.length; i++) {
            var tag = tags[i];
            if ($(tag).offset().top < pageBottom) {
                $(tag).addClass("visible")
            } else {
                $(tag).removeClass("visible")
            }
        }
    })
});

function counter() {
    jQuery(document).ready(function($) {
        "use strict";
        $(".count").each(function() {
            if ($(this).hasClass("start")) {
                var elementTop = $(this).offset().top;
                var elementBottom = elementTop + $(this).outerHeight();
                var viewportTop = $(window).scrollTop();
                var viewportBottom = viewportTop + $(window).height();
                if (elementBottom > viewportTop && elementTop < viewportBottom) {
                    var originalText = $(this).text().trim();
                    var isPercentage = originalText.includes("%");
                    var countValue = originalText.replace(/[^\d.]/g, "");
                    var decimalpoint = countValue % 1 !== 0 ? countValue.toString().split(".")[1].length : 0;
                    $(this).removeClass("start");
                    $(this).prop("Counter", 0).animate({
                        Counter: countValue,
                    }, {
                        duration: 4000,
                        easing: "swing",
                        step: function(now) {
                            var displayValue = parseFloat(now).toFixed(decimalpoint).toLocaleString("en");
                            $(this).text(isPercentage ? displayValue + "%" : displayValue + "+")
                        },
                    })
                }
            }
        })
    })
}
jQuery(document).ready(counter);
jQuery(window).on("scroll", counter);
jQuery(document).ready(function($) {
    "use strict"
});

function openModal() {
    jQuery("#modal-subscribe").modal("show")
}

function closeModal() {
    jQuery("#modal-subscribe").modal("hide")
}
// jQuery(document).ready(function($) {
//     "use strict";
//     var url = window.location.pathname,
//         excludeUrls = ["/contact-us/", "/pricing-advertise-form/", "/pricing-usa/", "/advertisement-pricing/"],
//         cookieValue = $.cookie("modal_cookie"),
//         expDate = new Date();
//     expDate.setTime(expDate.getTime() + 24 * 60 * 60 * 1000);
//     if (!excludeUrls.includes(url) && cookieValue !== "MODALPOPUPED") {
//         setTimeout(function() {
//             $.cookie("modal_cookie", "MODALPOPUPED", {
//                 expires: expDate
//             });
//             $("#event_modal").length ? $("#event_modal").modal("show") : $("#modal-subscribe").modal("show")
//         }, 5000);
//         $("#event_modal").on("hidden.bs.modal", function() {
//             setTimeout(function() {
//                 $("#modal-subscribe").modal("show")
//             }, 5000)
//         })
//     }
// });

function copyToClipboard(element) {
    jQuery(document).ready(function($) {
        "use strict";
        var $temp = $("<input>");
        var copiedDiv = $('<div class="popup-box__text">Copied</div>');
        $("body").append($temp);
        $temp.val($(element).text()).select();
        document.execCommand("copy");
        $temp.remove();
        $(".benefits_detalis_box .btn_benefits_ button").on("click", function() {
            $(this).after(copiedDiv);
            $(copiedDiv).fadeIn().delay(1000).fadeOut(function() {
                $(this).remove()
            })
        })
    })
}
// jQuery(document).ready(function($) {
//     "use strict";
//     var forms = $(".real_industry_start_grow form, #support_form, #contact_form, #career_form, #enterprise_form");
//     var submitbtn = $(forms).find("[type=submit]");
//     var mobileFields = $("#mobile, #mobile_support, #mobile_contact, #mynumber, #phone_career, #enterprise_number");
//     $(mobileFields).on("input", function() {
//         this.value = this.value.replace(/\D/g, "")
//     });
//     $(forms).validate({
//         rules: {
//             company_name: {
//                 required: !0,
//                 no_url: !0,
//                 lettersonly: !0,
//                 noSpace: !0,
//                 HtmlTag: !0,
//             },
//             enterprise_name: {
//                 required: !0,
//                 no_url: !0,
//                 lettersonly: !0,
//                 noSpace: !0,
//                 HtmlTag: !0,
//             },
//             full_name: {
//                 required: !0,
//                 no_url: !0,
//                 lettersonly: !0,
//                 noSpace: !0,
//                 HtmlTag: !0,
//             },
//             message: {
//                 no_url: !0,
//                 noSpace: !0,
//                 HtmlTag: !0,
//             },
//             message_desc: {
//                 no_url: !0,
//                 noSpace: !0,
//                 HtmlTag: !0,
//             },
//             email: {
//                 required: !0,
//                 no_url: !0,
//                 noSpace: !0,
//                 customEmail: !0,
//             },
//             mobile: {
//                 required: !0,
//                 no_url: !0,
//                 noSpace: !0,
//                 validMobile: !0,
//             },
//             phone_career: {
//                 required: !0,
//                 no_url: !0,
//                 noSpace: !0,
//                 validMobile: !0,
//             },
//             industry: {
//                 required: !0,
//                 Default: !0,
//             },
//             industry_type: {
//                 required: !0,
//                 Default: !0,
//             },
//             company: {
//                 required: !0,
//             },
//             company2: {
//                 required: !0,
//             },
//             agree_terms: {
//                 required: !0,
//             },
//         },
//         messages: {
//             company_name: {
//                 required: "Enter your company name",
//                 no_url: "URLs are not allowed in this field",
//                 lettersonly: "Enter a valid company name",
//                 noSpace: "No space please and don't leave it empty",
//                 HtmlTag: "HTML tags are not allowed",
//             },
//             enterprise_name: {
//                 required: "Enter your name",
//                 no_url: "URLs are not allowed in this field",
//                 lettersonly: "Enter a valid name",
//                 noSpace: "No space please and don't leave it empty",
//                 HtmlTag: "HTML tags are not allowed",
//             },
//             full_name: {
//                 required: "Enter your name",
//                 no_url: "URLs are not allowed in this field",
//                 lettersonly: "Enter a valid name",
//                 noSpace: "No space please and don't leave it empty",
//                 HtmlTag: "HTML tags are not allowed",
//             },
//             email: {
//                 required: "Enter your email",
//                 no_url: "URLs are not allowed in this field",
//                 noSpace: "No space please and don't leave it empty",
//                 customEmail: "Please enter a valid email address",
//             },
//             message: {
//                 no_url: "URLs are not allowed in this field",
//                 noSpace: "No space please and don't leave it empty",
//                 HtmlTag: "HTML tags are not allowed",
//             },
//             message_desc: {
//                 no_url: "URLs are not allowed in this field.",
//                 noSpace: "No space please and don't leave it empty",
//                 HtmlTag: "HTML tags are not allowed",
//             },
//             mobile: {
//                 required: "Enter your mobile number",
//                 no_url: "URLs are not allowed in this field",
//                 noSpace: "No space please and don't leave it empty",
//                 HtmlTag: "HTML tags are not allowed",
//                 validMobile: "Enter a valid phone number",
//             },
//             phone_career: {
//                 required: "Enter your mobile number",
//                 no_url: "URLs are not allowed in this field",
//                 noSpace: "No space please and don't leave it empty",
//                 HtmlTag: "HTML tags are not allowed",
//                 validMobile: "Enter a valid phone number",
//             },
//             industry: {
//                 required: "Please select a demo type",
//                 Default: "Select demo type",
//             },
//             industry_type: {
//                 required: "Please select a industry",
//                 Default: "Select industry",
//             },
//             company: {
//                 required: "Enter your company",
//                 Default: "Select demo type",
//             },
//             company2: {
//                 required: "Please enter company name",
//             },
//             agree_terms: {
//                 required: "Please read and agree our terms and conditions",
//             },
//         },
//         submitHandler: function(form) {
//             submitbtn.prop("disabled", !0)
//         },
//     });
//     submitbtn.on("click", function(event) {
//         var errors = forms.find(":input.error").length;
//         if (errors > 0) {
//             return !1
//         } else {
//             document.addEventListener("wpcf7mailsent", function(event) {
//                 var form = event.target;
//                 if ($(form).is(forms)) {
//                     setTimeout(function() {
//                         window.location.href = "/thank-you"
//                     }, 1500)
//                 }
//             }, !1)
//         }
//     });
//     var bookDemoForm = jQuery("#bookdemo_form");
//     var bookDemoSubmit = $(bookDemoForm).find("input[type=submit]");
//     $(bookDemoForm).validate({
//         rules: {
//             book_name: {
//                 required: !0,
//                 no_url: !0,
//                 lettersonly: !0,
//                 noSpace: !0,
//             },
//             mobile: {
//                 required: !0,
//                 no_url: !0,
//                 noSpace: !0,
//                 validMobile: !0,
//             },
//             industry: {
//                 required: !0,
//                 Default: !0,
//             },
//             industry_type: {
//                 required: !0,
//                 notDefault: !0,
//             },
//             email: {
//                 required: !0,
//                 no_url: !0,
//                 noSpace: !0,
//                 customEmail: !0,
//                 email: !0,
//             },
//         },
//         messages: {
//             book_name: {
//                 required: "Enter your name",
//                 no_url: "URLs are not allowed in this field.",
//                 lettersonly: "Enter a valid name.",
//                 noSpace: "No space please and don't leave it empty",
//             },
//             industry: {
//                 required: "Select demo type",
//                 Default: "Select demo type",
//             },
//             industry_type: {
//                 required: "Select industry type",
//                 notDefault: "Select industry type",
//             },
//             mobile: {
//                 required: "Enter your phone number",
//                 no_url: "URLs are not allowed in this field.",
//                 lettersonly: "Enter a valid phone number.",
//                 noSpace: "No space please and don't leave it empty",
//                 validMobile: "Enter a valid phone number.",
//             },
//             email: {
//                 required: "Enter your email",
//                 no_url: "URLs are not allowed in this field.",
//                 noSpace: "No space please and don't leave it empty",
//                 customEmail: "Please enter a valid email address.",
//                 email: "Please enter a valid email address.",
//             },
//         },
//         submitHandler: function(form) {
//             bookDemoSubmit.prop("disabled", !0)
//         },
//     });
//     bookDemoSubmit.on("click", function(event) {
//         var errors = forms.find(":input.error").length;
//         if (errors > 0) {
//             return !1
//         }
//         const modalSubscribe = jQuery("#modal-subscribe");
//         if (bookDemoForm) {
//             bookDemoForm.on("wpcf7mailsent", function(event) {
//                 event.preventDefault();
//                 bookDemoSubmit.prop("disabled", !1);
//                 const myname = jQuery(this).find("#myname").val();
//                 const myemail = jQuery(this).find("#myemail").val();
//                 const mynumber = jQuery(this).find("#mynumber").val();
//                 const calendlyName = jQuery("#calendlyList").val();
//                 let calendly_url = "https://calendly.com/textdrip/";
//                 if (calendlyName === "textdrip-discovery") {
//                     calendly_url = "https://calendly.com/"
//                 }
//                 const calendlyLink = calendly_url + calendlyName + "?name=" + myname + "&email=" + myemail + "&a1=" + mynumber;
//                 Calendly.initPopupWidget({
//                     url: calendlyLink
//                 });
//                 if (modalSubscribe) {
//                     jQuery(modalSubscribe).modal("hide")
//                 }
//                 return !1
//             })
//         }
//     });
//     var customMethods = {
//         no_url: [function(value, element) {
//             var re = /^[a-zA-Z0-9\-\.\:\\]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU)$/;
//             var re1 = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
//             var trimmed = $.trim(value);
//             if (trimmed === "") {
//                 return !0
//             }
//             if (trimmed.match(re) === null && !re1.test(trimmed)) {
//                 return !0
//             }
//             return !1
//         }, "URLs are not allowed in this field.", ],
//         notDefault: [function(value, element) {
//             return value !== "--Select industry type--"
//         }, "Select industry type", ],
//         Default: [function(value, element) {
//             return value !== "--Select Demo type--"
//         }, "Select Demo type", ],
//         lettersonly: [function(value, element) {
//             return this.optional(element) || /^[a-zA-Z\s.]+$/.test(value)
//         }, "Enter a valid name.", ],
//         noSpace: [function(value, element) {
//             return value === "" || value.trim().length !== 0
//         }, "No space please and don't leave it empty", ],
//         HtmlTag: [function(value, element) {
//             return this.optional(element) || !/<[^>]*>/g.test(value)
//         }, "HTML tags are not allowed.", ],
//         customEmail: [function(value, element) {
//             const cleanValue = value.replace(/\s+/g, "");
//             if ((cleanValue.match(/@/g) || []).length !== 1) {
//                 return !1
//             }
//             const ipAddressPattern = /^(?:\d{1,3}\.){3}\d{1,3}$/;
//             if (ipAddressPattern.test(cleanValue)) {
//                 return !0
//             }
//             const emailPattern = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/;
//             if (!emailPattern.test(cleanValue)) {
//                 return !1
//             }
//             const domainPart = cleanValue.split("@")[1];
//             if (!/\./.test(domainPart)) {
//                 return !1
//             }
//             const localPart = cleanValue.split("@")[0];
//             const domainSection = cleanValue.split("@")[1];
//             if (/[^a-zA-Z0-9._+-]/.test(localPart)) {
//                 return !1
//             }
//             if (/[^a-zA-Z0-9.-]/.test(domainSection)) {
//                 return !1
//             }
//             return !0
//         }, "Please enter a valid email address without spaces, with exactly one @ symbol, and containing a dot.", ],
//         validMobile: [function(value, element) {
//             const cleanValue = value.replace(/\s+/g, "");
//             if (!/^\d+$/.test(cleanValue)) {
//                 return !1
//             }
//             if (/^0+$/.test(cleanValue)) {
//                 return !1
//             }
//             if (cleanValue.startsWith("0")) {
//                 return !1
//             }
//             return !0
//         }, "Please enter a valid mobile number between 10-11 digits, without spaces, and starting with a non-zero digit.", ],
//         validCompanyName: [function(value, element) {
//             return (this.optional(element) || /^[a-zA-Z0-9\s!@#\$%\^\&*\)\(+=._-]+$/.test(value))
//         }, "Please enter a valid company name with letters, numbers, and special characters.", ],
//     };
//     $.each(customMethods, function(name, params) {
//         $.validator.addMethod(name, params[0], params[1])
//     })
// });
jQuery(document).ready(function($) {
    "use strict";
    $(".testimonial .indicators li").click(function() {
        var i = $(this).index();
        var targetElement = $(".testimonial .tabs li");
        targetElement.eq(i).addClass("active");
        targetElement.not(targetElement[i]).removeClass("active")
    });
    $(".testimonial .carousel-indicators.tabs li").click(function() {
        var targetElement = $(".testimonial .tabs li");
        targetElement.addClass("active");
        targetElement.not($(this)).removeClass("active")
    })
});
jQuery(document).ready(function($) {
    "use strict";
    $("#mdh-carousel .owl-carousel").owlCarousel({
        loop: !0,
        items: 3,
        margin: 20,
        autoplay: !0,
        lazyLoad: !0,
        dots: !0,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        navText: ['<i class="fa fa-long-arrow-left arrow_design"></i>', '<i class="fa fa-long-arrow-right arrow_design"></i>', ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1170: {
                items: 3,
            },
        },
    })
});
jQuery(document).ready(function($) {
    "use strict";
    $("#guide-modal").addClass("show").css("display", "block");

    function gridviewpopup() {
        const modal = $("#guide-modal");
        if (modal.hasClass("show")) {
            modal.removeClass("show").slideUp(100);
            $("#toggle-icon-button .guidbtn").html('<i class="fa fa-plus"></i>')
        } else {
            modal.addClass("show").slideDown(300);
            $("#toggle-icon-button .guidbtn").html('<i class="fa fa-minus"></i>')
        }
    }
    $("#toggle-icon-button .guidbtn").on("click", gridviewpopup)
});
AOS.init();
jQuery(document).ready(function($) {
    "use strict";
    $(".second_part").click(function() {
        $(".tabs-2").removeClass("d-none");
        $(".tabs-1").addClass("d-none")
    });
    $(".first_part").click(function() {
        $(".tabs-2").addClass("d-none");
        $(".tabs-1").removeClass("d-none")
    })
});
jQuery(document).ready(function($) {
    "use strict";
    $("#modal-subscribe, #modal-enterprise-plan").on("hidden.bs.modal", function() {
        var form = $(this).find("form");
        form[0].reset();
        form.find("label.error").remove()
    })
});