let total = 0;

const pizzas = [
    { nombre: "Rucula", ingredientes: "Salsa de tomate, mozzarella, rucula, jamon crudo, parmesano", precio: 950 },
    { nombre: "Fugazzeta", ingredientes: "Salsa de tomate, mozzarella, cebolla", precio: 900 },
    { nombre: "Margarita", ingredientes: "Salsa de tomate, ajo, oregano, albahaca, aceite de oliva", precio: 800 },
    { nombre: "Calabresa", ingredientes: "Salsa de tomate, mozzarella, calabresa", precio: 900 },
];
class pedir {
    constructor(nombre, ingredientes, precio, cantidad) {
        this.nombre = nombre
        this.ingredientes = ingredientes
        this.precio = precio
        this.cantidad = cantidad
    }
}

let margarita = new pedir("Margarita", "Salsa de tomate, ajo, oregano, albahaca, aceite de oliva", 800, 0 )
let fugazzeta = new pedir("Fugazzeta", "Salsa de tomate, mozzarella, cebolla", 900, 0)
let calabresa = new pedir("Calabresa", "Salsa de tomate, mozzarella, calabresa", 900, 0)
let rucula = new pedir("Rucula y jamon crudo", "Salsa de tomate, mozzarella, rucula, jamon crudo, parmesano", 950, 0)

// FUNCION AGREGAR PIZZA
function agregarPizza() {
    let nombrePizza = prompt("Ingrese nombre de la pizza").toLowerCase();
    let ingredientesPizza = prompt("Ingrese los ingredientes de la pizza").toLowerCase();
    let precioPizza = parseInt (prompt("Ingrese el precio de la pizza"));
    let pizzaNueva = new aggMenu(nombrePizza, ingredientesPizza, precioPizza);
    pizzas.push(pizzaNueva)
}
class aggMenu{
    constructor(nombre, ingredientes, precio)
  {  this.nombre = nombre
this.ingredientes = ingredientes
this.precio = precio}
}

// FUNCION DE DESCUENTO
let cupon = true;
function descuento() {

    do {
        let pregDesc = prompt("Ingrese cupon de descuento").toUpperCase()
        if (pregDesc == "DESCUENTO") {
            let totalDesc = (total * 0.9);
            console.log("Total con descuento : $" + totalDesc)
            cupon = true
        }
        else if (pregDesc != "DESCUENTO") {
            alert("Este cupon ya expiro o no es valido!")
            let otroCup = prompt("Quiere probar otro cupon? (Si/No)").toLowerCase()
            if (otroCup == "si") {
                cupon = false;
            }
            else if (otroCup == "no") {
                cupon = true;
            }
        }
    } while (cupon == false)
}
// INICIO
let iniciar = true;
do {
    let comenzar = prompt("Elija una opcion (inresando el numero correspondiente) : \n1-Menu\n2-Ordenar\n3-Añadir producto al menu (solo uso del personal)\n4-Salir")

    while (comenzar != 1 && comenzar != 2 && comenzar != 3 && comenzar != 4) {
        alert("Por favor, elija una de las 4 opciones")

        comenzar = prompt("Elija una opcion (inresando el numero correspondiente) : \n1-Menu\n2-Ordenar\n3-Añadir producto al menu (solo uso del personal)\n4-Salir")
    }
    // MENU
    if (comenzar == 1) {
        console.log("-NUESTRO MENU-")
        pizzas.sort((a, b) => a.precio - b.precio);
        console.table(pizzas)
    }

    // ORDENAR
    else if (comenzar == 2) {
        let pedido = prompt("Que pizza quiere pedir? (esc para salir)").toLowerCase();
        do {
            switch (pedido) {
                case "margarita":
                    margarita.cantidad++;
                    total = total + margarita.precio;
                    alert("Se agrego una Margarita a tu pedido")
                    break;
                case "rucula":
                    rucula.cantidad++;
                    total = total + rucula.precio;
                    alert("Se agrego una Rucula a tu pedido")
                    break;
                case "fugazzeta":
                    fugazzeta.cantidad++;
                    total = total + fugazzeta.precio;
                    alert("Se agrego una Fugazzeta a tu pedido")
                    break;
                case "calabresa":
                    calabresa.cantidad++;
                    total = total + calabresa.precio;
                    alert("Se agrego una Calabresa a tu pedido")
                    break;
                case "esc":
                    alert("No has elejido ninugo producto")
                    break;
                default:
                    alert("No contamos con esa variedad");
            }
            if (pedido != "esc") { pedido = prompt("Que pizza quiere agregar? (listo para terminar)").toLowerCase(); }


        } while (pedido != "esc" && pedido != "listo") iniciar = false
        // CANTIDAD DE PIZZAS PEDIDAS
        if (pedido == "listo") {
            console.log("Su pedido es : \n" + margarita.cantidad + " Margarita \n" + rucula.cantidad + " Rucula \n" + fugazzeta.cantidad + " Fugazzeta \n" + calabresa.cantidad + " Calabresa")
            // TOTAL $
            console.log("Total del pedido : $" + total)
            // DESCUENTO
            if (total != 0) { descuento() };
            const horaPedido = new Date()
            console.log("Fecha y hora del pedido : ", horaPedido.toLocaleString())
        }
    }
    // AÑADIR PRODUCTO
    else if (comenzar == 3) {
        agregarPizza()
        alert("Producto añadido!")
    }
    // SALIR
    else if (comenzar == 4) {
        iniciar = false
    }

} while (iniciar == true)

alert("Muchas gracias!")