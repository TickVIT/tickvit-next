import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import classes from './Home.module.scss'
import Image from 'next/image'

// @desc Login Page
// @route /
const Signin: NextPage = () => {
    return (
        <>
            <div>
                <Head>
                    <title>TickVIT</title>
                    <meta
                        name='description'
                        content='An Online Help Ticket System which facilitates in the faculty and students to resolve issues in a simple and organized manner.'
                    />
                    <link rel='icon' href='/favicon.ico' />
                </Head>

                {/* code goes below */}
                {/* <img className={classes.vitLogoContainer} alt='' /> */}

                <div className={classes.loginContainer}>
                    {/* <div className={classes.bgWrap}> */}
                    <Image
                        src='/svg/bghome.svg'
                        layout='fill'
                        objectFit='cover'
                        quality={100}
                        alt='Background'
                    />
                    {/* </div> */}

                    <div className={classes.poppinsText}>
                        CREATE A TICKET WITH
                    </div>
                    <div className={classes.loginLogo}>TICKVIT</div>
                    <div className={classes.normalText}>
                        Online Help Ticket System to facitilate faculty <br />
                        and student in resolving issues.
                    </div>
                    <Link href='/tickets' passHref>
                        <button className={classes.loginButton}>SIGN IN</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Signin
