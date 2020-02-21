import Nombre from "./nombre.js"
import Fecha from "./fecha.js"
export default class Paciente {
    constructor(nombre, fechaNacimiento, telefono){
        this.nombre = nombre
        this.fechaNacimiento = new Fecha(fechaNacimiento)
        this.telefono = telefono
    }
    getPerfil(){
        let telefono = this.telefono
        return(`${this.nombre.getNombreCompleto()}, ${this.fechaNacimiento.getFecha()}, ${this.telefono}`)
    }
}
let prueba = new Paciente(new Nombre("Alberto","Gonzales","Ramirez"), new Date(2001,8,10), "312-107-4736")
console.log(prueba.getPerfil())