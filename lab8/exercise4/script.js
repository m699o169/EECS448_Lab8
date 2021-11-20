function updateScreen() {
  var backRed = document.getElementById("backgroundRed").value;
  var backBlue = document.getElementById("backgroundBlue").value;
  var backGreen = document.getElementById("backgroundGreen").value;
  var borderRed = document.getElementById("borderRed").value;
  var borderBlue = document.getElementById("borderBlue").value;
  var borderGreen = document.getElementById("borderGreen").value;
  var borderW = document.getElementById("borderW").value;

  para.style.backgroundColor = 'rgb(' + backRed + ',' + backBlue + ',' + backGreen + ')';
  para.style.borderColor = 'rgb(' + borderRed + ',' + borderBlue + ',' + borderGreen + ')';

  para.style.borderWidth = borderW;
}
