import DataSource from './sources';

export const users_all = async () => {
    const dataSource = await DataSource;
    return await dataSource.all('users');
}

export const users_one = async(id) => {}
export const users_update = async(id, newUser) => {}
export const users_delete = async(id) => {}
export const users_create = async(newUser) => {}
