//script.js
function validPassword()
{
  var pass1 = document.getElementById("pass1").value;
  var pass2 = document.getElementById("pass2").value;

  if (String(pass1).length < 8 || String(pass2).length < 8)
  {
    alert("Password must be atleast 8 characters in length");
  }
  else if (pass1 == pass2)
  {
    alert("Success!");
  }
  else
  {
    alert("Passwords do not match!");
  }
  return;
}

function nextImg()
{
  var imageSource = document.getElementById("img1");
  var image = document.getElementById("img1").getAttribute("src");

  if (image == "red.png")
  {
    imageSource.src = "blue.png";
  }
  if (String(image) == "blue.png")
  {
    imageSource.src = "green.png";
  }
  if (String(image) == "green.png")
  {
    imageSource.src = "orange.png";
  }
  if (String(image) == "orange.png")
  {
    imageSource.src = "yellow.png";
  }
  if (String(image) == "yellow.png")
  {
    imageSource.src = "red.png";
  }

  return;
}

function prevImg()
{
  var imageSource = document.getElementById("img1");
  var image = document.getElementById("img1").getAttribute("src");

  if (image == "red.png")
  {
    imageSource.src = "yellow.png";
  }
  if (String(image) == "blue.png")
  {
    imageSource.src = "red.png";
  }
  if (String(image) == "green.png")
  {
    imageSource.src = "blue.png";
  }
  if (String(image) == "orange.png")
  {
    imageSource.src = "green.png";
  }
  if (String(image) == "yellow.png")
  {
    imageSource.src = "orange.png";
  }

  return;
}
