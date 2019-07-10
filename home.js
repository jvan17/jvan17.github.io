function alert_name() {
  //Create name variable
  var name = "Jennie";
  alert("My name is " + name);
}

function change_image() {
  var image = document.getElementById('hk');
  if (image.src.match("scrunch2")) {
    image.src = "img/hk.jpg";
  }
  else {
    image.src = "img/scrunch2.jpg";
  }
}

function bigImg(x) {
  x.style.height = "64px";
  x.style.width = "64px";
}

function normalImg(x) {
  x.style.height = "32px";
  x.style.width = "32px";
}
