function increase_size(){
  var image = document.getElementById('sanjose_id');
  image.style.width = "400px";
}

function decrease_size(){
  var image = document.getElementById('sanjose_id');
  image.style.width = "200px";
}

function width(imageid){
  console.log("Hello world");
  var img = document.getElementById(imageid);
  var intElemClientWidth = img.clientWidth;
  console.log(intElemClientWidth);
  return intElemClientWidth;
}

function height(imageid){
  var img = document.getElementById(imageid);
  var intElemClientHeight = img.clientHeight;
  console.log(intElemClientHeight);
  return intElemClientHeight;
}
function testHello(){
  console.log("akrbger");
}
