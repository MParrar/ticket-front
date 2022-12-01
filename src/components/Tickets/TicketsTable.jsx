import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { getAllTickets } from '../../services/Tickets';
import { Spinner } from '../Spinner';

export const TicketsTable = () => {

    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(false);

    const exceuteGetAllTickets = async () => {
        setLoading(true)
        const { tickets } = await getAllTickets()
        setTickets(tickets)
        setLoading(false)
    }

    useEffect(() => {
        exceuteGetAllTickets()
    }, []);

    return (
        <>

            {
                loading ?
                    <Spinner />
                    :
                    <div className='container' style={{ margin: '10px' }}>
                        <Table striped bordered hover style={{ marginTop: '5vh' }}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Requester</th>
                                    <th>Issue</th>
                                    <th>Response</th>
                                    <th>Date</th>
                                    <th>Category</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tickets.map((ticket, i) => (
                                        <tr key={ticket._id}>
                                            <td>{i + 1}</td>
                                            <td>{ticket.requester}</td>
                                            <td>{ticket.issue}</td>
                                            <td>{ticket.response}</td>
                                            <td>{ticket.date}</td>
                                            <td>{ticket.category?.name}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </div>
            }
        </>
    )
}
