import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import classes from '../styles/Home.module.scss'
import pic from '../public/VIT_Bhopal_Logo.png'

// @desc Login Page
// @route /
const Page404: NextPage = () => {
    return (
        <>
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

                <img
                    className={classes.vitLogoContainer}
                    src={pic}
                    alt="VIT_Logo"
                />

                <div className={classes.loginContainer}>
                    <div className={classes.headingText}>
                        404 PAGE NOT FOUND
                    </div>
                    <div className={classes.normalText}>
                        Looks like you wound up somewhere you're <br />
                        not supposed to be.
                    </div>
                    <Link href="/tickets" passHref>
                        <button className={classes.loginButton}>
                            <img
                                className={classes.Google_logo}
                                src=""
                                alt="Google_logo"
                            />
                            HOME
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Page404
