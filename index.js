class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.ventas = [];
    }

    vender(cantidad) {
        if (cantidad <= this.stock) {
            this.stock -= cantidad;
            this.ventas.push(cantidad);
            console.log(`Se vendieron ${cantidad} unidades de ${this.nombre}.`);
        } else {
            console.log(`No hay suficiente stock para vender ${cantidad} unidades de ${this.nombre}.`);
        }
    }

    totalVentas() {
        return this.ventas.reduce((total, venta) => total + venta, 0);
    }
}

const inventario = [];

function agregarProducto() {
    const nombre = prompt("Ingrese el nombre del producto:");
    const precio = parseFloat(prompt("Ingrese el precio del producto:"));
    const stock = parseInt(prompt("Ingrese el stock inicial del producto:"));

    const producto = new Producto(nombre, precio, stock);
    inventario.push(producto);
    console.log(`Se agregó ${producto.nombre} al inventario.`);
}

function quitarProducto() {
    const nombreProducto = prompt("Ingrese el nombre del producto a quitar:");

    const productoIndex = inventario.findIndex(producto => producto.nombre === nombreProducto);

    if (productoIndex !== -1) {
        inventario.splice(productoIndex, 1);
        console.log(`Se quitó ${nombreProducto} del inventario.`);
    } else {
        console.log(`El producto ${nombreProducto} no está en el inventario.`);
    }
}

function mostrarInventario() {
    let inventarioTexto = "Inventario:\n";
    inventario.forEach(producto => {
        inventarioTexto += `${producto.nombre} - Precio: ${producto.precio} - Stock: ${producto.stock}\n`;
    });
    alert(inventarioTexto);
}

function registrarVenta() {
    const nombreProducto = prompt("Ingrese el nombre del producto vendido:");
    const cantidad = parseInt(prompt("Ingrese la cantidad vendida:"));

    const producto = inventario.find(producto => producto.nombre === nombreProducto);

    if (producto) {
        producto.vender(cantidad);
    } else {
        console.log(`El producto ${nombreProducto} no está en el inventario.`);
    }
}

function mostrarMenu() {
    console.log("----- Menú -----");
    console.log("1) Registrar Mercadería");
    console.log("2) Remover Mercadería");
    console.log("3) Verificar Inventario");
    console.log("4) Registrar Venta");
    console.log("9) Salir");
}

let opcion = "";

while (opcion !== "9") {
    mostrarMenu();
    opcion = prompt(
        "----- Menú -----\n" +
        "1) Registrar Mercadería\n" +
        "2) Remover Mercadería\n" +
        "3) Verificar Inventario\n" +
        "4) Registrar Venta\n" +
        "9) Salir\n" +
        "Ingrese el número de la opción deseada:"
    );

    switch (opcion) {
        case "1":
            agregarProducto();
            break;
        case "2":
            quitarProducto();
            break;
        case "3":
            mostrarInventario();
            break;
        case "4":
            registrarVenta();
            break;
        case "9":
            console.log("Saliendo del programa.");
            break;
        default:
            console.log("Opción inválida. Por favor, ingrese una opción válida.");
            break;
    }
}

alert("Que tengas un buen dia");