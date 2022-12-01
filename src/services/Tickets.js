import clienteAxios from '../config/axios';

export const createTicket = async (ticket) => {
    try {
        const { data } = await clienteAxios.post('/ticket', ticket);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getWeeklyTickets = async () => {
    try {
        const { data } = await clienteAxios.get('/weekly-tickets');
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getAllTickets = async () => {
    try {
        const { data } = await clienteAxios.get('/tickets');
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const updateWeeklyTicket = async (ticket) => {
    try {
        const { data } = await clienteAxios.put(`/ticket/${ticket._id}`, ticket);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const finishTicket = async (id) => {
    try {
        const { data } = await clienteAxios.put(`/ticket-finish/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const deleteTicket = async (id) => {
    try {
        const { data } = await clienteAxios.delete(`/ticket/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}