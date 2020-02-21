import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Nombre from "./nombre.js"
class Cita {
    constructor(fecha, hora, doctor, paciente){
        this.fecha = new Fecha(fecha)
        this.hora = hora
        this.doctor = doctor
        this.paciente = paciente
    }
    getCita(){
    return(`${this.fecha.getFecha()}, ${this.hora.getFormato24()}`)
    }
}
let prueba = new Cita(new Date(), new Tiempo(new Date()),new Nombre("Angelo","Martin","Perez"), new Nombre("Pablo","Escobar","Sos"))
console.log(prueba.getCita())