import DataSource from "./DataSource";
import configs from '../../configs.json';

/**
 * Desde la Red
 */
export default class ApiDataSource extends DataSource
{
    static url(resource)
    {
        return `${configs.apiEndpoint}/${resource}`;
    }

    static async all(resource)
    {
        const res = await fetch(ApiDataSource.url(resource));
        const data = await res.json();
        return data;
    }
}