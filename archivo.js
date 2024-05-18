const productos = [
    {nombre: "bolsa de dormir", precio: 50000},
    {nombre: "carpa", precio: 120000},
    {nombre: "mochila", precio: 35000},
    {nombre: "kit cocina", precio: 90000},
    {nombre: "manta termica", precio: 35000},
];

let carrito = []
let selection = prompt ("bienvenido, si usted desea comprar algun producto por favor escriba si o no")

while(selection !="si" && selection !="no"){
    alert("solo responder si o no")
    selection = prompt("bienvenido a tienda el viajero, si usted desea comprar algun producto por favor escriba si o no")
}

if(selection == "si"){
    alert("aqui vera la lista de productos")
    let productostodos = productos.map(
        (producto) => producto.nombre + " " + producto.precio + "$"
);
alert (productostodos.join (" - "))
} else if (selection == "no"){
    alert("gracias por visitarnos")
}

while(selection !="no"){
    let producto = prompt("selecciona un producto")
    let precio = 0

    if(producto =="bolsa de dormir" || producto == "carpa" || producto == "mochila" || producto =="kit de cocina" || producto == "manta termica"){
        switch (producto) {
            case "bolsa de dormir":
                precio= 50000;
                break;
            case "carpa":
                precio= 120000;
                break;
            case"mochila":
                precio= 35000;
                break;
            case"kit de cocina":
                precio= 90000;
                break;
            case "manta termica":
                precio= 35000;
                break;
        }
let unidades = parseInt(prompt("unidades a llevar"))
carrito.push({producto,unidades,precio})
console.log (carrito)
} else {
alert("producto no encontrado")
}
selection = prompt ("quiere continuar?")

while(selection == "no"){
    alert("hasta la proxima")
    carrito.forEach((carritofinal)=> {
        console.log(`producto:${carritofinal.producto}, unidades: ${carritofinal.unidades}, total ${carritofinal.precio}`)
    })
break;
}
}
const total = carrito.reduce((acc,todo) => acc + todo.precio * todo.unidades, 0)
console.log(`precio total a pagar: ${total}`)


