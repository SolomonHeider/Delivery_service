var button=document.getElementsByName("count")[0];
var tarif=document.getElementsByName("tarif")[0];
var type=document.getElementsByName("type")[0];
var weight=document.getElementsByName("weight")[0];
var lenght=document.getElementsByName("lenght")[0];
var width=document.getElementsByName("width")[0];
var height=document.getElementsByName("height")[0];
button.onclick = function(){
	if (document.getElementsByClassName('error')[0]){
		document.getElementsByClassName('error')[0].parentNode.removeChild(document.getElementsByClassName('error')[0]);
	}
	if (weight.value === "" || lenght.value === "" || width.value === "" || height.value === ""){
		generateError('Не все поля заполнены!')
	}
	else {
		if (document.getElementsByClassName('result')[0]){
		document.getElementsByClassName('result')[0].parentNode.removeChild(document.getElementsByClassName('result')[0]);
		}
		calculate();
	}
	
}
var generateError = function(text){
	var div = document.createElement('div');
	div.classList.add('error');
	div.textContent= text;
	document.getElementsByClassName('text')[0].append(div);
}
var calculate = function(){
	var result = (+lenght.value) * (+width.value) * (+height.value) * (+weight.value) * 0.01 + (+tarif.value) + (+type.value);
	var div = document.createElement('div');
	if (result){
		result = Math.round(result * 100) / 100 ;
		div.classList.add('result');
		div.textContent='Ориентировочная стоимость доставки: ' + result + ' руб.';
		document.getElementsByClassName('text')[0].append(div);
	}
	else {
		generateError('Некорректно заполнены поля!');
	}
}