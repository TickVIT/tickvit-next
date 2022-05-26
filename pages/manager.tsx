import type { NextPage } from 'next'
import Head from 'next/head'
import ManageSideBar from '../components/ManageSideBar/ManageSideBar'
import Navbar from '../components/NavBar/Navbar'

// @desc Manager Page
// @route /manager
const Manager: NextPage = () => {
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
            <div style={{ display: 'flex' }}>
                <Navbar />
                <ManageSideBar />
            </div>
        </div>
    )
}

export default Manager
