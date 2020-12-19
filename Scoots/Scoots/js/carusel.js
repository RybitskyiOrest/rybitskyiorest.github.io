var myIndex = 0;
var myIndex1 = 0;
carousel();
carousel1();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (!x) return;

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1
  }

  if (x && x[myIndex - 1]) {
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 3 seconds
  }
}

function carousel1() {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex1++;
  if (myIndex1 > x.length) {
    myIndex1 = 1
  }
  if (x[myIndex - 1]) {
    x[myIndex1 - 1].style.display = "block";
    setTimeout(carousel1, 3000); // Change image every 3 seconds
  }
}