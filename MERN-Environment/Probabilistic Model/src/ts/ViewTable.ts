import type EventsProcess from "./EventsProcess.js";
import Process from "./Process.js";

const divTableProcess = document.getElementById('table-process-load') as HTMLDivElement;
const divProcessSolved = document.getElementById('table-solved') as HTMLDivElement;

const viewLlegada = ( tiempo: Date ): string => {
    return tiempo.getMinutes() + ":" + tiempo.getSeconds();
}

const createHeaderTable = ( headerNames: Array<string> ): HTMLElement => {
    const headerTable = document.createElement('thead');
    const tr = document.createElement('tr');
    headerNames.forEach( title => {
        const th = document.createElement('th');
        th.textContent = title;
        tr.appendChild(th);
    });
    headerTable.appendChild(tr);
    return headerTable;
};

const createBodyTable = ( procesos: Array<Process> ): HTMLElement => {
    const tbody = document.createElement('tbody');
    procesos.forEach( valorFila =>{
        const tr = document.createElement('tr');
        Object.entries(valorFila).forEach( ([key, value]) => {
            const td = document.createElement('td');
            key === 'horaLlegada'? td.textContent =  viewLlegada(value) : td.textContent = value;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    return tbody;
};

const createTableViewProcessInput = ( procesos: Array<Process> ): void => {
    let headerTableNames = ['Nombre del Proceso',
                            'Hora de Llegada',
                            'Duración',
                            'I/O',
                           ];
    const tableView = document.createElement('table');
    tableView.classList.add('table');
    tableView.classList.add('table-hover');
    tableView.appendChild(createHeaderTable(headerTableNames));
    tableView.appendChild(createBodyTable(procesos));
    divTableProcess?.appendChild(tableView);
}

const createBodyTableSolved = ( eventsProcess: Array<EventsProcess> ): HTMLElement => {
    const tbody = document.createElement('tbody');
    eventsProcess.forEach( valorFila =>{
        const tr = document.createElement('tr');
        Object.entries(valorFila).forEach( ([key, value]) => {
            const td = document.createElement('td');
            td.textContent = value;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    return tbody;
};

const createTableViewProcessSolved = ( eventsProcess: Array<EventsProcess> ): void => {
    let headerTableNames = ['Nombre del Proceso',
                            'Hora de Inicio del Proceso',
                            'Hora de Fin del Proceso',
                            'Duración',
                            'Tiempo Faltante del Proceso',
                           ];          
    const tableView = document.createElement('table');
    tableView.classList.add('table');
    tableView.classList.add('table-hover');
    tableView.appendChild(createHeaderTable(headerTableNames));
    tableView.appendChild(createBodyTableSolved(eventsProcess));
    divProcessSolved?.appendChild(tableView);
};

export { createTableViewProcessInput, createTableViewProcessSolved };