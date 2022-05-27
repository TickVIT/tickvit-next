import React, { useState } from 'react'
import classes from './Navbar.module.scss'
import Image from 'next/image'
import Tickets from '../../public/svg/tickets.svg'
import Manage from '../../public/svg/manage.svg'
import FAQ from '../../public/svg/faq.svg'
import { File, Users } from 'react-feather'
import Link from 'next/link'

const Navbar = () => {
    const [selected, setSelected] = useState(true)
    return (
        <div className={classes.outerBox}>
            <Link href="/tickets" passHref>
                <div
                    className={`${classes.boxItems} ${
                        selected && classes.selected
                    }`}
                >
                    <div className={classes.icon}>
                        <Tickets height={30} width={30} strokeWidth="1.5px" />
                    </div>
                    <div className={classes.itemText}>Tickets</div>
                </div>
            </Link>
            <Link href="/manager" passHref>
                <div className={classes.boxItems}>
                    <div className={classes.icon}>
                        <Users height={30} width={30} strokeWidth="1.5px" />
                    </div>
                    <div className={classes.itemText}>Manage</div>
                </div>
            </Link>
            <Link href="/faq" passHref>
                <div className={classes.boxItems}>
                    <div className={classes.icon}>
                        <FAQ height={30} width={30} strokeWidth="1.5px" />
                    </div>
                    <div className={classes.itemText}>FAQs</div>
                </div>
            </Link>
        </div>
    )
}

export default Navbar
