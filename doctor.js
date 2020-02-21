import Nombre from "./nombre.js"
export default class Doctor {
    constructor(nombre, especialidad, telefono, cedula){
        this.nombre = nombre
        this.especialidad = especialidad
        this.telefono = telefono
        this.cedula = cedula
    }
    getPerfil(){
    return(`${this.cedula}, ${this.especialidad}, ${this.nombre.getNombreCompleto()}, ${this.cedula}`)        
    }
}
let prueba = new Doctor(new Nombre("Loquillo","Menzillo","Carrillo"), "Cirujano Plastico", "312-102-3332", "3DAIDI2I1J")
console.log(prueba.getPerfil())
