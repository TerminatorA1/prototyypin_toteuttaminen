function testaa() {
  var num1 = document.getElementById("k1").value;


  console.log (num1);
  num1 = parseInt(num1);

  if (num1%2 == 0){
      return alert("Parillinen " + num1);
    } else {
      return alert ("Pariton " + num1);
    }

  }
