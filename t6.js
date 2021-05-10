function testaa() {
  var num1 = document.getElementById("k1").value;


  console.log (num1);
  num1 = parseInt(num1);

  if (num1 < 0){
      return alert(num1 + " luku on negatiivinen");
    }
    else {
      return alert (num1 + " luku on positiivinen")
    }

  }
