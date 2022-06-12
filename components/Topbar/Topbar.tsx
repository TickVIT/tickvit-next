import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { Mail, Search } from 'react-feather'
import { useClickOutside } from '../../hooks/useClickOutside'
import styles from './Topbar.module.scss'

const Topbar = () => {
    return (
        <div className={styles.container}>
            <SearchInput />

            <div className={styles.profileDetails}>
                <div className={styles.avatar}>
                    <Image
                        src={'/svg/avatar.svg'}
                        width={45}
                        height={45}
                        alt="user"
                    />
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

    const ref = useRef(null)

    useClickOutside(ref, setIsOpen, isOpen)
    return (
        <div
            ref={ref}
            className={styles.input}
            onClick={() => setIsOpen(!isOpen)}
        >
            <Search size={18} className={styles.icon} />
            <input type="text" placeholder="Search" />

            <div
                className={styles.dropdown}
                style={{ display: isOpen ? 'block' : 'none' }}
                ref={ref}
            >
                {mails.map((mail, index) => (
                    <div
                        key={index}
                        className={styles.dropdownItem}
                        onClick={() => {
                            setIsOpen(!isOpen)
                        }}
                    >
                        <Mail size={18} className={styles.icon} />
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
