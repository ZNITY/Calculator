function operation(){
  let nbr1= document.getElementById("nbr1").value;
  let nbr2= document.getElementById("nbr2").value;
  let operation = document.querySelector('[name="operation"]:checked').value;
  nbr1=parseFloat(nbr1);
  nbr2=parseFloat(nbr2);

  switch (operation) {
    case '+': document.getElementById("result").innerHTML=nbr1+nbr2;
      break;
    case '-': document.getElementById("result").innerHTML=nbr1-nbr2;
      break;
    case '*': document.getElementById("result").innerHTML=nbr1*nbr2;
      break;
    case '/': document.getElementById("result").innerHTML=nbr1/nbr2;
      break;

  }

}
