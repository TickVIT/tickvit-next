import { NextPage } from 'next'
import React from 'react'
import TicketHeader from '../../components/TicketHeader/TicketHeader'
import TicketList from '../../components/TicketList/TicketList'

// @desc View all Tickets List
// @route /tickets
const Tickets: NextPage = () => {
    return (
        <div>
            <TicketList />
        </div>
    )
}

export default Tickets
