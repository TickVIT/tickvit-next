import Image from 'next/image'
import React, { useState } from 'react'
import styles from './Topbar.module.scss'

const Topbar = () => {
    return (
        <div className={styles.container}>
            <SearchInput />

            <div className={styles.profileDetails}>
                <div className={styles.detail}>
                    <div className={styles.name}>Dr. R Rakesh</div>
                    <div className={styles.post}>Admin</div>
                </div>
                <div className={styles.avatar}>
                    <Image src={'/svg/avatar.svg'} width={40} height={40} />
                </div>
            </div>
        </div>
    )
}

const SearchInput = () => {
    const [isOpen, setIsOpen] = useState(false)
    const mails = [
        {
            name: 'Priyanka Giri 19BCY10111',
            issue: 'Issue regarding FFCS',
            date: 'Sep 10',
        },
        {
            name: 'Manohar Patil 19BCE10393',
            issue: 'Proctor Details Not Showing ',
            date: 'Sep 10',
        },
        {
            name: 'Priyanka Giri 19BCY10111',
            issue: 'Issue regarding FFCS',
            date: 'Sep 10',
        },
        {
            name: 'Manohar Patil 19BCE10393',
            issue: 'Proctor Details Not Showing ',
            date: 'Sep 10',
        },
    ]
    return (
        <div className={styles.input} onClick={() => setIsOpen(!isOpen)}>
            <Image src={'/svg/search.svg'} width={18} height={18} />
            <input type="text" placeholder="Search" />

            <div
                className={styles.dropdown}
                style={{ display: isOpen ? 'block' : 'none' }}
            >
                {mails.map((mail, index) => (
                    <div
                        key={index}
                        className={styles.dropdownItem}
                        onClick={() => {
                            setValue(status)
                            setIsOpen(!isOpen)
                        }}
                    >
                        <Image src={'/svg/mail.svg'} width={18} height={18} />
                        <div className={styles.name}>{mail.name}</div>
                        <div className={styles.issue}>{mail.issue}</div>
                        <div className={styles.date}>{mail.date}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Topbar
