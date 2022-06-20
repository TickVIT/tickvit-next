import { NextPage } from 'next'
import Navbar from '../../components/NavBar/Navbar'
import SideBar from '../../components/SideBar/SideBar'
import TicketHeader from '../../components/TicketHeader/TicketHeader'
import TicketList from '../../components/Tickets/TicketList'
import Topbar from '../../components/Topbar/Topbar'
import classes from '../../styles/Tickets.module.scss'

// @desc View all Tickets List
// @route /tickets
const Tickets: NextPage = () => {

    return (
        <div className={classes.content}>
            <Navbar />
            <SideBar />
            <div className={classes.main}>
                <Topbar />
                <TicketHeader
                    back={false}
                    reload={true}
                    check={true}
                    threeDots={true}
                    assign={false}
                />
                <TicketList />
            </div>
        </div>
    )
}

export default Tickets
