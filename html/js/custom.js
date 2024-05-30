$(document).ready(function () {
  //Prevent Page Reload on all # links
  $("body").on("click", "a[href='#']", function (e) {
    e.preventDefault();
  });

  //placeholder
  $("[placeholder]").each(function () {
    $(this).attr("data-placeholder", this.placeholder);
    $(this).bind("focus", function () {
      this.placeholder = "";
    });
    $(this).bind("blur", function () {
      this.placeholder = $(this).attr("data-placeholder");
    });
  });

  // On scroll Add Class
  $(window).scroll(function (e) {
    if ($(window).scrollTop() > 200) {
      $(".wrapper").addClass("page-scrolled");
    } else {
      $(".wrapper").removeClass("page-scrolled");
    }
  });

  var $resizeTimer;
  $(window).on("resize", function (e) {
    if (!$("body").hasClass("window-resizing")) {
      $("body").addClass("window-resizing");
    }
    clearTimeout($resizeTimer);
    $resizeTimer = setTimeout(function () {
      $("body").removeClass("window-resizing");
    }, 250);
  });

  // Add new js functions here -----------------------------------------------------------------

  // Sidebar
  $(".menu-btn").on("click", function (e) {
    $("body").toggleClass("open-menu");
  });
  $(".sidebar-overlay").on("click", function (e) {
    $("body").removeClass("open-menu");
  });

  // Open Sub Menu
  $(".has-submenu>.nav-link").click(function (e) {
    $(this).parent(".has-submenu").siblings().removeClass("open");
    $(this).parent().toggleClass("open");
  });

  // Search
  $(".search-btn").on("click", function (e) {
    $("body").toggleClass("open-search");
  });
  $(".search-overlay").on("click", function (e) {
    $("body").removeClass("open-search");
  });

  // Sales Chart
  let salesChartCanvas = document.getElementById("salesChart");
  if (salesChartCanvas) {
    var ctx = salesChartCanvas.getContext("2d");
    var data = {
      labels: ["21%", "43%", "33%"],
      datasets: [
        {
          label: "My First Dataset",
          data: [21, 43, 33],
          backgroundColor: ["#99C53C", "#9952E1", "#4D97DB"],
          hoverOffset: 4,
          borderWidth: 0,
        },
      ],
    };
    var options = {
      responsive: true,
      maintainAspectRatio: true,
      cutout: 70,
      offset: 6,
      plugins: {
        legend: {
          position: "bottom",
          align: "center",
          labels: {
            color: "$textDark",
            boxWidth: 10,
            boxHeight: 10,
            borderRadius: 60,
            useBorderRadius: true,
            usePointStyle: true,
            padding: 34,
            font: {
              size: 18,
              lineHeight: 24,
              family: '"Poppins", sans-serif',
            },
          },
        },
      },
      animation: {
        duration: 2000,
        easing: "easeOutSine",
      },
    };
    var salesChart = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: options,
    });
  }

  $(".countup1 span").counterUp();
  $(".countup2").counterUp();
  $(".countup3 span").counterUp();
  $(".countup4 span").counterUp();

  // Password Toggle
  $(".password-btn").click(function () {
    var passwordInput = $(this).siblings(".password-input");
    if (passwordInput.attr("type") === "password") {
      passwordInput.attr("type", "text");
      $(this).addClass("show-password");
    } else {
      passwordInput.attr("type", "password");
      $(this).removeClass("show-password");
    }
  });

  // AOS Initialize
  AOS.init({
    once: true,
    duration: 600,
  });
  // Don't add anything below this --------------------------------------------------------------
  // Add Class on Window Load
  $("body").addClass("page-loaded");
});
