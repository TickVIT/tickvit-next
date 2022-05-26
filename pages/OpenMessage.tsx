import type { NextPage } from 'next'
import Head from 'next/head'
import classes from '../styles/OpenMessage.module.scss'
import TicketHeader from '../components/TicketHeader/TicketHeader'
import Topbar from '../components/Topbar/Topbar'
import MessageView from '../components/MessageView/MessageView'
import RichTextEditor from '../components/RichTextEditor/RichTextEditor'

// @desc Upon Openning a message
// @route /OpenMessage
const Message: NextPage = () => {
    return (
        <div>
            <Head>
                <title>TickVIT</title>
                <meta
                    name="description"
                    content="An Online Help Ticket System which facilitates in the faculty and students to resolve issues in a simple and organized manner."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* code goes below */}

            <div className={classes.content}>
                <div className={classes.main}>
                    <Topbar />
                    <TicketHeader
                        back={true}
                        reload={false}
                        check={false}
                        status={true}
                        threeDots={false}
                        assign={true}
                    />
                </div>
                <MessageView />
                <RichTextEditor/>
            </div>
        </div>
    )
}

export default Message
