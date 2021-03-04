/*if (firstName === "tingwei"){
  alert("welcome tingwei!");
}else{
  alert("WRONG USERNAME!!");
  window.close();
}

if (pw === 1234){
  alert("correct password!");
}else{
  alert("WRONG PASSWORD!!");
  window.close();
}
*/

var firstName = prompt("please enter your name!");
var firstNameList = ["tingwei","sami","mark"];
var password = prompt("please enter your password!");
var pw = parseInt(password);
var pwList = [1234,4567,7890];
var output = "Welcome ";
var userId = prompt("please enter your userID!");
var userID2 = parseInt(userId);

if(firstName.toLowerCase() === " " || firstName.toLowerCase() === null ||firstName.toLowerCase() === " "|| firstName.toLowerCase() === null
  || userID2 === " " || userID2 === null){
	alert("You need to enter your user info!");
  window.close();
}else{
  switch(userID2){
  case 1:
    if (firstName.toLowerCase() ===firstNameList[0] && pw=== pwList[0]){
    alert(output+= firstNameList[0]);
    }
    break;
  
  case 2:
    if (firstName.toLowerCase() ===firstNameList[1] && pw=== pwList[1]){
    alert(output+= firstNameList[1]);
    }
    break;
  
  case 1:
    if (firstName.toLowerCase() ===firstNameList[2] && pw=== pwList[2]){
    alert(output+= firstNameList[2]);
    }
    break;

  default:
    alert("WRONG USER INFO!");
    window.close();
    break;
  }
}












