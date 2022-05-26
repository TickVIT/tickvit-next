import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Signin from '../components/SignIn/Signin'
import LoginFailed from '../components/loginfailed/LoginFailed'
import classes from '../styles/Home.module.scss'

// @desc Login Page
// @route /
const Home: NextPage = () => {
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
            <Signin />
            {/* <LoginFailed /> */}
        </div>
    )
}

export default Home
