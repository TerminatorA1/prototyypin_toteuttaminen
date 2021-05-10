function testaa() {
  var num1 = document.getElementById("k1").value;
  var uusi1;
  var num2 = document.getElementById("k2").value;
  var uusi2;
  var num3 = document.getElementById("k3").value;
  var uusi3;
  console.log (num1, num2, num3);
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  num3 = parseInt(num3);
  if (num1 < num2 && num1 < num3){
    uusi1 = num1;
    if (num2 < num3) {
      uusi2 = num2;
      uusi3 = num3;
      return alert("järjestys on " + uusi1 + "," + uusi2 + "," + uusi3);
    } else {
      uusi2 = num3;
      uusi3 = num2;
      return alert("järjestys on " + uusi1 + "," + uusi2 + "," + uusi3);
    }
  }
  if (num2 < num1 && num2 < num3){
    uusi1 = num2;
    if (num1 < num3) {
      uusi2 = num1;
      uusi3 = num3;
      return alert("järjestys on " + uusi1 + "," + uusi2 + "," + uusi3);
    } else {
      uusi2 = num3;
      uusi3 = num1;
      return alert("järjestys on " + uusi1 + "," + uusi2 + "," + uusi3);
    }
  }
    if (num3 < num1 && num3 < num2){
      uusi1 = num3;
      if (num1 < num2) {
        uusi2 = num1;
        uusi3 = num2;
        return alert("järjestys on " + uusi1 + "," + uusi2 + "," + uusi3);
      } else {
        uusi2 = num2;
        uusi3 = num1;
        return alert("järjestys on " + uusi1 + "," + uusi2 + "," + uusi3);
      }
}
}
