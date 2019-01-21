var map;

DG.then(function () {
    map = DG.map('map', {
        center: [54.62, 39.74],
        zoom: 12
    });

    DG.marker([54.6243757, 39.78225321]).addTo(map).bindPopup(createDiv('Касимовское шоссе 21/4','+88005553535'));
    DG.marker([54.63040952, 39.70709234]).addTo(map).bindPopup(createDiv('Первомайский пр-кт 76','+88123458796'));
    DG.marker([54.62124509, 39.75311369]).addTo(map).bindPopup(createDiv('ул. Есенина 80/1','+88111111796'));
	DG.marker([55.77290711, 37.54260868]).addTo(map).bindPopup(createDiv('ул. Розанова 4','+88111111796')); 
	DG.marker([55.68221499, 37.5772199]).addTo(map).bindPopup(createDiv('ул. Кедрова 21','+88111111796')); 
	DG.marker([55.86880995, 37.61446774]).addTo(map).bindPopup(createDiv('Северный бульвар 17','+88111111796')); 
	DG.marker([59.91933903, 30.2934131]).addTo(map).bindPopup(createDiv('ул.Садовая 78','+88111111796')); 
	DG.marker([60.03950412, 30.40335953]).addTo(map).bindPopup(createDiv('Проспект просвещения 78','+88111111796')); 
	DG.marker([59.93898794, 30.35712361]).addTo(map).bindPopup(createDiv('ул.Некрасова 26','+88111111796'));
});
function createDiv(adr, tel) {
    var div = document.createElement('div');
    div.classList.add('popup');
    var adress = document.createElement('span');
    var phone = document.createElement('span');
    var workText = document.createElement('span');
    var workTime = document.createElement('span');
    adress.textContent = adr;
    adress.classList.add('adress');
    phone.textContent = 'Телефон: ' + tel;
    phone.classList.add('phone');
    workText.textContent = 'Режим работы: ';
    workTime.textContent = 'Пн-Пт: 10:00 - 20:00';
    div.append(adress);
    div.append(phone);
    div.append(workText);
    div.append(workTime);
    return div
}