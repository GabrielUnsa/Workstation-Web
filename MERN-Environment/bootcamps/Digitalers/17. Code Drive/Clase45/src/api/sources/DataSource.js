/**
 * Clase base
 */
export default class DataSource extends EventTarget
{
    constructor()
    {
        super();

        this.events = {
            beforeSend: new Event('beforesend'),
            afterSend: (data) => {
                const evt = new Event('aftersend');
                evt.data = data;
                return evt;
            }
        }
    }

    async all(resource) {}
}
