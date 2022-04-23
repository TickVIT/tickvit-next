import classes from './TicketList.module.scss'
import { faker } from '@faker-js/faker'
import { v4 as uuidv4 } from 'uuid'
import dateFormat from 'dateformat'
import { useEffect, useState } from 'react'
import CheckBox from '../CheckBox/CheckBox'
import TicketHeader from '../TicketHeader/TicketHeader'
import Topbar from '../Topbar/Topbar'

const TicketList = () => {
    return (
        <div className={classes.ticketList}>
            <Topbar />
            <TicketHeader
                back={false}
                reload={true}
                check={true}
                status={true}
                threeDots={true}
                assign={false}
            />
            {[...Array(10)].map((_, index) => (
                <TicketItem
                    key={uuidv4()}
                    name={faker.name.findName() + ' 19BCX10010'}
                    subject={
                        faker.company.catchPhrase() +
                        faker.company.catchPhrase()
                    }
                    label={
                        Math.round(Math.random()) === 0 ? 'Urgent' : undefined
                    }
                    status="Pending"
                    date={faker.date.past()}
                    read={Math.round(Math.random()) === 0 ? true : false}
                    index={index}
                />
            ))}
        </div>
    )
}

type ItemType = {
    name: string
    subject: string
    label?: string
    status: 'Pending' | 'In-review' | 'Solved'
    date: Date
    read: boolean
    index: number
}

const TicketItem = ({
    name,
    subject,
    label,
    status,
    date,
    read,
    index,
}: ItemType) => {
    const now = new Date()

    const [hasMounted, setHasMounted] = useState(false)
    useEffect(() => {
        setHasMounted(true)
    }, [])
    if (!hasMounted) {
        return null
    }
    return (
        <div
            className={`${classes.item} ${
                read ? classes.read : classes.unread
            }`}
            style={{ zIndex: 20 - index }}
        >
            <div className={classes.left}>
                <CheckBox />
                <div className={classes.name}>{name}</div>
                <div
                    className={classes.subject}
                    style={{
                        width: label ? '500px' : '600px',
                    }}
                >
                    {subject}
                </div>
            </div>

            <div className={classes.right}>
                {label && <div className={classes.label}>{label}</div>}
                <div className={classes.statusDate}>
                    <div className={classes.status}>{status}</div>
                    <div className={classes.date}>
                        {date.toDateString() === now.toDateString()
                            ? dateFormat(date, 'shortTime')
                            : date.getFullYear() === now.getFullYear()
                            ? dateFormat(date, 'mmm d')
                            : dateFormat(date, 'shortDate')}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketList
