$(
  ".modal-trigger, .modal-trigger-2, .modal-trigger-3, .modal-trigger-4, .modal-btn-close"
).on("click", function() {
  if ($("body").css("overflow") != "hidden") {
    $("body").css("overflow", "hidden");
  }
});
$(
  ".modal-close, .modal-close-2, .modal-close-3, .modal-close-4, .modal-btn-close"
).on("click", function() {
  if ($("body").css("overflow") != "visisble") {
    $("body").css("overflow", "visible");
  }
});

$(document).ready(function() {
  $("#burguer").on("click", function() {
    $("#burguer span").toggleClass("burguer-color");
    $("nav").toggleClass("active");
    $("span:nth-of-type(1)").toggleClass("top-rot");
    $("span:nth-of-type(2)").toggleClass("hide");
    $("span:nth-of-type(3)").toggleClass("bot-rot");
  });
});

$(function() {
  var header = $(".burger");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= $("#section1").innerHeight()) {
      header.css({
        left: "1em",
        top: "0.7em",
        transition: "all 0.5s cubic-bezier(0.19, 1, 0.22, 1)"
      });

      $(".nav-bar").css({
        "box-shadow": "0 2px 2px 2px rgba(0, 0, 0, 0.25)",
        transition: "all 0.5s cubic-bezier(0.19, 1, 0.22, 1)"
      });
    } else {
      header.css({
        left: "2.5em",
        top: "2.5em",

        transition: "all 0.5s cubic-bezier(0.19, 1, 0.22, 1)"
      });
      $(".nav-bar").css({
        "box-shadow": "none",
        transition: "all 0.5s cubic-bezier(0.19, 1, 0.22, 1)"
      });
    }
  });
});

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  var os = $("#section2").offset().top;
  var ht = $("#section2").height();
  if (scroll > os + ht) {
    $("label .burger .bar").css({
      background: "#f8f8fa",
      transition: "all 0.5s cubic-bezier(0.19, 1, 0.22, 1)"
    });

    $("label").append(
      "<style>  label .burger::before,label .burger .bar,label .burger::after{background: #f8f8fa;}</style>"
    );
  } else {
    $("label .burger .bar").css({
      background: "#c4314b",
      transition: "all 0.5s cubic-bezier(0.19, 1, 0.22, 1)"
    });

    $("label").append(
      "<style>  label .burger::before,label .burger .bar,label .burger::after{background: #c4314b;}</style>"
    );
  }
});

$(document).ready(function() {
  $("#fullpage").fullpage({
    //verticalCentered:false,
    //navigation: true,
    //navigationPosition: 'right',
    //navigationTooltips: ['Home', 'About', 'Work', 'Contact'],
    showActiveTooltip: false,
    anchors: ["page1", "page2", "page3"],
    slidesNavigation: true,
    scrollBar: true,
    autoScrolling: false,
    slidesNavPosition: "bottom",
    responsiveWidth: 768,
    fitToSection: false,

    controlArrows: false
  });
});

$(document).ready(function() {
  // INITIATE THE FOOTER
  siteFooter();
  // COULD BE SIMPLIFIED FOR THIS PEN BUT I WANT TO MAKE IT AS EASY TO PUT INTO YOUR SITE AS POSSIBLE
  $(window).resize(function() {
    siteFooter();
  });

  function siteFooter() {
    var siteContent = $(".site-content");
    var siteContentHeight = siteContent.height();
    var siteContentWidth = siteContent.width();

    var siteFooter = $("#site-footer");
    var siteFooterHeight = siteFooter.height();
    var siteFooterWidth = siteFooter.width();

    siteContent.css({
      "margin-bottom": siteFooterHeight + 50
    });
  }
});

$("a").on("touchstart", function() {
  //simply starts listening for touchstart - allows for hover state on touch devices
});

jQuery(document).ready(function() {
  var modalTriggerBts = $(
      'a[data-type="cd-modal-trigger"], a[data-type="cd-modal-trigger-2"], a[data-type="cd-modal-trigger-3"], a[data-type="cd-modal-trigger-4"]'
    ),
    coverLayer = $(
      ".cd-cover-layer, .cd-cover-layer-2, .cd-cover-layer-3, .cd-cover-layer-4"
    );

  /*
    convert a cubic bezier value to a custom mina easing
    http://stackoverflow.com/questions/25265197/how-to-convert-a-cubic-bezier-value-to-a-custom-mina-easing-snap-svg
  */
  var duration = 600,
    epsilon = 1000 / 60 / duration / 4,
    firstCustomMinaAnimation = bezier(0.63, 0.35, 0.48, 0.92, epsilon);

  modalTriggerBts.each(function() {
    initModal($(this));
  });

  function initModal(modalTrigger) {
    var modalTriggerId = modalTrigger.attr("class"),
      modal = $(
        '.cd-modal[data-modal="' +
          modalTriggerId +
          '"], .cd-modal-2[data-modal="' +
          modalTriggerId +
          '"], .cd-modal-3[data-modal="' +
          modalTriggerId +
          '"], .cd-modal-4[data-modal="' +
          modalTriggerId +
          '"]'
      ),
      svgCoverLayer = modal.children(
        ".cd-svg-bg, .cd-svg-bg-2, .cd-svg-bg-3, .cd-svg-bg-4"
      ),
      paths = svgCoverLayer.find("path"),
      pathsArray = [];
    //store Snap objects
    (pathsArray[0] = Snap("." + paths.eq(0).attr("class"))),
      (pathsArray[1] = Snap("." + paths.eq(1).attr("class"))),
      (pathsArray[2] = Snap("." + paths.eq(2).attr("class")));

    //store path 'd' attribute values
    var pathSteps = [];
    pathSteps[0] = svgCoverLayer.data("step1");
    pathSteps[1] = svgCoverLayer.data("step2");
    pathSteps[2] = svgCoverLayer.data("step3");
    pathSteps[3] = svgCoverLayer.data("step4");
    pathSteps[4] = svgCoverLayer.data("step5");
    pathSteps[5] = svgCoverLayer.data("step6");

    //open modal window
    modalTrigger.on("click", function(event) {
      event.preventDefault();
      modal.addClass(
        "modal-is-visible modal-is-visible-2 modal-is-visible-3 modal-is-visible-4"
      );
      coverLayer.addClass(
        "modal-is-visible modal-is-visible-2 modal-is-visible-3 modal-is-visible-4"
      );
      animateModal(pathsArray, pathSteps, duration, "open");
    });

    //close modal window
    modal.on(
      "click",
      ".modal-close, .modal-btn-close, .modal-close-2, .modal-close-3, .modal-close-4",
      function(event) {
        event.preventDefault();
        modal.removeClass(
          "modal-is-visible modal-is-visible-2 modal-is-visible-3 modal-is-visible-4"
        );
        coverLayer.removeClass(
          "modal-is-visible modal-is-visible-2 modal-is-visible-3 modal-is-visible-4"
        );
        animateModal(pathsArray, pathSteps, duration, "close");
      }
    );
  }

  function animateModal(paths, pathSteps, duration, animationType) {
    var path1 = animationType == "open" ? pathSteps[1] : pathSteps[0],
      path2 = animationType == "open" ? pathSteps[3] : pathSteps[2],
      path3 = animationType == "open" ? pathSteps[5] : pathSteps[4];
    paths[0].animate({ d: path1 }, duration, firstCustomMinaAnimation);
    paths[1].animate({ d: path2 }, duration, firstCustomMinaAnimation);
    paths[2].animate({ d: path3 }, duration, firstCustomMinaAnimation);
  }

  function bezier(x1, y1, x2, y2, epsilon) {
    //https://github.com/arian/cubic-bezier
    var curveX = function(t) {
      var v = 1 - t;
      return 3 * v * v * t * x1 + 3 * v * t * t * x2 + t * t * t;
    };

    var curveY = function(t) {
      var v = 1 - t;
      return 3 * v * v * t * y1 + 3 * v * t * t * y2 + t * t * t;
    };

    var derivativeCurveX = function(t) {
      var v = 1 - t;
      return (
        3 * (2 * (t - 1) * t + v * v) * x1 + 3 * (-t * t * t + 2 * v * t) * x2
      );
    };

    return function(t) {
      var x = t,
        t0,
        t1,
        t2,
        x2,
        d2,
        i;

      // First try a few iterations of Newton's method -- normally very fast.
      for (t2 = x, i = 0; i < 8; i++) {
        x2 = curveX(t2) - x;
        if (Math.abs(x2) < epsilon) return curveY(t2);
        d2 = derivativeCurveX(t2);
        if (Math.abs(d2) < 1e-6) break;
        t2 = t2 - x2 / d2;
      }

      (t0 = 0), (t1 = 1), (t2 = x);

      if (t2 < t0) return curveY(t0);
      if (t2 > t1) return curveY(t1);

      // Fallback to the bisection method for reliability.
      while (t0 < t1) {
        x2 = curveX(t2);
        if (Math.abs(x2 - x) < epsilon) return curveY(t2);
        if (x > x2) t0 = t2;
        else t1 = t2;
        t2 = (t1 - t0) * 0.5 + t0;
      }

      // Failure
      return curveY(t2);
    };
  }
});
