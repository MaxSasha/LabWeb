var array = ["Краще нехай конкуренти думають, що ми розгублені, ніж вони будуть знати наші плани",
			"Щоб зробити щось важливе, треба подолати страх провалу",
			"Завжди давайте більше, ніж очікувалося",
			"Досвід – це перевага, але іноді він може стати на заваді",
      		"Я запрещаю вам выходить на улицу © Джейсон Стэтхем",
			  "Як тільки стає занадто багато правил, інновації зникають"];
function generate()
{
	var x =prompt("Введіть ціле число");
	var result=0;
	for(var i = 0;i<=x;i++)
	{
		result+=i;
	}
	alert(""+result);
}
function generate2()
{
	var x = "";
	for(var i = 1;i<99;i++)
	{
		if(i%2==0){}
		else
		x+=""+i+",";
	}
	alert(x);
}
function generate3()
{
	var x =prompt("Введіть ціле число");
	var result=1;
	for(var i = 1;i<=x;i++)
	{
		result*=i;
		
	}
	alert(""+result);
}
function generate4()
{
	document.getElementById('top').style.display='block';
	document.getElementById('center').style.display='block';
	document.getElementById('bottom').style.display='block';
	var array = ['','one','two','three','four','five','six','seven','eight','nine','ten'];
	var x ="";
	for(var i = 1;i<=10;i++)
	{
		x='';
		for (var j = 1;j<=10;j++) {
			x+=""+i+"*"+""+j+"="+i*j+"<br>";
		}
		document.getElementById(''+array[i]).innerHTML = ''+x;
		
	}
}
function update() {
	let clock = document.getElementById('clock');
	let date = new Date();
	let hours = date.getHours();
	if (hours < 10) hours = '0' + hours;
	clock.children[0].innerHTML = hours;
  
	let minutes = date.getMinutes();
	if (minutes < 10) minutes = '0' + minutes;
	clock.children[1].innerHTML = minutes;
  
	let seconds = date.getSeconds();
	if (seconds < 10) seconds = '0' + seconds;
	clock.children[2].innerHTML = seconds;
  }
	
let timerId;

function clockStart() {
  timerId = setInterval(update, 1000);
  update();
}

function clockStop() {
  clearInterval(timerId);
  timerId = null;
}

function printText(){
	document.getElementById('text').innerHTML = 'Максимів';
	document.getElementById('text2').innerHTML = 'Олександр';
	document.getElementById('text3').innerHTML = 'Володимирович';
}
function showDate(){
	text = "08.10.2000"
	alert(""+text);
}
function calculate(){
	var x =prompt("Введіть x,y,z через пробіл");
	x.split(" ");
	var result = Math.sqrt(x[0]+Math.sqrt(x[1]+Math.sqrt(2*x[2])))
	alert(""+result);
}