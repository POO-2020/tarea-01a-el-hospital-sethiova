class Tiempo {
    /**
     * 
     * @param {number} hora 
     * @param {number} minutos 
     * @param {string} periodo 
     */
    constructor(){
        this.fecha = new Date()
        this.hora = this.fecha.getHours()
        this.minutos = this.fecha.getMinutes()
        this.periodo = new Array("Am","Pm")
    }
    getFormato12(){

    }
    getFormato24(){
        
    }
}
console.log()