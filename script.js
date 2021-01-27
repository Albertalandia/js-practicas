var todosLosPrestamos = [
    {
        nombre: "Lucas",
        dinero: 50000, 
        meses: 12, 
        intereses: 100,
    }, {
        nombre: "Daniela",
        dinero: 100000, 
        meses: 10, 
        intereses: 100,
    },
        {
        nombre: "Lisandro",
        dinero: 60000, 
        meses: 12, 
        intereses: 100,
    }
]; 


var nombre = prompt("¿Cuál es tu nombre?");
var dinero =  parseInt(prompt("¿Cuánto dinero necesitás?"));
var meses = parseInt(prompt("¿En cuántos meses querés devolverlo?"));
var intereses = parseInt((dinero * 5)/100);

function cuotaPrestamo(prestamo) {
    return prestamo.dinero + " " + prestamo.intereses
}

function prestamo (nombre, dinero, meses, intereses) {
    this.nombre = nombre;
    this.dinero = dinero;
    this.meses = meses;
    this.intereses = intereses;

    this.informacion =  function(){
        return cuotaPrestamo(this)
    };
}


var miPrestamo = new prestamo (nombre, dinero, meses, intereses);
todosLosPrestamos.push(new prestamo(nombre, dinero, meses, intereses));
console.log(todosLosPrestamos)

var descuento = 100;
var miCuotaConDescuento;
var cuotaPrestamo = (dinero / meses) + intereses;
var cliente;
while (cliente !== "si" && cliente !== "sí" && cliente !== "no") {
cliente = (prompt("¿sos cliente de nuestro banco?"));
};

function sacarCuotaFinal(){
    
        if (cliente === "si") {
            miCuotaConDescuento = alert("Tu cuota será de" + " " + "$" + (cuotaPrestamo - descuento));
    }   else if (cliente === "no"){
        alert("Tu cuota será de" + " " + "$" + cuotaPrestamo);
    }   else {
        (prompt("¿sos cliente de nuestro banco?"));
    }   return miCuotaConDescuento;

}

sacarCuotaFinal()



// var todosLosPrestamos = [
// ]
// todosLosPrestamos.push(new prestamo("Lucas", 26464054, 50000, 12, 100))
// todosLosPrestamos.push(new prestamo("Lisandro", 26464059, 70000, 10, 100))
// todosLosPrestamos.push(new prestamo("Lucila", 26464053, 80000, 24, 100))
// todosLosPrestamos.push(new prestamo("Delfina", 26464056, 40000, 2, 100))
// todosLosPrestamos.push(new prestamo("Teo", 26464053, 20000, 5, 100))

// // for (var i = 0; i <todosLosPrestamos.length; i++){
// //     console.log(todosLosPrestamos[i])
// // }

// // todosLosPrestamos.forEach(prestamo => console.log(prestamo.nombre))
// // console.log(todosLosPrestamos)