// // Desafio Entregable N°3 - Incorporando Objetos y Arrays
// // Armar un simulador interactivo, la estructura final de tu proyecto integrador.
// // Ingresar productos y calcular pagos en cuotas sobre un monto determinado (Sumatoria de Carrito).

// // Creando la clase producto

class Producto{
    constructor(id,nombre, precio, stock){
        this.id=id;
        this.nombre=nombre;
        this.precio=parseFloat(precio);
        this.stock=stock;
    }
}

// objeto de tipo productos
    let producto1=new Producto(1,"zapatos",1500,12)
    let producto2=new Producto(2,"pantalones",6000,19)
    let producto3=new Producto(3,"camisa",3500,4)
    let producto4=new Producto(4,"short",1000,8)
    let producto5=new Producto(5,"reloj",1900,24)

// array de productos
let productos=[producto1,producto2,producto3,producto4,producto5]

let carrito=[];

// Funcion Motrar productos
const mostrarProductos = ()=>{
    let mensaje=`Elija el poducto deseado:
    `
    productos.forEach(produc=>{
        mensaje +=`Opcion ${produc.id}: Articulo: ${produc.nombre} - Precio: ${produc.precio} - Stock: ${produc.stock}
    `   
    })
    if(carrito.length==0){
    mensaje+=`Opcion 0: Salir de la compra - Carrito Vacio`
    let opcion= parseInt(prompt(mensaje))
    return opcion;
    }
    else{
        mensaje+=`Opcion 0: Mostrar Total del Carrito`
        let opcion= parseInt(prompt(mensaje))
        return opcion;
    }
} 
// Funcion Comprar
let comprar= true;
while(comprar){
    let opcion=mostrarProductos()
    if (opcion>=1 && opcion<=5){
    let productoselecionado=productos.find(produc=> produc.id=== opcion)
        if (carrito.length===0){
        productoselecionado.cantidad=1;
        productoselecionado.stock--;
        carrito.push(productoselecionado);
        }else{
            let productoencarrito=carrito.find(produc=>produc.id===opcion) 
            if (productoencarrito){
                productoencarrito.cantidad++;
                productoencarrito.stock--;
                if(productoencarrito.stock===0){
                    productos=productos.filter(produc=>produc.id != opcion)
                }
            }
            else{
                productoselecionado.cantidad=1;
                productoselecionado.stock--;
                carrito.push(productoselecionado);  
            }
        }
    }
    else{
        comprar=false;
    }
}

// Funcion Mostrar Carrito
    const mostrarTotalCarrito=()=>{
        let mensajecarrito="";
        if (carrito.length>0){
    carrito.forEach(produc=>{
        mensajecarrito+=`  
        Nombre: ${produc.nombre} - Cantidad: ${produc.cantidad} - Total $${produc.cantidad*produc.precio}
        `
    })
    mensajecarrito += `
        Total Carrito: ${carrito.reduce((total,produc) => total + (produc.precio * produc.cantidad),0)}`
        alert(mensajecarrito)
        //llamando a la funcion calculo de cuotas.
        metododepago();
        }
        else{
            mensajecarrito+="No hay productos en el carrito"
            alert(mensajecarrito);
        }       
    }

// Funcion Costo total de productos  
const costoTotalProductos =() => {
    return carrito.reduce((total, produc) => total + (produc.precio * produc.cantidad),0);
}

// Funcion Calculo de cuotas
function calculodecuotas(){
    let plandecuotas = prompt("Indique el plan de cuotas con el que desea realizar su compra: \n Opcion 1 - Plan 3 cotas \n Opcion 2 - Plan 6 cotas \n Opcion 3 - Plan 12 cotas \n Ingrese las letras ESC para salir de calculador");
    while (plandecuotas!=="ESC"){
        switch(plandecuotas){
            case "1":
                alert(trescuotas());
            break;
            case "2":
                alert(seiscuotas());
            break;
            case "3":
                alert(docecuotas());
            break;
            default: 
                alert("Error, debe ingresar una opcion correspondiente al plan de cuotas que desea");
            break;
        }
        break;
    }  
    plandecuotas=alert("Muchas gracias por realizar su compra con nosotros");
}

function trescuotas(){
    costodelproducto=(costoTotalProductos()/3)
   return (("El monto a cancelar en el plan de tres cuotas es:" +" "+(costodelproducto.toFixed(2))+" "+"$Ars por cuota"));
}

function seiscuotas(){
    costodelproducto=(costoTotalProductos()/6)
   return (("El monto a cancelar en el plan de seis cuotas es:" +" "+(costodelproducto.toFixed(2))+" "+"$Ars por cuota"));
}

function docecuotas(){
    costodelproducto=(costoTotalProductos()/12)
   return (("El monto a cancelar en el plan de doce cuotas es:" +" "+(costodelproducto.toFixed(2))+" "+"$Ars por cuota"));

}

//Llamado a las Funciones
mostrarTotalCarrito();


// Funcion Metodo de Pago
function metododepago(){
    let metododepago= prompt("Indique el metodo de pago con el que desea realizar su compra: \n Opcion 1 - Mercadolibre \n Opcion 2 - Efectivo (Un Pago) \n Opcion 3 - Rapidpago (un Pago) \n Ingrese las letras ESC para salir de la compra");
    while (metododepago!=="ESC"){
        switch(metododepago){
            case "1":
                calculodecuotas();                
            break;
            case "2":
                alert("El monto a cancelar en efectivo seria: "+ costoTotalProductos());
                alert("Muchas gracias por realizar su compra con nosotros"); 
            break;
            case "3":
                alert("El monto a cancelar en efectivo seria: "+ costoTotalProductos());
                alert("Muchas gracias por realizar su compra con nosotros"); 
            break;
            default: 
                alert("Error, debe ingresar una opcion correspondiente al plan de cuotas que desea");
            break;
        }
        break;
    } 
}
