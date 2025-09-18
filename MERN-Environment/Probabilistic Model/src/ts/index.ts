import Process from './Process.js';
import EventsProcess from './EventsProcess.js';
import Calculus from './Calculus.js';
import {createTableViewProcessInput, createTableViewProcessSolved } from './ViewTable.js';

let cargarProceso = document.getElementById("cargarProceso") as HTMLButtonElement;
let calcListProcess = document.getElementById("solved") as HTMLButtonElement;
let viewProcessTable = document.getElementById("viewProcessInput") as HTMLButtonElement;

let nameInput = document.getElementById("process-name") as HTMLInputElement;
let minInput = document.getElementById("minInput") as HTMLInputElement;
let segInput = document.getElementById("segInput") as HTMLInputElement;
let duracionInput = document.getElementById("duracionInput") as HTMLInputElement;
let probIOInput= document.getElementById("probIOInput") as HTMLInputElement;

let inProcess: Process;
let procesos: Array<Process> = [];
let eventsProcess: Array<EventsProcess> = [];

const clearData = (nameInput: HTMLInputElement, minInput: HTMLInputElement, segInput: HTMLInputElement, duracionInput: HTMLInputElement, probIOInput: HTMLInputElement) =>{
    nameInput.value="";
    minInput.value="";
    segInput.value="";
    duracionInput.value="";
    probIOInput.value="";
};

const remplaceValueToName = () => {
    eventsProcess.forEach( valorEvento =>{
        if( !isNaN(parseInt(valorEvento.processNameEvent)) ) {
            valorEvento.setProcessNameEvent(procesos[parseInt(valorEvento.processNameEvent)]?.getNombre());
        }
    });
};

const controlVariables = (): boolean => {
    if( nameInput.value.length > 0 && 
        probIOInput.value.length > 0 && 
        duracionInput.value.length > 0 &&
        minInput.value.length > 0 &&
        segInput.value.length > 0 ) return true;
        else return false;
};

cargarProceso?.addEventListener("click", (e) => {
    if ( controlVariables() ) {
    inProcess = new Process();
    inProcess.setNombre(nameInput.value);
    inProcess.setProbIO(parseFloat(probIOInput.value));
    inProcess.setDuracion(parseFloat(duracionInput.value));
    inProcess.setLlegada(parseInt(minInput.value), parseInt(segInput.value)); 
    clearData(nameInput, minInput, segInput, duracionInput, probIOInput );
    procesos.push(inProcess);
    } else {
        alert("No puedo procesar NaN T-T");
    }
});

viewProcessTable?.addEventListener("click", (e) =>{
    createTableViewProcessInput(procesos);
});

calcListProcess?.addEventListener("click", (e) => {
    procesos = procesos.sort( ( a, b ) => a.getHoraLLegada().getTime() - b.getHoraLLegada().getTime());
    Calculus(procesos,eventsProcess);
    remplaceValueToName(); 
    createTableViewProcessSolved(eventsProcess);  
});