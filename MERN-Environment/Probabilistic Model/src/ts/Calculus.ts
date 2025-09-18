import Process from './Process.js';
import EventsProcess from './EventsProcess.js';
import ProcessIntoMemory from './ProcessIntoMemory.js';

//PIM: Process Into Memory

//Variables de Calculo de Probabilidad
let lengthPIM: number; //Util: Calcular cpuxproceso/n
let IOPIM: number; 
let CPUxProcess: number;

//Info de los procesos que se estan ejecutando
let processIntoMemory: Array<ProcessIntoMemory> = [];
let timeOfEvent: string;
let timeOfNextEvent: string;


//Funciones Relacionadas a la Hora
const TimetoString = ( timeDate: Date ): string => {
    return timeDate.getMinutes() + ":" + timeDate.getSeconds();
};

const addTimeToString = ( timeByExecute: number) => {
    let [minString, segString] = timeOfEvent.split(':') || [];
    let min, seg, miliseg: number;
    miliseg = 0;
    if (minString !== undefined && segString !== undefined && !isNaN(parseInt(minString)) && !isNaN(parseInt(segString))){
        min = parseInt(minString);
        seg = parseInt(segString);
        seg += Math.trunc(timeByExecute/CPUxProcess);
        miliseg += Math.trunc(( (timeByExecute/CPUxProcess) - Math.trunc(timeByExecute*CPUxProcess)) * 60);
        if ( Math.trunc(miliseg/60) != 0 ){
            seg++;
        }
        return min.toString()+':'+seg.toString();
    }
    return '';
};


//Funciones de Calculo

const calcIO = ( processIntoMemory: Array<ProcessIntoMemory> ): number => {
    let aux: number = 1;
    for (let k = 0; k < processIntoMemory.length; k++) {
        aux *= processIntoMemory[k]!.getIO();
    }
    return aux;
};

const calcProcess = ( processIntoMemory: Array<ProcessIntoMemory>, timeByExecute: number, timeRemaining: number, eventsProcess: Array<EventsProcess>): boolean => {
    let minRemainingTime: number = processIntoMemory[0]!.getRemainingTime();
    timeRemaining = timeByExecute - minRemainingTime; 

    if ( timeRemaining > 0 ) {
        timeByExecute = minRemainingTime;
    }
    
    timeOfNextEvent = addTimeToString(timeByExecute);

    for (let k = 0; k < processIntoMemory.length; k++) {
        processIntoMemory[k]!.updateTime(timeByExecute);
        eventsProcess.push(new EventsProcess( processIntoMemory[k]!.getPosition().toString(), timeOfEvent , timeOfNextEvent , timeByExecute.toString(), processIntoMemory[k]!.getRemainingTime().toString()));
    }
    
    while ( processIntoMemory.length != 0 && processIntoMemory[0]?.getRemainingTime() === 0 ) {
        processIntoMemory.splice(0,1);
    }
    timeOfEvent = timeOfNextEvent;
    return processIntoMemory.length != 0 &&  timeRemaining > 0;
}

const endProcess = ( processIntoMemory: Array<ProcessIntoMemory>, eventsProcess: Array<EventsProcess>): boolean => {
    let minRemainingTime: number = processIntoMemory[0]!.getRemainingTime();
    timeOfNextEvent = addTimeToString(minRemainingTime);

    for (let k = 0; k < processIntoMemory.length; k++) {
        processIntoMemory[k]!.updateTime(minRemainingTime);
        eventsProcess.push(new EventsProcess( processIntoMemory[k]!.getPosition().toString(), timeOfEvent , timeOfNextEvent, minRemainingTime.toString(), processIntoMemory[k]!.getRemainingTime().toString()));
    }

    while ( processIntoMemory.length != 0 && processIntoMemory[0]?.getRemainingTime() === 0 ) {
        processIntoMemory.splice(0,1);
    }

    timeOfEvent = timeOfNextEvent;
    return processIntoMemory.length != 0;
}

const Calculus = ( procesos: Array<Process>, eventsProcess: Array<EventsProcess> ) => {

    let addProcess: ProcessIntoMemory;
    let timeByExecute: number;
    let timeNextProcess: number;
    let timeRemaining: number = 0;

    for (let i = 0; i < procesos.length - 1; i++) {
        addProcess = new ProcessIntoMemory( i, procesos[i]?.getDuracion(), procesos[i]?.getProbIO() );
        processIntoMemory.push(addProcess);
        processIntoMemory.sort( (a,b) => a.getRemainingTime() - b.getRemainingTime() );  
        lengthPIM = processIntoMemory.length;
        IOPIM = calcIO(processIntoMemory);
        CPUxProcess = (1 - IOPIM) / lengthPIM;
        timeOfEvent = TimetoString(procesos[i]!.getHoraLLegada());
        eventsProcess.push( new EventsProcess( procesos[i]?.getNombre(), TimetoString(procesos[i]!.getHoraLLegada()), '00:00', '0', procesos[i]?.getDuracion().toString()));
        timeNextProcess = (procesos[i+1]!.getHoraLLegada().getTime() - procesos[i]!.getHoraLLegada().getTime()) / 1000;
        timeByExecute = timeNextProcess * CPUxProcess;

        while ( calcProcess(processIntoMemory, timeByExecute, timeRemaining, eventsProcess) ){
            timeNextProcess = timeRemaining / CPUxProcess;
            lengthPIM = processIntoMemory.length;
            IOPIM = calcIO(processIntoMemory);
            CPUxProcess = (1 - IOPIM) / lengthPIM;
            timeByExecute = timeNextProcess * CPUxProcess;
        }
    }

    addProcess = new ProcessIntoMemory( procesos.length-1, procesos[procesos.length-1]?.getDuracion(), procesos[procesos.length-1]?.getProbIO() );
    processIntoMemory.push(addProcess);
    processIntoMemory.sort( (a,b) => a.getRemainingTime() - b.getRemainingTime() );
    lengthPIM = processIntoMemory.length;
    IOPIM = calcIO(processIntoMemory);
    CPUxProcess = (1 - IOPIM) / lengthPIM;
    eventsProcess.push( new EventsProcess( procesos[procesos.length-1]?.getNombre(),TimetoString(procesos[procesos.length-1]!.getHoraLLegada()), '00:00', '0', procesos[procesos.length-1]?.getDuracion().toString() ));
    timeOfEvent = TimetoString(procesos[procesos.length-1]!.getHoraLLegada());
    while( endProcess(processIntoMemory, eventsProcess) ){
        processIntoMemory.sort( (a,b) => a.getRemainingTime() - b.getRemainingTime() );
        lengthPIM = processIntoMemory.length;
        IOPIM = calcIO(processIntoMemory);
        CPUxProcess = (1 - IOPIM) / lengthPIM;
    }
};

export default Calculus;