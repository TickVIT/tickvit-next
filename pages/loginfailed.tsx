import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Loginpage from '../components/loginfailed/LoginFailed'
import classes from '../styles/Home.module.scss'

// @desc Page 404
// @route /
const loginfailed: NextPage = () => {
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
            <Loginpage />
        </div>
    )
}

export default loginfailed
