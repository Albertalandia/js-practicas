
    var todosLosPrestamos = [
        {
            nombre: "Lucas",
            dinero: 50000, 
            meses: 12, 
            intereses: parseInt((dinero * 5)/100),
        }, {
            nombre: "Daniela",
            dinero: 100000, 
            meses: 10, 
            intereses: parseInt(dinero * 5)/100,
        },
            {
            nombre: "Lisandro",
            dinero: 60000, 
            meses: 12, 
            intereses: parseInt((dinero * 5)/100),
        }
    ]; 
    
    function recogerDatos() {


    var nombre = document.getElementById("nombre").value;
    var dinero =  parseInt(document.getElementById("dinero").value);
    var meses = parseInt(document.getElementById("meses").value);

    var cliente = "";
    var clienteSi = document.getElementById("si");
    var clienteNo = document.getElementById("no");

    if (clienteSi.checked){
        cliente = clienteSi.value;
    } else {
        cliente = clienteNo.value;
    }


    var intereses = parseInt((dinero * 5)/100);


    function infoCuotaPrestamo(prestamo) {
        return prestamo.dinero + " " + prestamo.intereses
    }


    function prestamo (nombre, dinero, meses, intereses) {

        this.nombre = nombre;
        this.dinero = dinero;
        this.meses = meses;
        this.intereses = intereses;

        this.informacion = function(){
            return infoCuotaPrestamo(this)
        };
    }

    var miPrestamo = new prestamo (nombre, dinero, meses, intereses);
    todosLosPrestamos.push(new prestamo(nombre, dinero, meses, intereses));
    console.log(todosLosPrestamos)

    var descuento = 100;
    var miCuotaConDescuento;
    var cuotaPrestamo = (dinero / meses) + intereses;

    function sacarCuotaFinal(){
        
            if ( cliente) {
                miCuotaConDescuento = alert("Tu cuota será de" + " " + "$" + (cuotaPrestamo - descuento));
        }   else if (cliente === "no"){
            alert("Tu cuota será de" + " " + "$" + cuotaPrestamo);
        }   return miCuotaConDescuento;
    }


    sacarCuotaFinal()


    var parrafo = document.createElement("p");
    var contenido = document.createTextNode("Tu cuota será de " + sacarCuotaFinal()); 
    parrafo.appendChild(contenido);
    document.body.appendChild(parrafo);
}