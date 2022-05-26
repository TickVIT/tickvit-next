import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import classes from './LoginFailed.module.scss'
import Image from 'next/image'

// @desc Login Page
// @route /
const LoginFailed: NextPage = () => {
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
                <div className={classes.vitLogoContainer}>
                    <Image
                        src="/svg/vitbhopallogo.svg"
                        quality={100}
                        width="200px"
                        height="200px"
                        alt="Background"
                    />
                </div>

                <div className={classes.loginContainer}>
                    <div className={classes.bgWrap}>
                        <Image
                            src="/svg/bghome.svg"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                            alt="Background"
                            // className={classes.backgroundImg}
                        />
                    </div>

                    <div className={classes.headingText}>
                        LOGIN FAILED
                    </div>
                    <div className={classes.normalText}>
                        To login succesfully ensure you use your VIT Bhopal Email ID. <br />
                        Contact sdc@vitbhopal.ac.in if the issue persists.
                    </div>
                    <Link href="/tickets" passHref>
                        <button className={classes.loginButton}>SIGN IN</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default LoginFailed
