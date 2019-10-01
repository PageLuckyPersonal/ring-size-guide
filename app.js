$(document).ready(function() {
  $("select.country").change(function() {
    var selectedCountry = $(this)
      .children("option:selected")
      .val();
    var newSelectedCountry = selectedCountry;
    if (newSelectedCountry === "mm") {
      $("#ring-mm-selection").addClass("yesdisplay");
    } else if (newSelectedCountry !== "mm") {
      $("#ring-mm-selection").removeClass("yesdisplay");
    }
    if (newSelectedCountry === "us") {
      $("#ring-us-selection").addClass("yesdisplay");
    } else if (newSelectedCountry !== "us") {
      $("#ring-us-selection").removeClass("yesdisplay");
    }
    if (newSelectedCountry === "britain") {
      $("#ring-britain-selection").addClass("yesdisplay");
    } else if (newSelectedCountry !== "britain") {
      $("#ring-britain-selection").removeClass("yesdisplay");
    }
    if (newSelectedCountry === "japan") {
      $('#ring-japan-selection').addClass('yesdisplay');
    } else if (newSelectedCountry !== 'japan'){
      $('#ring-japan-selection').removeClass('yesdisplay');
    }
    if (newSelectedCountry === "france") {
      $('#ring-france-selection').addClass('yesdisplay');
    } else if (newSelectedCountry !== "france") {
      $('#ring-france-selection').removeClass('yesdisplay');
    }
    if (newSelectedCountry === "switzerland") {
      $("#ring-switzerland-selection").addClass('yesdisplay');
    } else if (newSelectedCountry !== "switzerland") {
     $("#ring-switzerland-selection").removeClass('yesdisplay');          
    }
    if (newSelectedCountry === "germany") {
        $("#ring-germany-selection").addClass("yesdisplay");
        } else if (newSelectedCountry !== "germany") {
          $("#ring-germany-selection").removeClass("yesdisplay");
        }
  });
});