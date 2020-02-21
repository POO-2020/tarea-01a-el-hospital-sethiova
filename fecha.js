class Fecha {

    constructor(fecha){
        this.fecha = fecha
        this.fechaActual = new Date
        this.mes = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre")
        this.dia = new Array("Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo")
    }
    getAños(){
        return(`${this.fechaActual.getFullYear() - this.fecha.getFullYear()} años`)

    }
    getMeses(){
        let mes = (this.fechaActual.getFullYear() - this.fecha.getFullYear()) * 12 + (this.fechaActual.getMonth()-1)
        return (`${mes} meses`)
    }
    getSemanas(){
        let semana = (this.fechaActual.getFullYear() - this.fecha.getFullYear()) * 52 + ((this.fechaActual.getMonth() - 1) * 4 + (Math.round((this.fechaActual.getDay()) / 4 )))
        return(`${semana} semanas`)

    }
    getDias(){
        let dia = (this.fechaActual.getFullYear() - this.fecha.getFullYear()) * 365 + ((this.fechaActual.getMonth() - 1) * 30) 
        return(`${dia} dias`)
    }
    getFecha(){
        let mes = this.mes[this.fecha.getMonth() - 1]
        return(`${this.fecha.getDay()}/${mes}/${this.fecha.getFullYear()}`)
    }
    getDiaFecha(){
        let dia = this.dia[this.fecha.getDay() - 2]
        return(`Es el dia ${dia}`)
    }
}
let prueba1 = new Fecha(new Date(2001,9,5))
console.log(`${prueba1.getAños()}`)
console.log(`${prueba1.getMeses()}`)
console.log(`${prueba1.getSemanas()}`)
console.log(`${prueba1.getDias()}`)
console.log(`${prueba1.getFecha()}`)
console.log(`${prueba1.getDiaFecha()}`)