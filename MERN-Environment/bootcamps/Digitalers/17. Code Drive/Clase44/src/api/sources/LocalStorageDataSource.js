import DataSource from "./DataSource";

/**
 * Precacheo
 */
export default class LocalStorageDataSource extends DataSource {

    static getItem(item)
    {
        JSON.parse(localStorage.getItem(item));
    }

	static async all(resource) {
		return LocalStorageDataSource.getItem(resource);
	}
}
