import DataSource from "./DataSource";

/**
 * Precacheo
 */
export default class LocalStorageDataSource extends DataSource {

    getItem(item)
    {
        JSON.parse(localStorage.getItem(item));
    }

	async all(resource) {
		return this.getItem(resource);
	}
}
