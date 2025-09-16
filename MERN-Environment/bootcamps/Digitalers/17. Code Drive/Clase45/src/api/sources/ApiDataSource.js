import DataSource from "./DataSource";
import configs from '../../configs.json';

/**
 * Desde la Red
 */
export default class ApiDataSource extends DataSource
{
    url(resource)
    {
        return `${configs.dataSource.apiDataSource.endpoint}/${resource}`;
    }

    async all(resource)
    {
        const res = await fetch(this.url(resource));
        const data = await res.json();

        this.dispatchEvent(this.events.afterSend({
            resource,
            content: data
        }));

        return data;
    }
}