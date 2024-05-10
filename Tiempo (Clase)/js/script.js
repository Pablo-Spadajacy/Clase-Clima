function alerta(elemento) {
    alert("Cargando informe meteorológico de: "+elemento.innerText);
    var elemento_ciudad = document.querySelector('#ciudad');
    elemento_ciudad.innerText = elemento.innerText;
}

function eliminar_cookies() {
    var cookie = document.querySelector('.cookie');

    //cookie.remove();

    cookie.style.display = "none";
}

function convertir(element) {
    console.log(element.value);
    
    let valor = element.value;
    
    var max = document.querySelectorAll('.max');
    var min = document.querySelectorAll('.min');
    
    if(valor === "°F") {
        for(let i= 0; i<4; i++) {
            var valorMax = max[i].innerText
            var farenMax = (valorMax * 9) / 5 + 32;
            console.log(Math.round(farenMax));
            max[i].innerText = Math.round(farenMax);
            var valorMin = min[i].innerText
            var farenMin = (valorMin * 9) / 5 + 32;
            console.log(Math.round(farenMin));
            min[i].innerText = Math.round(farenMin);
        }
    } else{
        for(let i= 0; i<4; i++) {
            var valorMax = max[i].innerText
            var celMax = (valorMax - 32) * (5 / 9);
            console.log(Math.round(celMax));
            max[i].innerText = Math.round(celMax);
            var valorMin = min[i].innerText
            var celMin = (valorMin - 32) * (5 / 9);
            console.log(Math.round(celMin));
            min[i].innerText = Math.round(celMin);
        }
    }
    
}
/*Código experimental de JS Clima by Cyn, Pablo , Guille*/

/*function pepito(element) {
    console.log(element.value);
}*/