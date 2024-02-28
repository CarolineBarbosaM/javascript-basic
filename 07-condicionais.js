// Se.. Senão... Senão Se...

var num = 1

if(num === 1) {
    console.log('num é igual a 1');
}

var num = 0

if(num === 1) {
    console.log('num é igual a 1');
} else {
    console.log('num não é igual a 1');
}

(num === 1) ? num-- : num++;

var month = 5
if(month === 1) {
    console.log('Janeiro');
} else if(month === 2) {
    console.log('Fevereiro');
} else if(month === 3) {
    console.log('Março');
} else {
    console.log('Mês não é janeiro, fevereiro ou março');
}

//Switch

var newMoth = 5
switch (newMoth) {
    case 1:
        console.log('Janeiro');
        break;
    case 2:
        console.log('Fevereiro');
        break;
    case 3:
        console.log('Março');
        break;
    default:
        console.log('Mês não é janeiro, fevereiro ou março');
        break;
}