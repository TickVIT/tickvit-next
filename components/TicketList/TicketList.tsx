import classes from './TicketList.module.scss'
import { faker } from '@faker-js/faker'
import { v4 as uuidv4 } from 'uuid'
import dateFormat from 'dateformat'
import { useEffect, useState } from 'react'
import CheckBox from '../CheckBox/CheckBox'
import { useCheckBox } from '../../hooks/useCheckBox'

const TicketList = () => {
    const selectStatus = () => {
        const rand = Math.round(Math.random() * 2)
        return rand === 0 ? 'Pending' : rand === 1 ? 'In-review' : 'Solved'
    }

    const addItem = useCheckBox((state) => state.addItem)
    return (
        <div className={classes.ticketList}>
            {[...Array(50)].map((_, index) => {
                const id = uuidv4()
                addItem({ id })
                return (
                    <TicketItem
                        key={id}
                        id={id}
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
                        status={selectStatus()}
                        date={faker.date.past()}
                        read={Math.round(Math.random()) === 0 ? true : false}
                        index={index}
                    />
                )
            })}
        </div>
    )
}

type ItemType = {
    id: string
    name: string
    subject: string
    label?: string
    status: 'Pending' | 'In-review' | 'Solved'
    date: Date
    read: boolean
    index: number
}

const TicketItem = ({
    id,
    name,
    subject,
    label,
    status,
    date,
    read,
    index,
}: ItemType) => {
    const now = new Date()
    const item = useCheckBox((state) =>
        state.items.find((item) => item.id === id)
    )

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
            } ${item?.isChecked && classes.selected}`}
            style={{ zIndex: 60 - index }}
        >
            <div className={classes.left}>
                <CheckBox name={id} checked={item?.isChecked || false} />
                <div className={classes.name}>{name}</div>
                <div
                    className={classes.subject}
                    style={{
                        width: label ? '490px' : '570px',
                    }}
                >
                    {subject}
                </div>
            </div>

            <div className={classes.right}>
                {label && <div className={classes.label}>{label}</div>}
                <div
                    className={`${classes.status} ${
                        status === 'Pending'
                            ? classes.pending
                            : status === 'In-review'
                            ? classes.inReview
                            : classes.solved
                    }`}
                >
                    {status}
                </div>
                <div className={classes.date}>
                    {date.toDateString() === now.toDateString()
                        ? dateFormat(date, 'shortTime')
                        : date.getFullYear() === now.getFullYear()
                        ? dateFormat(date, 'mmm d')
                        : dateFormat(date, 'shortDate')}
                </div>
            </div>
        </div>
    )
}

export default TicketList
