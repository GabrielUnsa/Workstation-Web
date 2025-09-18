class Process {
    nombre: string;
    horaLlegada: Date;
    duracion: number;
    probIO: number;

    constructor( nombre: string = "", horaLleagada: Date = new Date(0), duracion: number = 0, probIO: number = 0){
        this.nombre = nombre;
        this.horaLlegada = horaLleagada;
        this.duracion = duracion;
        this.probIO = probIO;
    } 

    setNombre( nombre: string ): void{
        this.nombre = nombre;
    }

    setHoraLLegada( horaLlegada: Date): void{
        this.horaLlegada = horaLlegada;
    }

    setLlegada( minutos: number, segundo: number ): void{
        this.horaLlegada.setMinutes(minutos);
        this.horaLlegada.setSeconds(segundo);
    }

    setDuracion( duracion: number ): void{
        this.duracion = duracion;
    }

    setProbIO( probIO: number ){
        this.probIO = probIO;
    }

    getNombre(): string{
        return this.nombre;
    }

    getHoraLLegada(): Date{
        return this.horaLlegada;
    }

    getDuracion(): number{
        return this.duracion;
    }

    getProbIO(): number{
        return this.probIO;
    }
}

export default Process;
