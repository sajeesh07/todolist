window.onload = function () {
  var logo = document.getElementById("logo");

  logo.onload = function () {
    alert("The image has loaded!");
  };
  setTimeout(function () {
    logo.src = "https://edmullen.net/test/rc.jpg";
  }, 5000);
};
