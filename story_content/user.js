function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6pD7yqsiXdB":
        Script1();
        break;
      case "6EWN8KhAvw4":
        Script2();
        break;
      case "68Dh7oQqRSm":
        Script3();
        break;
      case "6HoH4fUTDxz":
        Script4();
        break;
      case "5YAkgF9BNB2":
        Script5();
        break;
      case "6ifYHInUjrX":
        Script6();
        break;
      case "6mlvtqo27VQ":
        Script7();
        break;
      case "5kGB4X037XZ":
        Script8();
        break;
      case "5kauIJmA8j5":
        Script9();
        break;
      case "5vqFopQSLg1":
        Script10();
        break;
      case "5qHDTkCM1q5":
        Script11();
        break;
      case "6B7kD71oPjD":
        Script12();
        break;
      case "65JK6ZLZgVl":
        Script13();
        break;
      case "6QxK5crwE6z":
        Script14();
        break;
      case "5e8xynT5hY3":
        Script15();
        break;
      case "6cJHAHfNp4d":
        Script16();
        break;
      case "6m6r97g3Nqv":
        Script17();
        break;
      case "65JPKUKpkfJ":
        Script18();
        break;
      case "63alSRgG2Tx":
        Script19();
        break;
      case "6BoSH0Yb2QB":
        Script20();
        break;
      case "6Lm3xvPNpuN":
        Script21();
        break;
      case "5zpXgqFa0At":
        Script22();
        break;
      case "6Cn8Z3nnenU":
        Script23();
        break;
      case "6anMvpWPVwB":
        Script24();
        break;
      case "6DvJHoV1V8W":
        Script25();
        break;
      case "6Z3HB8ICtDQ":
        Script26();
        break;
      case "6U0vkcCQkj6":
        Script27();
        break;
      case "6Nx4bbbIils":
        Script28();
        break;
      case "60Bs7XicLgP":
        Script29();
        break;
      case "6P4CFQy8fZ7":
        Script30();
        break;
      case "6XITOgNg6UQ":
        Script31();
        break;
      case "6SQ3sxl7e1M":
        Script32();
        break;
      case "6gGx46GxVQL":
        Script33();
        break;
      case "69Z2SVFhreY":
        Script34();
        break;
      case "68qTXG2VwQi":
        Script35();
        break;
      case "6aw2EQJeyzy":
        Script36();
        break;
      case "6lGYk15mZKq":
        Script37();
        break;
      case "6Tr2rptPbge":
        Script38();
        break;
      case "5wywtH9rb0F":
        Script39();
        break;
      case "5naPVDmgOtV":
        Script40();
        break;
      case "6hMTi2kjN7Y":
        Script41();
        break;
      case "6T7LkJ3FPnH":
        Script42();
        break;
      case "6NNymsZa2uy":
        Script43();
        break;
      case "6jGsmVVuBoh":
        Script44();
        break;
      case "5VC3KGLGCMR":
        Script45();
        break;
      case "5w7shiKuH9W":
        Script46();
        break;
      case "6IOOSpnsq2d":
        Script47();
        break;
      case "62j56r21Y6v":
        Script48();
        break;
      case "5mVF6728iPW":
        Script49();
        break;
      case "6rWd10tjZuS":
        Script50();
        break;
      case "6iWvcXfzPMi":
        Script51();
        break;
      case "5sM4IMV3Dgg":
        Script52();
        break;
      case "5xMB7Zb1yXN":
        Script53();
        break;
      case "6dKvFLaGPgZ":
        Script54();
        break;
      case "5tjRtTZMRX4":
        Script55();
        break;
      case "6hTuSEw2knO":
        Script56();
        break;
      case "5WPf2bIgNRu":
        Script57();
        break;
      case "6RPceMqHejY":
        Script58();
        break;
      case "5XCdykGkDii":
        Script59();
        break;
      case "6SFBV1xCe3e":
        Script60();
        break;
  }
}

function Script1()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script2()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwffQX8LYh2SJ0-KEeNQvtu9-vL0FN8YsBo2v6BaxauH8caXVASBimmH6XpI71RlEYlBg/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")
}
}

