// aos
AOS.init();

$(document).ready(function () {
  $("#list-dropdown").hide();
  $("#dropdown").click(function () {
    if ($("#dropdown").is(":checked")) {
      $("#list-dropdown").show();
    } else {
      $("#list-dropdown").hide();
    }
  });

  $("#dropdown-2").click(function () {
    if ($("#dropdown-2").is(":checked")) {
      $("#list-dropdown-2").show();
    } else {
      $("#list-dropdown-2").hide();
    }
  });

  $("#dropdown-3").click(function () {
    if ($("#dropdown-3").is(":checked")) {
      $("#list-dropdown-3").show();
    } else {
      $("#list-dropdown-3").hide();
    }
  });

  $("#dropdown-4").click(function () {
    if ($("#dropdown-4").is(":checked")) {
      $("#list-dropdown-4").show();
    } else {
      $("#list-dropdown-4").hide();
    }
  });
});

// function sendMail(params) {
//   var firstName = document.getElementById("firstName").value;
//   var lastName = document.getElementById("lastName").value;
//   var name = firstName + lastName;
//   var tempParams = {
//     from_name: name,
//     email: document.getElementById("email").value,
//     message: document.getElementById("message").value,
//   };
//   emailjs.send(serviceId, templateId, tempParams).then(function (res) {
//     console.log("success", res.status);
//   });

//   const serviceId = "service_j6m8kgz";
//   const templateId = "template_x56mn89";
// }

// // function active navbar
// var navbar = document.getElementById("#navbar");
// var navActive = document.getElementById(".nav-link");
// for (var i = 0; i < navActive.length; i++) {
//   navActive[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
