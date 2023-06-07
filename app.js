/// lista de instrumentos
const GUITARRA = 1;
const BATERIA = 2;
const BAJO = 3;
const SAXO = 4;

const PGUITARRA = 10000;
const PBATERIA = 5000;
const PBAJO = 10000;
const PSAXO = 6000;

///variables
let iniciar = "";
let continuar;
let total = 0;
let cantidad;

/// funcion de calculadora


function carrito() {

    producto = parseInt(prompt("Buenos dias, disculpen los inconvenientes, pero tenemos un stock limitado a:\n 1- guitarra a $10,000 \n 2- bateria a  $5,000 \n 3- bajo a $10,000 \n 4- saxo a $6,000 \n por favor indique el numero del producto que deseé: "));

    if (producto <= 0 || producto > 4) {
        alert ("por favor elija un producto valido");
        carrito ();
    } else {
        cantidad = parseFloat(prompt("indique la cantidad deseada:"));

        switch (producto) {
            case GUITARRA:
                total = total + (PGUITARRA*cantidad);
                break;
            case BATERIA:
                total = total + (PBATERIA * cantidad);
                break;
            case BAJO:
                total = total + (PBAJO * cantidad);
                break;
            case SAXO:
                total = total + (PSAXO * cantidad);
                break;
            default:
                alert ("por favor, indique un numero")
                break;
        }
        alert("su total es de: $" + total);
    }
}

/// inicio de la ejecucion:

iniciar = prompt("Buen dia, quiere comprar instrumentos en la pagina? si/no");

if (iniciar == "si") {
    do {
        carrito();
        continuar = prompt("desea agregar otro producto? si/no");
    } while (continuar == "si");
    if (continuar !== "si") {
        alert("muchas gracias! sus productos fueron agregados al carrito con exito! Tiene un total de: $" + total);
    }
} else {
    alert("Vuelva pronto!");
}