import React from 'react'
import classes from './MessageView.module.scss'
import Image from 'next/image'

const MessageView = () => {
    return (
        <>
            <div className={classes.messageContainer}>
                <div className={classes.messageTitle}>
                    Issue Regarding FFCS
                    <div className={classes.messageTag}>Urgent</div>
                </div>
                <div className={classes.messageDetails}>
                    <div className={classes.avatar}>
                        <Image
                            src={'/svg/avatar.svg'}
                            width={40}
                            height={40}
                            alt='user'
                        />
                    </div>
                    <div className={classes.senderDetails}>
                        <div className={classes.name}> Priyanka Giri</div>
                        <div className={classes.email}>
                            priyanka.giri2019@vitbhopal.ac.in
                        </div>
                    </div>
                    <div className={classes.date}>
                        1st January 2021, 10:00AM
                    </div>
                </div>
                <div className={classes.messageContent}>
                    <div className={classes.messageSubject}>
                        Course Registration Issue - Slot Full
                    </div>
                    <div className={classes.messageBody}>
                        Respected sir/ma’am,<br></br><br></br> I couldn’t register for CSE1001 due
                        to slots being full. I request you to assist me in this
                        issue. <br></br><br></br>Thank you, 19BCY10XXXX
                    </div>
                </div>
                <div className={classes.hr}></div>
                <div className={classes.messageDetails}>
                    <div className={classes.avatar}>
                        <Image
                            src={'/svg/avatar.svg'}
                            width={40}
                            height={40}
                            alt='user'
                        />
                    </div>
                    <div className={classes.senderDetails}>
                        <div className={classes.name}> Dr. Faculty</div>
                        <div className={classes.email}>
                            faculty@vitbhopal.ac.in
                        </div>
                    </div>
                    <div className={classes.date}>
                        2nd January 2021, 11:00AM
                    </div>
                </div>
                <div className={classes.messageContent}>
                    <div className={classes.messageBody}>
                    Transfered the ticket to FFCS Team for them too look into it.
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default MessageView