function Script3()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script4()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script5()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwffQX8LYh2SJ0-KEeNQvtu9-vL0FN8YsBo2v6BaxauH8caXVASBimmH6XpI71RlEYlBg/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")
}
}

function Script6()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script7()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script8()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwffQX8LYh2SJ0-KEeNQvtu9-vL0FN8YsBo2v6BaxauH8caXVASBimmH6XpI71RlEYlBg/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")
}
}

function Script9()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script10()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script11()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwffQX8LYh2SJ0-KEeNQvtu9-vL0FN8YsBo2v6BaxauH8caXVASBimmH6XpI71RlEYlBg/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")
}
}

function Script12()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script13()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script14()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwffQX8LYh2SJ0-KEeNQvtu9-vL0FN8YsBo2v6BaxauH8caXVASBimmH6XpI71RlEYlBg/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")
}
}

function Script15()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script16()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script17()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwffQX8LYh2SJ0-KEeNQvtu9-vL0FN8YsBo2v6BaxauH8caXVASBimmH6XpI71RlEYlBg/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")
}
}

function Script18()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script19()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script20()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwffQX8LYh2SJ0-KEeNQvtu9-vL0FN8YsBo2v6BaxauH8caXVASBimmH6XpI71RlEYlBg/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")
}
}

function Script21()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script22()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script23()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwffQX8LYh2SJ0-KEeNQvtu9-vL0FN8YsBo2v6BaxauH8caXVASBimmH6XpI71RlEYlBg/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")
}
}

function Script24()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script25()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script26()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwffQX8LYh2SJ0-KEeNQvtu9-vL0FN8YsBo2v6BaxauH8caXVASBimmH6XpI71RlEYlBg/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")
}
}

function Script27()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script28()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script29()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwffQX8LYh2SJ0-KEeNQvtu9-vL0FN8YsBo2v6BaxauH8caXVASBimmH6XpI71RlEYlBg/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")
}
}

function Script30()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script31()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script32()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwffQX8LYh2SJ0-KEeNQvtu9-vL0FN8YsBo2v6BaxauH8caXVASBimmH6XpI71RlEYlBg/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")
}
}

function Script33()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script34()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script35()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwffQX8LYh2SJ0-KEeNQvtu9-vL0FN8YsBo2v6BaxauH8caXVASBimmH6XpI71RlEYlBg/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")
}
}

function Script36()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script37()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script38()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwffQX8LYh2SJ0-KEeNQvtu9-vL0FN8YsBo2v6BaxauH8caXVASBimmH6XpI71RlEYlBg/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")
}
}

function Script39()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script40()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script41()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwffQX8LYh2SJ0-KEeNQvtu9-vL0FN8YsBo2v6BaxauH8caXVASBimmH6XpI71RlEYlBg/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")
}
}

function Script42()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script43()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script44()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwffQX8LYh2SJ0-KEeNQvtu9-vL0FN8YsBo2v6BaxauH8caXVASBimmH6XpI71RlEYlBg/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")
}
}

function Script45()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script46()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script47()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwffQX8LYh2SJ0-KEeNQvtu9-vL0FN8YsBo2v6BaxauH8caXVASBimmH6XpI71RlEYlBg/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")
}
}

function Script48()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script49()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script50()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwffQX8LYh2SJ0-KEeNQvtu9-vL0FN8YsBo2v6BaxauH8caXVASBimmH6XpI71RlEYlBg/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")
}
}

function Script51()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script52()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script53()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwffQX8LYh2SJ0-KEeNQvtu9-vL0FN8YsBo2v6BaxauH8caXVASBimmH6XpI71RlEYlBg/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")
}
}

function Script54()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script55()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script56()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwffQX8LYh2SJ0-KEeNQvtu9-vL0FN8YsBo2v6BaxauH8caXVASBimmH6XpI71RlEYlBg/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")
}
}

function Script57()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script58()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script59()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwffQX8LYh2SJ0-KEeNQvtu9-vL0FN8YsBo2v6BaxauH8caXVASBimmH6XpI71RlEYlBg/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")
}
}

function Script60()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

