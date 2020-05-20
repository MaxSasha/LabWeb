function validateName(){
  var x = document.forms["messageform"]["firstname"].value;
  var letters = /^[A-Za-zА-Яа-я]+$/;
  if (letters.test(x)) {
    document.getElementById('fn').innerHTML = '';
    return true;
  } else {
    document.getElementById('fn').innerHTML = 'Ім`я може містити тільки літери українського і англійського алфавіту';
    return false;
  }
}

function validateEmail(){
  var x = document.forms["messageform"]["email"].value;
  var atpos = x.indexOf("@");
  var dotpos = x.lastIndexOf(".");
  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
    document.getElementById('em').innerHTML = 'Некоректне введення';
    return false;
  } else {
    document.getElementById('em').innerHTML = '';
    return true;
  }
}

function validatePhone(){
  var x = document.forms["messageform"]["phone"].value;
  var numbers = /^[\d\(\)\ - +]{12,14}\d$/;
    if (numbers.test(x)) {
      document.getElementById('ph').innerHTML = '';
        return true;
    } else {
    document.getElementById('ph').innerHTML = 'Некоректне введення';
    return false;
  }
}

function messageLength(){
  var x = document.forms["messageform"]["message"].value;
  messageLen = x.length;
  if (messageLen > 0){
  document.getElementById('mg').innerHTML = 'Довжина повідомлення - ' + messageLen;
return true;
} else{
  document.getElementById('mg').innerHTML = 'Ви нічого не написали';
    return false;
  }
}

function checkall(){
  if(validateEmail() && validateName() && validatePhone()) return true;
  else return alert("Некоректне введення даних у поля");
}