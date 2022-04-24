import { NextPage } from 'next'
import React from 'react'
import TicketHeader from '../../components/TicketHeader/TicketHeader'
import TicketList from '../../components/TicketList/TicketList'
import Topbar from '../../components/Topbar/Topbar'
import classes from '../../styles/Tickets.module.scss'

// @desc View all Tickets List
// @route /tickets
const Tickets: NextPage = () => {
    return (
        <div className={classes.content}>
            <div className={classes.main}>
                <Topbar />
                <TicketHeader
                    back={false}
                    reload={true}
                    check={true}
                    status={true}
                    threeDots={true}
                    assign={false}
                />
                <TicketList />
            </div>
        </div>
    )
}

export default Tickets
