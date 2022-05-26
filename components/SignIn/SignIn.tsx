import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import classes from './SignIn.module.scss'
import Image from 'next/image'
import { useEffect } from 'react'

// @desc Login Page
// @route /
const SignIn: NextPage = () => {
    useEffect(() => {
        document.body.classList.add(classes['overflow-hidden'])

        return () => {
            document.body.classList.remove(classes['overflow-hidden'])
        }
    }, [])

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

                <div className={classes.loginContainer}>
                    <div className={classes.vitLogoContainer}>
                        <Image
                            src="/svg/vitbhopallogo.svg"
                            quality={100}
                            width="200px"
                            height="200px"
                            alt="Background"
                        />
                    </div>
                    <div className={classes.bgWrap}>
                        <Image
                            src="/svg/bghome.svg"
                            width="250"
                            height="100"
                            layout="responsive"
                            objectFit="cover"
                            alt="Background"
                        />
                    </div>

                    <div className={classes.poppinsText}>
                        CREATE A TICKET WITH
                    </div>
                    <div className={classes.loginLogo}>
                        <Image
                            src={'/svg/TICKVIT.svg'}
                            width={'500px'}
                            height={'200px'}
                            alt="TickVIT"
                        />
                    </div>
                    <div className={classes.normalText}>
                        Online Help Ticket System to facitilate faculty and
                        student in resolving issues.
                    </div>
                    <Link href="/tickets" passHref>
                        <button className={classes.loginButton}>
                            <Image
                                src={'/svg/google.svg'}
                                width={20}
                                height={20}
                                alt="Google"
                            />
                            SIGN IN
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SignIn
