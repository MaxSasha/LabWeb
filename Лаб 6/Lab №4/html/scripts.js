var array = ["Кто обзывается тот сам так называется© Джейсон Стэтхем ",
			"Я парнишка модный,по жизни свободный,корешей не бросаю и братву уважаю © Джейсон Стэтхем",
			"На чужом мопеде по ямам, как на торпеде© Джейсон Стэтхем",
			"Однажды я себе сказал 'Хватит бухать Олег!' но я не Олег © Джейсон Стэтхем",
      		"Я запрещаю вам выходить на улицу © Джейсон Стэтхем",
      		"Три полоски и очки, шльопки, семки и носки нас качатет андеграунд в жигулях наш долбит саунд © XS Проджэкт"];
function generate()
{
	var a=Math.round(Math.random()*5);
	document.getElementById('quote').innerHTML = ''+array[a];
}
					