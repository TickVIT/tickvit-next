import { NextPage } from 'next'
import Navbar from '../../components/NavBar/Navbar'
import TicketHeader from '../../components/TicketHeader/TicketHeader'
import TicketList from '../../components/Tickets/TicketList'
import Topbar from '../../components/Topbar/Topbar'
import classes from '../../styles/Tickets.module.scss'
import dynamic from 'next/dynamic'
import FloatingActionButton from '../../components/FloatingActionButton/FloatingActionButton'

const SideBar = dynamic(() => import('../../components/SideBar/SideBar'), {
    ssr: false,
})

// @desc View all Tickets List
// @route /tickets
const Tickets: NextPage = () => {
    return (
        <>
            <div className={classes.content}>
                <Navbar />
                <div className={classes.sidebarWrapper}>
                    <SideBar />
                </div>
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
                    <FloatingActionButton />
                </div>
            </div>
        </>
    )
}

export default Tickets
