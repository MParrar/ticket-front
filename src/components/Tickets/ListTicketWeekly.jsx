import { Ticket } from './Ticket'
import './card.css'
import { Spinner } from '../Spinner'

export const ListTicketWeekly = ({ weeklyTickets, handleCloseFormTicket, exceuteGetWeeklyTickets, typeForm, loading, handleOpenFormTicket, setTicket }) => {

    return (
        <>
            {
                loading ?
                    <Spinner />
                    :
                    <div className='card__container-weekly-ticket'>

                        {
                            weeklyTickets.map((weeklyTicket) => (
                                <Ticket
                                    key={weeklyTicket?._id}
                                    weeklyTicket={weeklyTicket}
                                    handleCloseFormTicket={handleCloseFormTicket}
                                    handleOpenFormTicket={handleOpenFormTicket}
                                    setTicket={setTicket}
                                    typeForm={typeForm}
                                    exceuteGetWeeklyTickets={exceuteGetWeeklyTickets}
                                />
                            ))
                        }
                    </div>
            }
        </>
    )
}
