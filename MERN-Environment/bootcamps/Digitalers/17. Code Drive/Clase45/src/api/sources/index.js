import ApiDataSource from "./ApiDataSource";
import LocalStorageDataSource from "./LocalStorageDataSource";
import MockDataSource from "./MockDataSource";

import configs from "../../configs.json";

const apiDataSource = new ApiDataSource();
const localStorageDataSource = new LocalStorageDataSource();
const mockDataSource = new MockDataSource();

apiDataSource.addEventListener("aftersend", (e) => {
	if (!localStorage.getItem(e.data.resource)) {
		localStorage.setItem(e.data.resource, JSON.stringify(e.data.content));
	}
});

export default (async function () {
	const onlineRes = await fetch(configs.dataSource.apiDataSource.endpoint);

	const isOnline = onlineRes.ok;

	if (configs.dataSource.mode === "development") {
		return mockDataSource;
	} else {
		if (isOnline) {
			return apiDataSource;
		} else {
			return localStorageDataSource;
		}
	}
})();
