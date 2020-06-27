function getNumber(num){
  var x = document.getElementById('result');
  x.value += num;
}

function clearResult(){
  var res = document.getElementById('result');
  res.value="";
}

function getResult(){
  var res=document.getElementById('result');
  res.value= eval(res.value);
}