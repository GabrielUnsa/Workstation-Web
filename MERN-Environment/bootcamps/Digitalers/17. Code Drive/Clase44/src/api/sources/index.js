import ApiDataSource from "./ApiDataSource";
import LocalStorageDataSource from "./LocalStorageDataSource";
import MockDataSource from "./MockDataSource";

import configs from '../../configs.json'

const dataSources = {
    'mock': MockDataSource,
    'local': LocalStorageDataSource,
    'api': ApiDataSource
}

export default dataSources[configs.dataSource];
