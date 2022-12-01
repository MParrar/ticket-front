import clienteAxios from '../config/axios';

export const getCategories = async () => {
    try {
        const { data } = await clienteAxios.get('/categories');
        return data;
    } catch (error) {
        console.log(error);
    }
};