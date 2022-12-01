import { Container } from 'react-bootstrap'
import { TicketsTable } from '../components/Tickets/TicketsTable'
import '../components/Tickets/ticketWeekly.css'

export const Tickets = () => {
    return (
        <Container>
            <h1 className='weekly-title'>All Tickets</h1>
            <TicketsTable />
        </Container>
    )
}

