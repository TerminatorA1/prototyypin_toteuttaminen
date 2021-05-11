function testaa() {
  var num1 = document.getElementById("k1").value;


  console.log (num1);
  num1 = parseInt(num1);

  if (num1%4 == 0 && num1%100 !== 0){
      return alert(num1 + " kyseessä on karkausvuosi");
    }
    else if (num1%400 == 0){
      return alert(num1 + " kyseessä on karkausvuosi");
    }

    else {
      return alert (num1 + " ei ole karkausvuosi")
    }

  }
