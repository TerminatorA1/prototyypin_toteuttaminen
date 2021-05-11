function testaa() {
  var luku = document.getElementById("k1").value;
var lause="";

  console.log (luku);
  luku = parseInt(luku);

  for (var x = 1; x < 10; x++) {
    lause+=luku + "x " + x + "=" + luku*x;
    console.log(lause);
  }
alert(lause);
}
