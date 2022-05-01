import React from 'react'
import classes from './Navbar.module.scss'
import FAQ from '../../static/icons/faq.svg'
import MANAGE from '../../static/icons/manage.svg'
import TICKETS from '../../static/icons/tickets.png'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className={classes.outerBox}>
            <div className={classes.boxItems}>
                <div>
                    <Image
                        src={TICKETS}
                        alt="ticket"
                        height="30px"
                        width="30px"
                        layout="intrinsic"
                    />
                </div>
                <div className="itemText">Tickets</div>
            </div>
            <div className={classes.boxItems}>
                <div>
                    <Image
                        src={MANAGE}
                        alt="manage"
                        height="30px"
                        width="30px"
                        layout="intrinsic"
                    />
                </div>
                <div className="itemText notSelected">Manage</div>
            </div>
            <div className={classes.boxItems}>
                <div>
                    <Image
                        src={FAQ}
                        alt="faq"
                        height="30px"
                        width="30px"
                        layout="intrinsic"
                    />
                </div>
                <div className="itemText notSelected">FAQs</div>
            </div>
        </div>
    )
}

export default Navbar
