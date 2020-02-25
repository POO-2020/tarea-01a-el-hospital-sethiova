import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Doctor from "./doctor.js"
import Paciente from "./paciente.js"
import Nombre from "./nombre.js"
export default class Cita {
    /**
     * 
     * @param {string} fecha 
     * @param {string} hora 
     * @param {string} doctor 
     * @param {string} paciente 
     */
    constructor(fecha, hora, doctor, paciente){
        this.fecha = new Fecha(fecha)
        this.hora = hora
        this.doctor = new Nombre(doctor)
        this.paciente = new Nombre(paciente)
    }
    getCita = _=>
    (`${this.fecha.getFecha()}, ${this.hora.getFormato24()}, Dr.${this.doctor.nombre.apellidoPaterno}, ${this.paciente.nombre.getNombreCompleto()}`)
    }

let prueba = new Cita(new Date(), new Tiempo(new Date()), new Nombre("Ramirez","The game","Lol"), new Nombre("Pablo","Escobar","Sos"))
console.log(prueba.getCita())