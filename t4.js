function testaa() {
  var num1 = document.getElementById("k1").value;


  console.log (num1);
  num1 = parseInt(num1);

  if (num1 < 15){
      return alert(num1 + " käytäthän polkupyörää");
    } else if (num1 < 18){
      return alert (num1 + " käytäthän mopoa");
    } else {
      return alert (num1 + " käytäthän autoa")
    }

  }
