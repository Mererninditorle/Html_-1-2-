let d = document.querySelector('#d');

function succes(position) {
d.innerHTML = `Your coordinates are: Longitude - ${position.coords.longitude}, Latitude - ${position.coords.latitude}<br>`;
    if (position.coords.accuracy > 50000) {
        d.innerHTML += `No one knows where you are`;
    } else {
    d.innerHTML += `Accuracy: ${position.coords.accuracy}`;
    };
    console.log("succes");
};

function error (err) {
    switch(err.code){
        case 1: d.innerHTML += `No acces`; break;
        case 2: d.innerHTML += `Technical issue`; break;
        case 3: d.innerHTML += `Time limit reached`; break;
        default: d.innerHTML += `Some problem has occured. Please contact our support center`;
    };
    console.log("error");
};

let limit = {
    enableHighAccuracy: true, //высокая точность
    timeout: 10000, // время, через которое появится ошибка с истечением времени
    maximumAge: 20000 //время, через которое устройство ещё раз соберёт координаты //infinity - единоразовое сбор информации (координат)
}

navigator.geolocation.getCurrentPosition(succes, error, limit);