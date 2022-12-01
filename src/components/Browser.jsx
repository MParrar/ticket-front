/*eslint-disable*/
import { Button } from 'react-bootstrap';
import AddIcon from '@mui/icons-material/Add';
import './browser.css';
import { TicketForm } from './Tickets/TicketForm';

export const Browser = ({ setWeeklyTickets, showFormTicket, ticket, setTicket, loading, exceuteGetWeeklyTickets, typeForm, handleCloseFormTicket, initialTicket, weeklyTickets, categories, handleOpenFormTicket }) => {


    return (
        <>
            <div className='browser-weekly-ticket'>
                <Button
                    onClick={() => handleOpenFormTicket('add')}
                    style={{ marginLeft: '4px', backgroundColor: 'rgb(34 77 119)' }}><AddIcon /></Button>
            </div>
            <TicketForm
                showFormTicket={showFormTicket}
                handleCloseFormTicket={handleCloseFormTicket}
                setWeeklyTickets={setWeeklyTickets}
                ticket={ticket}
                setTicket={setTicket}
                categories={categories}
                weeklyTickets={weeklyTickets}
                initialTicket={initialTicket}
                typeForm={typeForm}
                exceuteGetWeeklyTickets={exceuteGetWeeklyTickets}
                loading={loading}
            />

        </>

    )
}
