function testaa() {
  var num1 = document.getElementById("k1").value;
  var num2 = document.getElementById("k2").value;
  var num3 = document.getElementById("k3").value;
  var num4 = document.getElementById("k4").value;
  var num5 = document.getElementById("k5").value;
  var isoin;
  console.log (num1, num2, num3, num4, num5);
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  num3 = parseInt(num3);
  num4 = parseInt(num4);
  num5 = parseInt(num5);
  if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5){
    isoin = num1;
      return alert("Isoin on " + isoin);
    }
    if (num2 > num3 && num2 > num4 && num2 > num5){
      isoin = num2;
        return alert("Isoin on " + isoin);
      }
      if (num3 > num4 && num3 > num5){
        isoin = num3;
          return alert("Isoin on " + isoin);
        }
        if (num4 > num5){
          isoin = num4;
            return alert("Isoin on " + isoin);
          }
          if (num5 >= num1){
            isoin = num5;
              return alert("Isoin on " + isoin);
            }
  }
