import classes from './TicketList.module.scss'
import { faker } from '@faker-js/faker'
import { v4 as uuidv4 } from 'uuid'
import dateFormat from 'dateformat'
import TicketHeader from '../TicketHeader/TicketHeader'

const TicketList = () => {
    return (
        <div className={classes.ticketList}>
            <TicketHeader />
            {[...Array(10)].map(() => (
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
}

const TicketItem = ({ name, subject, label, status, date }: ItemType) => {
    const now = new Date()
    return (
        <div className={classes.item}>
            <div className={classes.left}>
                <input type="checkbox" name="" id="" />
                <div className={classes.name}>{name}</div>
                <div className={classes.subject}>{subject}</div>
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
