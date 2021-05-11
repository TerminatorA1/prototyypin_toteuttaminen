function testaa() {
  var num1 = document.getElementById("k1").value;
  var paiva;


  console.log (num1);
  num1 = parseInt(num1);

switch (num1){
  case 1:
  alert("Maanantai");
  break;
  case 2:
  alert("Tiistai");
  break;
  case 3:
  alert("Keskiviikko");
  break;
  case 4:
  alert("Torstai");
  break;
  case 5:
  alert("Perjantai");
  break;
  case 6:
  alert("Lauantai");
  break;
  case 7:
  alert("Sunnuntai");
  break;
  default:
  alert ("Anna viikonpäivän numero välillä 1-7"); // Tässä poiketaan kaaviosta hieman, tässä kohtaa voisi olla sunnuntai
  break;
}
}
