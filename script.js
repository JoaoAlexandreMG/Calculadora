
var resultado = '';
var multiplicando, dividindo, somando, subtraindo;
var mutado = false;


document.getElementById('zero').addEventListener('click', function () {
    document.getElementById('display').value += '0';
});
document.getElementById('one').addEventListener('click', function () {
    document.getElementById('display').value += '1';
});
document.getElementById('two').addEventListener('click', function () {
    document.getElementById('display').value += '2';
});
document.getElementById('three').addEventListener('click', function () {
    document.getElementById('display').value += '3';
});
document.getElementById('four').addEventListener('click', function () {
    document.getElementById('display').value += '4';
});
document.getElementById('five').addEventListener('click', function () {
    document.getElementById('display').value += '5';
});
document.getElementById('six').addEventListener('click', function () {
    document.getElementById('display').value += '6';
});
document.getElementById('seven').addEventListener('click', function () {
    document.getElementById('display').value += '7';
});
document.getElementById('eight').addEventListener('click', function () {
    document.getElementById('display').value += '8';
});
document.getElementById('nine').addEventListener('click', function () {
    document.getElementById('display').value += '9';
});
document.getElementById('dot').addEventListener('click', function () {
    document.getElementById('display').value += '.';
});
document.getElementById('del').addEventListener('click', function () {
    display = document.getElementById('display')
    display.value = display.value.substring(0, display.value.length - 1);
});
document.getElementById('ac').addEventListener('click', function () {
    document.getElementById('display').value = '';
    resultado = '';
});
var audio = new Audio("click.mp3");
var mutado = false;

document.getElementById('disable_sounds').addEventListener('change', function () {
    mutado = document.getElementById("disable_sounds").checked;

    if (mutado) {
        audio = null;
    } else {
        audio = new Audio("click.mp3");
    }
});
document.getElementById('multiply').addEventListener('click', function () {
    display = parseNumber(document.getElementById('display').value);
    if (resultado != '' && multiplicando) {
        resultado = resultado * display;
    }
    else if (resultado === '') {
        resultado = parseNumber(resultado + display);
    }
    document.getElementById('display').value = '';


    multiplicando = 1;
    dividindo = 0;
    somando = 0;
    subtraindo = 0;
});
document.getElementById('divide').addEventListener('click', function () {
    display = parseNumber(document.getElementById('display').value);
    if (resultado != '' && dividindo) {
        resultado = resultado / display;
    }
    else if (resultado === '') {
        resultado = parseNumber(resultado + display);
    }
    document.getElementById('display').value = '';

    multiplicando = 0;
    dividindo = 1;
    somando = 0;
    subtraindo = 0;

});
document.getElementById('add').addEventListener('click', function () {
    display = parseNumber(document.getElementById('display').value);
    if (resultado != '' && somando) {
        resultado = resultado + display;
    }
    else if (resultado === '') {
        resultado = parseNumber(resultado + display);
    }
    document.getElementById('display').value = '';
    multiplicando = 0;
    dividindo = 0;
    somando = 1;
    subtraindo = 0;
});
document.getElementById('sub').addEventListener('click', function () {
    display = document.getElementById('display');
    if (display.value == '') {
        display.value += '-'
    }
    else {
        display = parseNumber(document.getElementById('display').value);

        if (resultado != '' && subtraindo) {
            resultado = resultado - display;
        }
        else if (resultado === '') {
            resultado = parseNumber(resultado + display);
        }
        document.getElementById('display').value = '';

        multiplicando = 0;
        dividindo = 0;
        somando = 0;
        subtraindo = 1;
    }

});

document.getElementById('equal').addEventListener('click', function () {
    display = document.getElementById('display');
    if (display.value) {
        display_number = parseNumber(display.value);
        if (multiplicando) {
            display.value = resultado * display_number
        }
        else if (dividindo) {
            display.value = resultado / display_number
        }
        else if (somando) {
            display.value = resultado + display_number
        }
        else if (subtraindo) {
            display.value = resultado - display_number
        }
        resultado = parseNumber(display.value);
        multiplicando = 0;
        dividindo = 0;
        somando = 0;
        subtraindo = 0;
    }

});

function parseNumber(num) {
    if (num.indexOf('.')) {
        return parseFloat(num);
    } else {
        return parseInt(num);
    }
}
