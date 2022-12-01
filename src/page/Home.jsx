import React, { useEffect, useState } from 'react'
import { ListTicketWeekly } from '../components/Tickets/ListTicketWeekly'
import { TicketWeekly } from '../components/Tickets/TicketWeekly'
import { getCategories } from '../services/Category'
import { getWeeklyTickets } from '../services/Tickets'

const initialTicket = {
    requester: '',
    issue: '',
    category: ''
}
export const Home = () => {

    const [weeklyTickets, setWeeklyTickets] = useState([]);
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [ticket, setTicket] = useState(initialTicket);
    const [typeForm, setTypeForm] = useState('');

    const exceuteGetWeeklyTickets = async () => {
        console.log("Se ejecuta")
        setLoading(true)
        const { weeklyTickets } = await getWeeklyTickets()
        setWeeklyTickets(weeklyTickets)
        setLoading(false)
    }

    const exceuteGetCategories = async () => {
        const { categories } = await getCategories()
        setCategories(categories)
    }

    useEffect(() => {
        exceuteGetCategories()
    }, []);

    useEffect(() => {
        exceuteGetWeeklyTickets()
    }, []);
    const [showFormTicket, setShowFormTicket] = useState(false);

    const handleCloseFormTicket = () => {
        setShowFormTicket(false)
        setTicket(initialTicket)
    }

    const handleOpenFormTicket = (type) => {
        setShowFormTicket(true)
        setTypeForm(type)
    }

    return (
        <TicketWeekly
            setTicket={setTicket}
            categories={categories}
            ticket={ticket}
            setWeeklyTickets={setWeeklyTickets}
            showFormTicket={showFormTicket}
            handleCloseFormTicket={handleCloseFormTicket}
            handleOpenFormTicket={handleOpenFormTicket}
            weeklyTickets={weeklyTickets}
            initialTicket={initialTicket}
            typeForm={typeForm}
            exceuteGetWeeklyTickets={exceuteGetWeeklyTickets}
            loading={loading}
        >
            <ListTicketWeekly
                weeklyTickets={weeklyTickets}
                handleCloseFormTicket={handleCloseFormTicket}
                handleOpenFormTicket={handleOpenFormTicket}
                setTicket={setTicket}
                typeForm={typeForm}
                loading={loading}
                exceuteGetWeeklyTickets={exceuteGetWeeklyTickets}

            />
        </TicketWeekly>
    )
}

