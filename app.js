$(document).ready(function() {
  $("select.country").change(function() {
    var selectedCountry = $(this)
      .children("option:selected")
      .val();
    var newSelectedCountry = selectedCountry;
    if (newSelectedCountry === "mm") {
      $(".ring-mm-selection").addClass("yesdisplay");
    } else if (newSelectedCountry !== "mm") {
      $(".ring-mm-selection").removeClass("yesdisplay");
    }
    if (newSelectedCountry === "us") {
      $(".ring-us-selection").addClass("yesdisplay");
    } else if (newSelectedCountry !== "us") {
      $(".ring-us-selection").removeClass("yesdisplay");
    }
    if (newSelectedCountry === "britain") {
      $(".ring-britain-selection").addClass("yesdisplay");
    } else if (newSelectedCountry !== "britain") {
      $(".ring-britain-selection").removeClass("yesdisplay");
    }
    if (newSelectedCountry === "japan") {
      $('.ring-japan-selection').addClass('yesdisplay');
    } else if (newSelectedCountry !== 'japan'){
      $('.ring-japan-selection').removeClass('yesdisplay');
    }
    if (newSelectedCountry === "france") {
      $('.ring-france-selection').addClass('yesdisplay');
    } else if (newSelectedCountry !== "france") {
      $('.ring-france-selection').removeClass('yesdisplay');
    }
    if (newSelectedCountry === "switzerland") {
      $(".ring-switzerland-selection").addClass('yesdisplay');
    } else if (newSelectedCountry !== "switzerland") {
     $(".ring-switzerland-selection").removeClass('yesdisplay');          
    }
    if (newSelectedCountry === "germany") {
        $(".ring-germany-selection").addClass("yesdisplay");
        } else if (newSelectedCountry !== "germany") {
          $(".ring-germany-selection").removeClass("yesdisplay");
        }
  });
  $("select.countrySecond").change(function() {
    var selectedCountrySecond = $(this)
      .children("option:selected")
      .val();
    var newSelectedCountry2 = selectedCountrySecond;
    if (newSelectedCountry2 === "mm") {
      $(".ring-mm").addClass("yesdisplay");
    } else if (newSelectedCountry2 !== "mm") {
      $(".ring-mm").removeClass("yesdisplay");
    }
    if (newSelectedCountry2 === "us") {
      $(".ring-us").addClass("yesdisplay");
    } else if (newSelectedCountry2 !== "us") {
      $(".ring-us").removeClass("yesdisplay");
    }
    if (newSelectedCountry2 === "britain") {
      $(".ring-britain").addClass("yesdisplay");
    } else if (newSelectedCountry2 !== "britain") {
      $(".ring-britain").removeClass("yesdisplay");
    }
    if (newSelectedCountry2 === "japan") {
      $('.ring-japan').addClass('yesdisplay');
    } else if (newSelectedCountry2 !== 'japan'){
      $('.ring-japan').removeClass('yesdisplay');
    }
    if (newSelectedCountry2 === "france") {
      $('.ring-france').addClass('yesdisplay');
    } else if (newSelectedCountry2 !== "france") {
      $('.ring-france').removeClass('yesdisplay');
    }
    if (newSelectedCountry2 === "switzerland") {
      $(".ring-switzerland").addClass('yesdisplay');
    } else if (newSelectedCountry2 !== "switzerland") {
     $(".ring-switzerland").removeClass('yesdisplay');          
    }
    if (newSelectedCountry2 === "germany") {
        $(".ring-germany").addClass("yesdisplay");
        } else if (newSelectedCountry2 !== "germany") {
          $(".ring-germany").removeClass("yesdisplay");
        }
  });
});
