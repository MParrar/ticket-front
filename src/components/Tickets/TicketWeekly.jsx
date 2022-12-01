import React from 'react'
import './ticketWeekly.css'
import { Browser } from '../Browser'

export const TicketWeekly = ({ children, categories, ticket, setTicket, loading, exceuteGetWeeklyTickets, setWeeklyTickets, typeForm, weeklyTickets, initialTicket, handleCloseFormTicket, showFormTicket, handleOpenFormTicket }) => {
    return (
        <>
            <h1 className='weekly-title'> Ticket Weekly</h1>
            <h4 className='weekly-title'>Last update: {new Date().toString()}</h4>
            <Browser
                categories={categories}
                ticket={ticket}
                setWeeklyTickets={setWeeklyTickets}
                showFormTicket={showFormTicket}
                handleCloseFormTicket={handleCloseFormTicket}
                handleOpenFormTicket={handleOpenFormTicket}
                setTicket={setTicket}
                weeklyTickets={weeklyTickets}
                initialTicket={initialTicket}
                typeForm={typeForm}
                exceuteGetWeeklyTickets={exceuteGetWeeklyTickets}
                loading={loading}
            />
            <div className='body-weekly-ticket'>
                <div className='container-weekly-ticket'>
                    {children}
                </div>
            </div>

        </>

    )
}
