class ProcessIntoMemory{
   position: number;
   IO: number;
   remainingTime: number;
    
    constructor( position: number = -1, remainingTime: number = 0, IO: number = 0 ){
        this.position = position;
        this.remainingTime = remainingTime;
        this.IO = IO;
    }

    getPosition(): number{
        return this.position;
    }

    getRemainingTime(): number{
        return this.remainingTime;
    }

    getIO(): number{
        return this.IO;
    }

    updateTime( time: number): void{
        this.remainingTime -= time;
    }
    
}

export default ProcessIntoMemory;