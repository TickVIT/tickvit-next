import React, { useState } from 'react'
import classes from './Navbar.module.scss'
import Image from 'next/image'
import Tickets from '../../public/svg/tickets.svg'
import Manage from '../../public/svg/manage.svg'
import FAQ from '../../public/svg/faq.svg'
import { File, Users } from 'react-feather'

const Navbar = () => {
    const [selected, setSelected] = useState(true)
    return (
        <div className={classes.outerBox}>
            <div
                className={`${classes.boxItems} ${
                    selected && classes.selected
                }`}
            >
                <div className={classes.icon}>
                    <Tickets height={30} width={30} />
                </div>
                <div className={classes.itemText}>Tickets</div>
            </div>
            <div className={classes.boxItems}>
                <div className={classes.icon}>
                    <Users height={30} width={30} />
                </div>
                <div className={classes.itemText}>Manage</div>
            </div>
            <div className={classes.boxItems}>
                <div className={classes.icon}>
                    <FAQ height={30} width={30} />
                </div>
                <div className={classes.itemText}>FAQs</div>
            </div>
        </div>
    )
}

export default Navbar
