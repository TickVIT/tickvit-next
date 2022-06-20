import faker from '@faker-js/faker'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { Mail, Menu, Search } from 'react-feather'
import { useClickOutside } from '../../hooks/useClickOutside'
import { useInteractions } from '../../hooks/useInteractions'
import TicketItem from '../Tickets/TicketItem'
import styles from './Topbar.module.scss'
import { v4 as uuidv4 } from 'uuid'

const Topbar = () => {
    const setInteractions = useInteractions((state) => state.setInteractions)
    return (
        <div className={styles.container}>
            <div
                className={styles.hamburger}
                onClick={() => setInteractions('showSidebar', true)}
            >
                <Menu />
            </div>

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
    const selectStatus = () => {
        const rand = Math.round(Math.random() * 2)
        return rand === 0 ? 'Pending' : rand === 1 ? 'In-review' : 'Solved'
    }

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
                {/* {mails.map((mail, index) => (
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
                ))} */}

                {[...Array(4)].map((_, index) => {
                    const id = uuidv4()
                    return (
                        <TicketItem
                            key={id}
                            id={id}
                            status={selectStatus()}
                            name={faker.name.findName() + ' 19BCX10010'}
                            subject={
                                faker.company.catchPhrase() +
                                faker.company.catchPhrase()
                            }
                            label={
                                Math.round(Math.random()) === 0
                                    ? 'Urgent'
                                    : undefined
                            }
                            date={faker.date.recent()}
                            read={
                                Math.round(Math.random()) === 0 ? true : false
                            }
                            index={index}
                            checkbox={false}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Topbar
