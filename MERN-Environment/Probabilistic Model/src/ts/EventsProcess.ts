class EventsProcess{

    processNameEvent: string;
    timeStartEvent: string;
    timeFinishEvent: string;
    timeProcessEvent: string;
    remainingTimeProcess: string;

    constructor( processNameEvent: string = "", timeStartEvent: string = "", timeFinishEvent: string = "", timeProcessEvent: string = '', remainingTimeProcess: string = ''){
        this.processNameEvent = processNameEvent;
        this.timeStartEvent = timeStartEvent;
        this.timeFinishEvent = timeFinishEvent;
        this.timeProcessEvent = timeProcessEvent;
        this.remainingTimeProcess = remainingTimeProcess;
    }
    setProcessNameEvent(processNameEvent: string = ""): void {
        this.processNameEvent = processNameEvent;
    }

}

export default EventsProcess;